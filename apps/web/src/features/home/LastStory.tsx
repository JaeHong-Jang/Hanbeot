import { Link } from 'react-router-dom';

import styles from './LastStory.module.css';
import { homeStrings as s } from './strings';

import type { Memory } from '@/entities';
import { daysSince } from '@/shared/lib/time';
import { Icon } from '@/shared/ui';

type Props = { memory: Memory | undefined; onContinue: () => void };

/** 가장 최근에 "내가 말한 것" 한 건. 편지지에 적어 둔 메모처럼 카드 없이 보여준다. */
export function LastStory({ memory, onContinue }: Props) {
  return (
    <section className={styles.last} aria-label={s.lastTitle}>
      <div className={styles.head}>
        <h2>{s.lastTitle}</h2>
        <Link to="/memory">{s.lastSeeAll}</Link>
      </div>
      {memory ? (
        <>
          <p className={styles.body}>{memory.text}</p>
          <div className={styles.foot}>
            <span className={styles.when}>{s.lastWhen(daysSince(memory.created_at))}</span>
            <button type="button" className={styles.continue} onClick={onContinue}>
              <Icon name="phone" size={17} />
              {s.lastContinue}
            </button>
          </div>
        </>
      ) : (
        <p className={styles.empty}>{s.lastEmpty}</p>
      )}
    </section>
  );
}
