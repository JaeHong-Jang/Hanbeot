import { homeStrings as s } from './strings';
import styles from './WeekNote.module.css';

import { BREAK_AFTER_SEC } from '@/features/usage';
import { Icon } from '@/shared/ui';

type Props = { stats: { calls: number; minutes: number } };

/** 이번 주에 얼마나 이야기했는지 한 줄로. 숫자로 재촉하지 않고, 오래 쓰면 쉬어 가자고 알린다. */
export function WeekNote({ stats }: Props) {
  return (
    <section className={styles.week} aria-label={s.weekTitle}>
      <span className={styles.icon} aria-hidden="true">
        <Icon name="chat" size={18} />
      </span>
      <div>
        <p className={styles.title}>
          {s.weekTitle} <strong>{s.weekCalls(stats.calls, stats.minutes)}</strong>
        </p>
        <p className={styles.note}>{s.weekNote(BREAK_AFTER_SEC / 60)}</p>
      </div>
    </section>
  );
}
