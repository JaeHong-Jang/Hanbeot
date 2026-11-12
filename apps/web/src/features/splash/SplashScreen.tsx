import { useEffect, useRef, useState } from 'react';

import styles from './SplashScreen.module.css';
import { splashStrings as s } from './strings';

import livingEvening from '@/shared/assets/rooms/living-evening.jpg';
import livingMorning from '@/shared/assets/rooms/living-morning.jpg';
import livingNight from '@/shared/assets/rooms/living-night.jpg';
import { dayPart, type DayPart } from '@/shared/lib/dayPart';
import { LOGO_BUBBLE, LOGO_FLAP } from '@/shared/ui';

const SHOW_MS = 2000; // 불이 켜지고 이름을 읽을 시간
const LEAVE_MS = 400;
const ROOM: Record<DayPart, string> = {
  morning: livingMorning,
  evening: livingEvening,
  night: livingNight,
};

/**
 * 시작 화면: 하늘이네 현관을 열면 어두운 거실에 불이 켜진다.
 * 지금 시간대의 거실 그림 위로 어둠이 걷히고, 소파 초록 로고와 이름이 뜬다.
 * 2초 안에 넘어가고, 누르면 바로 건너뛴다. 움직임 줄이기 설정이면 움직이지 않는다.
 */
export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const finishedRef = useRef(false);
  const [room] = useState(() => ROOM[dayPart(new Date().getHours())]);

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
      <img className={styles.room} src={room} alt="" />
      <span className={styles.dark} aria-hidden="true" />
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
