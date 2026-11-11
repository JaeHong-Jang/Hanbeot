import type { Consent, Memory, MemoryCandidate, Summary } from '@/entities';

/**
 * 서버 없이 화면을 돌려 보는 가짜 API. `npm run dev:mock`에서만 켜진다.
 * `/api/*` 요청을 가로채 packages/contracts와 같은 모양으로 답한다.
 * 동의와 기억은 탭을 닫기 전까지만 남는다(sessionStorage).
 */
const STORE_KEY = 'hanbeot.mock';

type Store = { consent: Consent; memories: Memory[]; candidates: MemoryCandidate[] };

const daysAgoIso = (days: number): string => new Date(Date.now() - days * 864e5).toISOString();

function seed(): Store {
  return {
    consent: { basic: false, voice: false, sensitive: false },
    memories: [
      {
        id: 'm1',
        kind: 'stated',
        state: 'approved',
        text: '팀 프로젝트에서 혼자 맡은 일이 많아 지쳤다고 했어요',
        created_at: daysAgoIso(3),
      },
      {
        id: 'm2',
        kind: 'stated',
        state: 'approved',
        text: '친구와 다툰 뒤 연락은 했지만 아직 어색하다고 했어요',
        created_at: daysAgoIso(7),
      },
      {
        id: 'm3',
        kind: 'inferred',
        state: 'confirmed',
        text: '발표 이야기를 할 때 목소리가 가라앉아 보였어요',
        created_at: daysAgoIso(3),
        expires_at: daysAgoIso(-27),
      },
    ],
    candidates: [
      {
        id: 'c1',
        kind: 'stated',
        state: 'stated',
        text: '다음 주에 발표가 한 번 더 있어요',
        evidence: '"다음 주에 또 발표가 있어"',
      },
      {
        id: 'c2',
        kind: 'inferred',
        state: 'confirmed',
        text: '발표를 떠올리면 마음이 가라앉아요',
        evidence: '확인 질문에 "맞아"라고 답했어요',
      },
    ],
  };
}

function load(): Store {
  try {
    const raw = window.sessionStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw) as Store;
  } catch {
    /* 저장소를 못 쓰면 메모리로만 동작 */
  }
  return seed();
}

function save(store: Store): void {
  try {
    window.sessionStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    /* 무시 */
  }
}

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const noContent = (): Response => new Response(null, { status: 204 });
const notFound = (): Response =>
  json({ type: 'about:blank', title: 'Not Found', status: 404 }, 404);

async function readJson(init: RequestInit | undefined): Promise<Record<string, unknown>> {
  if (typeof init?.body !== 'string') return {};
  return JSON.parse(init.body) as Record<string, unknown>;
}

async function handle(
  method: string,
  path: string,
  query: URLSearchParams,
  init?: RequestInit,
): Promise<Response> {
  const store = load();
  const parts = path.split('/').filter(Boolean);
  const [resource, id, action] = parts;

  if (resource === 'health') return json({ status: 'ok' });

  if (resource === 'consents') {
    if (method === 'PUT') {
      store.consent = (await readJson(init)) as unknown as Consent;
      save(store);
    }
    return json(store.consent);
  }

  if (resource === 'sessions') {
    if (action === 'end') return noContent();
    return json({ session_id: `demo-${Date.now()}`, webrtc_offer_url: '/api/offer' }, 201);
  }

  if (resource === 'summaries') {
    const summary: Summary = {
      session_id: id ?? 'demo',
      duration_min: 7,
      summary: ['발표에서 준비한 만큼 못 보여줘서 속상했어요', '팀원들에게 미안한 마음이 들었어요'],
      next_step: '다음 발표 전에 첫 문장만 소리 내어 연습해 보기',
      memory_candidates: store.candidates,
    };
    return json(summary);
  }

  if (resource === 'memories') {
    if (!id) {
      const state = query.get('state');
      return json(state ? store.memories.filter((m) => m.state === state) : store.memories);
    }
    const candidate = store.candidates.find((c) => c.id === id);
    const memory = store.memories.find((m) => m.id === id);
    if (action === 'approve' && candidate) {
      const approved: Memory = {
        id: candidate.id,
        kind: candidate.kind,
        state: 'approved',
        text: candidate.text,
        created_at: new Date().toISOString(),
      };
      store.memories = [approved, ...store.memories];
      store.candidates = store.candidates.filter((c) => c.id !== id);
      save(store);
      return json(approved);
    }
    if (method === 'DELETE') {
      store.memories = store.memories.filter((m) => m.id !== id);
      store.candidates = store.candidates.filter((c) => c.id !== id);
      save(store);
      return noContent();
    }
    if (method === 'PATCH' && memory) {
      const body = await readJson(init);
      if (typeof body.text === 'string') memory.text = body.text;
      save(store);
      return json(memory);
    }
    return notFound();
  }

  if (resource === 'deletion') {
    save(seed());
    return json({ request_id: `del-${Date.now()}`, eta_hours: 24 }, 202);
  }

  return notFound();
}

/** window.fetch를 감싸 `/api/`로 시작하는 요청만 가짜로 답한다. */
export function installMockApi(): void {
  const realFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const raw = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    const url = new URL(raw, window.location.origin);
    if (!url.pathname.startsWith('/api/')) return realFetch(input, init);
    const method = (init?.method ?? 'GET').toUpperCase();
    return handle(method, url.pathname.slice('/api'.length), url.searchParams, init);
  };
}
