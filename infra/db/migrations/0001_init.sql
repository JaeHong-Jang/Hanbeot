-- 0001_init: 설계서 5⑧·5⑨·5⑩, docs/harness/README §5
-- 앱은 비소유자 역할로 접속해야 RLS가 적용된다. app.user_id는 SET LOCAL(트랜잭션 한정)로 설정한다.
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('basic','sensitive','voice')),
  granted_at timestamptz NOT NULL DEFAULT now(),
  revoked_at timestamptz,
  version integer NOT NULL DEFAULT 1
);
CREATE INDEX consents_user_idx ON consents(user_id);

CREATE TABLE transcripts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_id uuid NOT NULL,
  speaker text NOT NULL,
  text text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX transcripts_user_idx ON transcripts(user_id);
CREATE INDEX transcripts_session_idx ON transcripts(session_id);

CREATE TABLE memories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  block text NOT NULL,
  state text NOT NULL CHECK (state IN ('stated','inferred','confirmed','approved')),
  text text NOT NULL,
  evidence_utterance_id integer,
  evidence_at timestamptz,
  expires_at timestamptz,
  embedding vector(1024)
);
CREATE INDEX memories_user_idx ON memories(user_id);
CREATE INDEX memories_embedding_idx ON memories USING hnsw (embedding vector_cosine_ops);

CREATE TABLE affect_cues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  utterance_id integer NOT NULL,
  category text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL  -- TTL 30일 초안(미확정)
);
CREATE INDEX affect_cues_user_idx ON affect_cues(user_id);

CREATE TABLE crisis_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  level text NOT NULL CHECK (level IN ('L0','L1','L2')),
  false_positive boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX crisis_logs_user_idx ON crisis_logs(user_id);

CREATE TABLE deletion_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,  -- users 행이 먼저 삭제될 수 있어 FK 없음
  scope text NOT NULL CHECK (scope IN ('all','sensitive')),
  status text NOT NULL DEFAULT 'pending',
  requested_at timestamptz NOT NULL DEFAULT now(),
  done_at timestamptz
);
CREATE INDEX deletion_queue_pending_idx ON deletion_queue(status, requested_at);

-- RLS (P0-9)
ALTER TABLE transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE transcripts FORCE ROW LEVEL SECURITY;
CREATE POLICY transcripts_isolation ON transcripts
  USING (user_id = current_setting('app.user_id')::uuid)
  WITH CHECK (user_id = current_setting('app.user_id')::uuid);

ALTER TABLE memories ENABLE ROW LEVEL SECURITY;
ALTER TABLE memories FORCE ROW LEVEL SECURITY;
CREATE POLICY memories_isolation ON memories
  USING (user_id = current_setting('app.user_id')::uuid)
  WITH CHECK (user_id = current_setting('app.user_id')::uuid);

ALTER TABLE affect_cues ENABLE ROW LEVEL SECURITY;
ALTER TABLE affect_cues FORCE ROW LEVEL SECURITY;
CREATE POLICY affect_cues_isolation ON affect_cues
  USING (user_id = current_setting('app.user_id')::uuid)
  WITH CHECK (user_id = current_setting('app.user_id')::uuid);

ALTER TABLE crisis_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE crisis_logs FORCE ROW LEVEL SECURITY;
CREATE POLICY crisis_logs_isolation ON crisis_logs
  USING (user_id = current_setting('app.user_id')::uuid)
  WITH CHECK (user_id = current_setting('app.user_id')::uuid);
