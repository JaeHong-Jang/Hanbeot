import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { summaryStrings as s } from './strings';
import styles from './SummaryPage.module.css';

import { useApproveMemory, useDeleteMemory, useSummary } from '@/shared/api';
import { Badge, Button, Card } from '@/shared/ui';

/** 후보는 사용자가 [저장]을 누를 때만 승인된다. 자동 승인 없음(P0-8). */
export function SummaryPage() {
  const { sessionId = '' } = useParams();
  const { data, isLoading } = useSummary(sessionId);
  const approve = useApproveMemory();
  const reject = useDeleteMemory();
  const [done, setDone] = useState<ReadonlySet<string>>(new Set());

  const markDone = (id: string) => setDone((prev) => new Set(prev).add(id));

  if (isLoading || !data) return <p className={styles.loading}>{s.loading}</p>;
  const hadCandidates = data.memory_candidates.length > 0;
  const candidates = data.memory_candidates.filter((c) => !done.has(c.id));
  return (
    <main>
      <h1>{s.title}</h1>
      <ul className={styles.lines}>
        {data.summary.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {data.next_step ? (
        <p className={styles.next}>
          {s.nextStep}: {data.next_step}
        </p>
      ) : null}
      {/* 후보가 처음부터 없을 때와, 전부 고른 뒤를 구분해서 말한다 */}
      {hadCandidates ? <h2>{s.candidatesTitle}</h2> : null}
      {candidates.length === 0 ? (
        <p className={styles.allDone}>{hadCandidates ? s.allDone : s.noCandidates}</p>
      ) : null}
      {candidates.map((c) => (
        <Card key={c.id} className={styles.candidate}>
          <Badge tone={c.kind === 'stated' ? 'neutral' : 'info'}>
            {c.kind === 'stated' ? s.stated : s.inferred}
          </Badge>
          <p>{c.text}</p>
          {c.evidence ? <small>{c.evidence}</small> : null}
          <div className={styles.actions}>
            <Button
              variant="primary"
              onClick={() => approve.mutate(c.id, { onSuccess: () => markDone(c.id) })}
            >
              {s.approve}
            </Button>
            <Button onClick={() => reject.mutate(c.id, { onSuccess: () => markDone(c.id) })}>
              {s.reject}
            </Button>
          </div>
        </Card>
      ))}
      <Link className={styles.home} to="/">
        {s.goHome}
      </Link>
    </main>
  );
}
