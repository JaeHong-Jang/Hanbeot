import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IntroScene } from './IntroScene';
import styles from './IntroStory.module.css';
import { HOLD_MS, SCENE_MS, introStrings as s } from './strings';

import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';

/**
 * 입장 이야기. 혼자 있는 밤 → 팀플 → 동아리 → 불 켜진 거실.
 * 장면은 3초마다 넘어가고(누르면 바로), 마지막 장면은 현관문 버튼으로 진행한다.
 * 끝까지 보거나 건너뛰면 다시 보여 주지 않는다.
 */
export function IntroStory() {
  const navigate = useNavigate();
  const seen = useLocalPref(PREF_KEYS.introSeen, '');
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const [holding, setHolding] = useState(false);
  const [rang, setRang] = useState(false);
  const holdTimer = useRef<number>();
  const finishTimer = useRef<number>();
  const remainingMs = useRef(SCENE_MS);
  const timedStep = useRef(step);
  const total = s.scenes.length;
  const scene = s.scenes[step] ?? s.scenes[0];
  const last = step === total - 1;

  const finish = () => {
    window.clearTimeout(holdTimer.current);
    window.clearTimeout(finishTimer.current);
    seen.set('yes');
    navigate('/login', { replace: true });
  };
  const finishRef = useRef(finish);
  finishRef.current = finish;

  // 마지막 장면은 사용자가 초인종을 눌러야 넘어간다.
  useEffect(() => {
    if (timedStep.current !== step || reducedMotion) {
      remainingMs.current = SCENE_MS;
      timedStep.current = step;
    }
    if (last || paused || reducedMotion) return;
    const startedAt = performance.now();
    const id = window.setTimeout(() => setStep((current) => current + 1), remainingMs.current);
    return () => {
      window.clearTimeout(id);
      remainingMs.current = Math.max(0, remainingMs.current - (performance.now() - startedAt));
    };
  }, [step, last, paused, reducedMotion]);

  useEffect(
    () => () => {
      window.clearTimeout(holdTimer.current);
      window.clearTimeout(finishTimer.current);
    },
    [],
  );

  const ringBell = () => {
    if (finishTimer.current !== undefined) return;
    window.clearTimeout(holdTimer.current);
    setRang(true);
    setHolding(false);
    finishTimer.current = window.setTimeout(() => finishRef.current(), 700);
  };

  const startHold = () => {
    if (rang || holdTimer.current !== undefined) return;
    setHolding(true);
    holdTimer.current = window.setTimeout(ringBell, HOLD_MS);
  };
  const cancelHold = () => {
    setHolding(false);
    window.clearTimeout(holdTimer.current);
    holdTimer.current = undefined;
  };

  return (
    <section
      className={styles.intro}
      aria-label={s.slideLabel(step + 1, total)}
      data-scene={scene.id}
      data-paused={paused || reducedMotion}
    >
      {/* 장면은 겹쳐 두고 현재 장면만 보이게 해서 끊기지 않고 섞여 들어간다 */}
      {s.scenes.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.scene} ${index === step ? styles.on : ''} ${index < step ? styles.gone : ''}`}
          aria-hidden={index !== step}
        >
          <IntroScene id={item.id} />
        </div>
      ))}
      {/* 하단 문구를 위한 어두운 그라데이션 */}
      <span className={styles.veil} aria-hidden="true" />

      <div className={styles.bar} aria-hidden="true">
        {s.scenes.map((item, dotIndex) => (
          <i
            key={item.id}
            className={dotIndex < step ? styles.done : dotIndex === step ? styles.running : ''}
            style={dotIndex === step && !last ? { animationDuration: `${SCENE_MS}ms` } : undefined}
          />
        ))}
      </div>
      <button type="button" className={styles.skip} onClick={finish}>
        {s.skip}
      </button>
      {!last && !reducedMotion ? (
        <button
          type="button"
          className={styles.pause}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? s.resume : s.pause}
        </button>
      ) : null}

      <div key={`text-${scene.id}`} className={styles.text}>
        <h1>{scene.line}</h1>
        <p>{scene.sub}</p>
      </div>

      {last ? (
        <button
          type="button"
          className={`${styles.bell} ${holding ? styles.holding : ''} ${rang ? styles.rang : ''}`}
          onPointerDown={startHold}
          onPointerUp={cancelHold}
          onPointerLeave={cancelHold}
          onPointerCancel={cancelHold}
          onClick={ringBell}
          aria-label={s.holdHint}
        >
          <span className={styles.bellRing} aria-hidden="true" />
          <span className={styles.bellText}>{rang ? s.ringing : s.holdHint}</span>
        </button>
      ) : (
        <button
          type="button"
          className={styles.tapArea}
          aria-label={s.next}
          onClick={() => setStep(step + 1)}
        >
          <span>{s.next}</span>
        </button>
      )}
    </section>
  );
}
