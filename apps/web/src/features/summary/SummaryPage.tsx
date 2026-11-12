import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { summaryStrings as s } from './strings';
import styles from './SummaryPage.module.css';

import { useApproveMemory, useDeleteMemory, useSummary } from '@/shared/api';
import { friendById } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Letter } from '@/features/letters';
import { Badge, Button } from '@/shared/ui';

/**
 * 통화가 끝난 뒤: 친구가 오늘 이야기를 편지 한 장으로 정리해 준다.
 * 기억 후보는 사용자가 [저장]을 누를 때만 승인된다. 자동 승인 없음(P0-8).
 */
export function SummaryPage() {
  const { sessionId = '' } = useParams();
  const { data, isLoading } = useSummary(sessionId);
  const approve = useApproveMemory();
  const reject = useDeleteMemory();
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const namePref = useLocalPref(PREF_KEYS.name, '');
  const [done, setDone] = useState<ReadonlySet<string>>(new Set());

  const markDone = (id: string) => setDone((prev) => new Set(prev).add(id));

  if (isLoading || !data) return <p className={styles.loading}>{s.loading}</p>;
  const friend = friendById(friendPref.value);
  const hadCandidates = data.memory_candidates.length > 0;
  const candidates = data.memory_candidates.filter((c) => !done.has(c.id));
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>{s.title}</h1>
        <p className={styles.lead}>{s.lead(friend.name)}</p>
      </header>

      <Letter
        to={namePref.value}
        lines={data.summary}
        nextStep={data.next_step}
        friendName={friend.name}
        arriving
      />

      <section className={styles.memory} aria-label={s.candidatesTitle}>
        {/* 후보가 처음부터 없을 때와, 전부 고른 뒤를 구분해서 말한다 */}
        {hadCandidates ? (
          <div className={styles.memoryHead}>
            <h2>{s.candidatesTitle}</h2>
            <p>{s.candidatesHint}</p>
          </div>
        ) : null}
        {candidates.length === 0 ? (
          <p className={styles.allDone}>{hadCandidates ? s.allDone : s.noCandidates}</p>
        ) : null}
        {candidates.map((c) => (
          <div key={c.id} className={styles.candidate}>
            <Badge tone={c.kind === 'stated' ? 'neutral' : 'info'}>
              {c.kind === 'stated' ? s.stated : s.inferred}
            </Badge>
            <p className={styles.candidateText}>{c.text}</p>
            {c.evidence ? <p className={styles.evidence}>{c.evidence}</p> : null}
            <div className={styles.actions}>
              <Button
                size="sm"
                onClick={() => reject.mutate(c.id, { onSuccess: () => markDone(c.id) })}
              >
                {s.reject}
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => approve.mutate(c.id, { onSuccess: () => markDone(c.id) })}
              >
                {s.approve}
              </Button>
            </div>
          </div>
        ))}
      </section>

      <div className={styles.bottom}>
        <Link className={styles.home} to="/">
          {s.goHome}
        </Link>
      </div>
    </main>
  );
}
