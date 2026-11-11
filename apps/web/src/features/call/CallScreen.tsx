import { useEffect, useRef, useState } from 'react';

import { CallControls } from './CallControls';
import styles from './CallScreen.module.css';
import { Captions } from './Captions';
import { CueConfirmCard } from './CueConfirmCard';
import { ModeSelector } from './ModeSelector';
import { Orb } from './Orb';
import { callStrings as s } from './strings';
import { useCallTimer } from './useCallTimer';

import type { CallMode } from '@/entities';
import { SafeModeCard } from '@/features/crisis';
import { UsagePanel } from '@/features/usage';
import { friendById, type Friend } from '@/shared/friend';
import { DISCLOSURE_SHORT } from '@/shared/strings/disclosure';
import { Button } from '@/shared/ui';
import type { VoiceClient } from '@/shared/voice';
import { useVoiceSession } from '@/shared/voice';

type Props = {
  client: VoiceClient;
  /** 오브로 보여줄 친구. 없으면 기본 친구. */
  friend?: Friend;
  /** 연결되면 이 모드로 시작한다(홈에서 고른 방식). */
  initialMode?: CallMode;
  /** 통화가 끝났을 때(요약 화면으로 넘어갈 때). */
  onEnded?: () => void;
  /** 통화 전에 화면을 닫을 때. */
  onClose?: () => void;
};

export function CallScreen({
  client,
  friend = friendById('haneul'),
  initialMode,
  onEnded,
  onClose,
}: Props) {
  const { state, connect, hangUp, setMuted, setHeld, bargeIn, setMode, answerCue } =
    useVoiceSession(client);
  const elapsedSec = useCallTimer(state.status);
  const [sosOpen, setSosOpen] = useState(false);
  const live = state.status === 'connected';
  const beforeOrAfter = state.status === 'idle' || state.status === 'ended';

  // 연결되면 홈에서 고른 대화 방식을 한 번 알린다.
  const modeSentRef = useRef(false);
  useEffect(() => {
    if (!live || modeSentRef.current || !initialMode) return;
    modeSentRef.current = true;
    setMode(initialMode);
  }, [live, initialMode, setMode]);

  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;
  useEffect(() => {
    if (state.status === 'ended') onEndedRef.current?.();
  }, [state.status]);

  const statusText =
    state.status === 'connecting'
      ? s.connecting
      : state.status === 'ended'
        ? s.endedHint
        : !live
          ? s.idleHint
          : state.held
            ? s.held
            : s.orb[state.orb];

  const showSafeCard = state.safeMode !== null || sosOpen;

  return (
    <main className={styles.call}>
      <div
        className={styles.backdrop}
        style={{ backgroundImage: `url(${friend.image})` }}
        aria-hidden="true"
      />

      <header className={styles.top}>
        <p className={styles.disclosure}>{DISCLOSURE_SHORT}</p>
        <button
          type="button"
          className={styles.sos}
          aria-label={s.sosLabel}
          aria-expanded={showSafeCard}
          onClick={() => setSosOpen((open) => !open)}
        >
          {s.sos}
        </button>
      </header>

      <Orb friend={friend} state={state.orb} live={live && !state.held} statusText={statusText} />
      {live ? <UsagePanel elapsedSec={elapsedSec} safeMode={state.safeMode !== null} /> : null}

      <Captions captions={state.captions} />

      {state.cue && !showSafeCard ? (
        <CueConfirmCard
          category={state.cue.category}
          onAnswer={(confirmed) => answerCue(state.cue?.utterance_id ?? '', confirmed)}
        />
      ) : null}

      {showSafeCard ? (
        <div id="safe">
          <SafeModeCard
            centerName={state.safeMode?.card.center_name}
            onAnswer={() => setSosOpen(false)}
          />
        </div>
      ) : null}

      <ModeSelector mode={state.mode} onChange={setMode} />

      {beforeOrAfter ? (
        <div className={styles.start}>
          <Button variant="primary" onClick={() => void connect()}>
            {s.connect}
          </Button>
          {onClose ? <Button onClick={onClose}>{s.back}</Button> : null}
        </div>
      ) : (
        <CallControls
          muted={state.muted}
          held={state.held}
          canBargeIn={live && state.orb === 'speaking'}
          onBargeIn={bargeIn}
          onToggleHold={() => setHeld(!state.held)}
          onToggleMute={() => setMuted(!state.muted)}
          onHangUp={() => void hangUp()}
        />
      )}
    </main>
  );
}
