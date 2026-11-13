import { useState, type CSSProperties } from 'react';

import styles from './Coach.module.css';
import { houseStrings as s } from './strings';

import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';

/** 단계마다 강조할 자리. 소파·냉장고는 거실 그림 기준, 도움 받기는 화면 오른쪽 위. */
const RINGS: readonly CSSProperties[] = [
  {
    left: '50cqw',
    top: 'calc(var(--safe-top) + 74px + 100cqw * 1.2497 * 0.8 - 24px)',
    width: 190,
    height: 54,
  },
  {
    left: 'calc(92cqw - 46px)',
    top: 'calc(var(--safe-top) + 74px + 100cqw * 1.2497 * 0.31 - 22px)',
    width: 130,
    height: 50,
  },
  {
    left: 'calc(100cqw - 70px)',
    top: 'calc(var(--safe-top) + 74px + 30px)',
    width: 124,
    height: 50,
  },
];

/** 하늘이네 집에 처음 들어왔을 때 한 번만 보여 주는 세 단계 안내. */
export function Coach() {
  const seen = useLocalPref(PREF_KEYS.houseCoached, '');
  const [step, setStep] = useState(0);
  if (seen.value === 'yes') return null;

  const total = s.coach.length;
  const tip = s.coach[step] ?? s.coach[0];
  const last = step === total - 1;
  const finish = () => seen.set('yes');

  return (
    <div className={styles.coach} role="dialog" aria-modal="true" aria-labelledby="coach-title">
      <span className={styles.ring} style={RINGS[step]} aria-hidden="true" />
      <div className={styles.tip}>
        <small>{s.coachStep(step + 1, total)}</small>
        <b id="coach-title">{tip.title}</b>
        <p>{tip.body}</p>
        <div className={styles.row}>
          <button type="button" className={styles.skip} onClick={finish}>
            {s.skip}
          </button>
          <span className={styles.dots} aria-hidden="true">
            {s.coach.map((item, dotIndex) => (
              <i key={item.title} className={dotIndex === step ? styles.on : ''} />
            ))}
          </span>
          <button
            type="button"
            className={styles.next}
            onClick={last ? finish : () => setStep(step + 1)}
            autoFocus
          >
            {last ? s.done : s.next}
          </button>
        </div>
      </div>
    </div>
  );
}
