import { Link } from 'react-router-dom';

import styles from './LetterStrip.module.css';
import { lettersStrings as s } from './strings';

import { useSummary } from '@/shared/api';
import { friendById } from '@/shared/friend';
import type { CallLogEntry } from '@/shared/lib/callLog';
import { LOGO_BUBBLE } from '@/shared/ui';

const SHOW_COUNT = 5;

function LetterCard({ entry, now }: { entry: CallLogEntry; now: Date }) {
  const { data } = useSummary(entry.sessionId);
  const friend = friendById(entry.friendId);
  const first = data?.summary[0];
  return (
    <li className={styles.item}>
      <Link to={`/letters/${entry.sessionId}`} className={styles.card}>
        {/* 봉투 덮개와 봉랍: 둘만 여는 편지 */}
        <span className={styles.flap} aria-hidden="true" />
        <span className={styles.seal} aria-hidden="true">
          <svg viewBox="0 0 48 48" width="20" height="20">
            <path fill="#fff" d={LOGO_BUBBLE} />
          </svg>
        </span>
        <span className={styles.when}>{s.when(new Date(entry.endedAt), now)}</span>
        <span className={styles.excerpt}>{first ?? s.loadingLine}</span>
        <span className={styles.sign}>{s.signature(friend.name)}</span>
      </Link>
    </li>
  );
}

/** 홈의 최근 편지. 옆으로 넘기는 편지 몇 장, 누르면 편지 한 장을 펼친다. */
export function LetterStrip({
  log,
  friendName,
}: {
  log: readonly CallLogEntry[];
  friendName: string;
}) {
  const now = new Date();
  return (
    <section className={styles.strip} aria-label={s.stripTitle}>
      <h2 className={styles.title}>{s.stripTitle}</h2>
      {log.length === 0 ? (
        <p className={styles.empty}>{s.stripEmpty(friendName)}</p>
      ) : (
        <ul className={styles.list}>
          {log.slice(0, SHOW_COUNT).map((entry) => (
            <LetterCard key={entry.sessionId} entry={entry} now={now} />
          ))}
        </ul>
      )}
    </section>
  );
}
