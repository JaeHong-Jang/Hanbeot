import { useEffect, useRef, useState } from 'react';

import { FountainPen } from './FountainPen';
import styles from './SplashScreen.module.css';
import { splashStrings as s } from './strings';
import { useWritingAnimation } from './useWritingAnimation';

import { LETTERING, PenStroke, SLANT_TRANSFORM } from '@/shared/ui';

const TAGLINE_MS = 1900; // 한 줄 소개를 읽을 시간
const LEAVE_MS = 450;

type Phase = 'writing' | 'tagline' | 'leaving';
const PHASE_CLASS: Record<Phase, string | undefined> = {
  writing: styles.phaseWriting,
  tagline: styles.phaseTagline,
  leaving: styles.phaseLeaving,
};

/** 시작 화면. 만년필이 "한벗"을 날려 쓰고, 한 줄 소개가 따라 써진 뒤 넘어간다. 누르면 건너뛴다. */
export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('writing');
  const finishedRef = useRef(false);
  const { strokeRefs, penRef } = useWritingAnimation(() => setPhase('tagline'));

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setPhase('leaving');
    window.setTimeout(onDone, LEAVE_MS);
  };
  const finishRef = useRef(finish);
  finishRef.current = finish;

  useEffect(() => {
    if (phase !== 'tagline') return;
    const id = window.setTimeout(() => finishRef.current(), TAGLINE_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  return (
    <button
      type="button"
      className={`${styles.splash} ${PHASE_CLASS[phase]}`}
      onClick={finish}
      aria-label={s.skipLabel}
    >
      <span className={styles.glow} />
      <span className={styles.paper}>
        <svg
          className={styles.logo}
          viewBox={`-22 -34 ${LETTERING.width + 44} ${LETTERING.height + 68}`}
          role="img"
          aria-label={s.logoLabel}
        >
          <g transform={SLANT_TRANSFORM}>
            {LETTERING.strokes.map((stroke, order) => (
              <PenStroke
                key={stroke.d}
                stroke={stroke}
                groupRef={(el) => {
                  strokeRefs.current[order] = el;
                }}
              />
            ))}
          </g>
          <g ref={penRef} className={styles.pen}>
            <FountainPen />
          </g>
        </svg>
        <span className={styles.caption}>
          {phase === 'writing' ? null : (
            <>
              <span className={styles.line}>{s.tagline}</span>
              <span className={`${styles.line} ${styles.sub}`}>{s.sub}</span>
            </>
          )}
        </span>
      </span>
      <span className={styles.skip}>{s.skip}</span>
    </button>
  );
}
