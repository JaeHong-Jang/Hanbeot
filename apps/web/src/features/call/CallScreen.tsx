import { useCallback, useEffect, useRef, useState } from 'react';

import { CallControls } from './CallControls';
import styles from './CallScreen.module.css';
import { Captions } from './Captions';
import { CueConfirmCard } from './CueConfirmCard';
import { MemorySheet } from './MemorySheet';
import { ModeSelector } from './ModeSelector';
import { TalkingPortrait } from './TalkingPortrait';
import { callStrings as s } from './strings';
import { useCallTimer } from './useCallTimer';

import type { CallMode } from '@/entities';
import { SafeModeCard } from '@/features/crisis';
import { UsagePanel } from '@/features/usage';
import { friendById, type Friend } from '@/shared/friend';
import { DISCLOSURE_CALL_TITLE, DISCLOSURE_NOT_THERAPY } from '@/shared/strings/disclosure';
import { Button, Icon } from '@/shared/ui';
import type { CallState, VoiceClient } from '@/shared/voice';
import { useVoiceSession } from '@/shared/voice';

type Props = {
  client: VoiceClient;
  /** 화면 전체에 띄울 친구. 없으면 기본 친구. */
  friend?: Friend;
  /** 연결되면 이 모드로 시작한다(홈에서 고른 방식). */
  initialMode?: CallMode;
  /** 통화가 끝났을 때(요약 화면으로 넘어갈 때). 통화한 시간(초)을 함께 준다. */
  onEnded?: (elapsedSec: number) => void;
  /** 통화 전에 화면을 닫을 때. */
  onClose?: () => void;
};

type Panel = 'none' | 'mode' | 'memory';

const MEMORY_SHEET_ID = 'call-memory-sheet';

function statusTextOf(state: CallState): string {
  if (state.status === 'connecting') return s.connecting;
  if (state.status === 'ended') return s.endedHint;
  if (state.status !== 'connected') return s.idleHint;
  if (state.muted) return s.muted;
  return s.status[state.orb];
}

/**
 * 영상통화처럼 친구 사진을 화면 전체에 띄우는 통화 화면.
 * 한벗이 말하는 동안 사진을 누르면 끊기(설계서 P0-2), 위쪽에 AI 고지(P0-12)와 SOS(P0-6)를 둔다.
 */
export function CallScreen({
  client,
  friend = friendById('haneul'),
  initialMode,
  onEnded,
  onClose,
}: Props) {
  const { state, connect, hangUp, setMuted, bargeIn, setMode, answerCue } = useVoiceSession(client);
  const elapsedSec = useCallTimer(state.status);
  const [sosOpen, setSosOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>('none');
  const [speakerOff, setSpeakerOff] = useState(false);
  const live = state.status === 'connected';
  const beforeOrAfter = state.status === 'idle' || state.status === 'ended';
  const canBargeIn = live && state.orb === 'speaking';
  const readOutputLevel = useCallback(() => client.getOutputLevel?.() ?? null, [client]);

  // 연결되면 홈에서 고른 대화 방식을 한 번 알린다.
  const modeSentRef = useRef(false);
  useEffect(() => {
    if (!live || modeSentRef.current || !initialMode) return;
    modeSentRef.current = true;
    setMode(initialMode);
  }, [live, initialMode, setMode]);

  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;
  const elapsedRef = useRef(elapsedSec);
  elapsedRef.current = elapsedSec;
  useEffect(() => {
    if (state.status === 'ended') onEndedRef.current?.(elapsedRef.current);
  }, [state.status]);

  const togglePanel = (next: Panel) => setPanel((current) => (current === next ? 'none' : next));
  const showSafeCard = state.safeMode !== null || sosOpen;

  // 위기 카드가 뜨면 다른 창을 닫아 카드가 가려지지 않게 한다(P0-6).
  useEffect(() => {
    if (showSafeCard) setPanel('none');
  }, [showSafeCard]);

  const toggleSpeaker = () => {
    const next = !speakerOff;
    client.setOutputMuted(next);
    setSpeakerOff(next);
  };
  const dotState = live ? (state.muted ? 'muted' : state.orb) : 'idle';

  return (
    <main className={styles.call}>
      <TalkingPortrait
        friend={friend}
        speaking={canBargeIn && !state.held && !speakerOff}
        readOutputLevel={readOutputLevel}
        className={styles.photo}
      />
      <div className={styles.shade} aria-hidden="true" />
      <button
        type="button"
        className={styles.stage}
        aria-label={s.bargeIn}
        disabled={!canBargeIn}
        onClick={bargeIn}
      />

      <div className={styles.layer}>
        <header className={styles.top}>
          <div className={styles.identity}>
            <h1 className={styles.title}>{DISCLOSURE_CALL_TITLE}</h1>
            <p className={styles.status} role="status">
              <span className={styles.dot} data-state={dotState} aria-hidden="true" />
              {statusTextOf(state)}
            </p>
            <p className={styles.disclosure}>{DISCLOSURE_NOT_THERAPY}</p>
          </div>
          <div className={styles.side}>
            <div className={styles.camera}>
              <Icon name="cameraOff" size={22} />
              <span>{s.cameraOff}</span>
            </div>
            <button
              type="button"
              className={styles.sos}
              aria-label={s.sosLabel}
              aria-expanded={showSafeCard}
              onClick={() => setSosOpen((open) => !open)}
            >
              {s.sos}
            </button>
          </div>
        </header>

        {live ? <UsagePanel elapsedSec={elapsedSec} safeMode={state.safeMode !== null} /> : null}

        {/* 자막·확인 질문·위기 카드·기억이 한꺼번에 뜨면 이 안에서만 스크롤된다 */}
        <div className={styles.middle}>
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

          {panel === 'memory' ? (
            <MemorySheet id={MEMORY_SHEET_ID} onClose={() => setPanel('none')} />
          ) : null}
        </div>

        <ModeSelector
          mode={state.mode}
          open={panel === 'mode'}
          onToggle={() => togglePanel('mode')}
          onChange={(mode, close) => {
            setMode(mode);
            if (close) setPanel('none');
          }}
        />

        {beforeOrAfter ? (
          <div className={styles.start}>
            <p className={styles.micNote}>{s.micNote}</p>
            <Button variant="primary" onClick={() => void connect()}>
              {s.connect}
            </Button>
            {onClose ? <Button onClick={onClose}>{s.back}</Button> : null}
          </div>
        ) : (
          <CallControls
            muted={state.muted}
            speakerOff={speakerOff}
            modeOpen={panel === 'mode'}
            memoryOpen={panel === 'memory'}
            memorySheetId={MEMORY_SHEET_ID}
            onToggleMute={() => setMuted(!state.muted)}
            onToggleSpeaker={toggleSpeaker}
            onToggleMode={() => togglePanel('mode')}
            onToggleMemory={() => togglePanel('memory')}
            onHangUp={() => void hangUp()}
          />
        )}
      </div>
    </main>
  );
}
