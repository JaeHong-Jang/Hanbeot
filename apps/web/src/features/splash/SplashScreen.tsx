import { useEffect, useRef, useState } from 'react';

import styles from './SplashScreen.module.css';
import { splashStrings as s } from './strings';

import { LOGO_BUBBLE, LOGO_FLAP } from '@/shared/ui';

const SHOW_MS = 1800; // 로고가 뜨고 한 줄 소개를 읽을 시간
const LEAVE_MS = 350;

/**
 * 시작 화면. 브랜드 색 바탕에 말풍선 봉투가 떠오르고, 봉투 덮개가 닫히면 이름과 한 줄 소개가 뜬다.
 * 2초 안에 넘어가고, 누르면 바로 건너뛴다. 움직임 줄이기 설정이면 움직이지 않는다.
 */
export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setLeaving(true);
    window.setTimeout(onDone, LEAVE_MS);
  };
  const finishRef = useRef(finish);
  finishRef.current = finish;

  useEffect(() => {
    const id = window.setTimeout(() => finishRef.current(), SHOW_MS);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <button
      type="button"
      className={`${styles.splash} ${leaving ? styles.leaving : ''}`}
      onClick={finish}
      aria-label={s.skipLabel}
    >
      <span className={styles.center}>
        <svg className={styles.mark} viewBox="0 0 48 48" role="img" aria-label={s.logoLabel}>
          <rect className={styles.tile} width="48" height="48" rx="13" />
          <path className={styles.bubble} d={LOGO_BUBBLE} />
          <path className={styles.flap} d={LOGO_FLAP} pathLength={1} />
        </svg>
        <span className={styles.word}>{s.logoLabel}</span>
        <span className={styles.tagline}>{s.tagline}</span>
      </span>
    </button>
  );
}
