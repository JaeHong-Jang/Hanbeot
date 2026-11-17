import { useState, type CSSProperties } from 'react';

import styles from './Coach.module.css';
import { houseStrings as s } from './strings';

import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';

/** 단계마다 강조할 자리: 아래 판의 통화 버튼, 냉장고 탭, 오른쪽 위 도움 받기. */
const RINGS: readonly CSSProperties[] = [
  {
    left: '50cqw',
    top: 'calc(100% - var(--tabs-h) - 33px)', // 판 아래 여백 8 + 버튼 절반 25
    width: 'calc(100cqw - 20px)',
    height: 62,
  },
  {
    left: '37.5cqw',
    top: 'calc(100% - var(--tabs-h) / 2)',
    width: 130,
    height: 52,
  },
  {
    left: 'calc(100cqw - 66px)',
    top: 'calc(var(--safe-top) + 14px)',
    width: 122,
    height: 48,
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
