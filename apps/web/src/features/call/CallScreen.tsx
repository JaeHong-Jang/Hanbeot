import { Captions } from './Captions';
import { ModeSelector } from './ModeSelector';
import { callStrings as s } from './strings';
import { useCallTimer } from './useCallTimer';

import { SafeModeCard } from '@/features/crisis';
import { UsagePanel } from '@/features/usage';
import { DISCLOSURE_SHORT } from '@/shared/strings/disclosure';
import { Button } from '@/shared/ui';
import type { VoiceClient } from '@/shared/voice';
import { useVoiceSession } from '@/shared/voice';

export function CallScreen({ client }: { client: VoiceClient }) {
  const { state, connect, hangUp, setMuted, setHeld, bargeIn, setMode } = useVoiceSession(client);
  const elapsedSec = useCallTimer(state.status);
  const live = state.status === 'connected';

  return (
    <main>
      <header>
        <p>{DISCLOSURE_SHORT}</p>
        <a href="#safe">{s.sos}</a>
      </header>
      <ModeSelector mode={state.mode} onChange={setMode} />
      <UsagePanel elapsedSec={elapsedSec} safeMode={state.safeMode !== null} />
      {state.status === 'connecting' ? <p>{s.connecting}</p> : null}
      {live ? <p>{s.orb[state.orb]}</p> : null}
      <Captions captions={state.captions} />
      {state.safeMode ? <SafeModeCard centerName={state.safeMode.card.center_name} /> : null}
      {state.status === 'idle' || state.status === 'ended' ? (
        <Button variant="primary" onClick={() => void connect()}>
          {s.connect}
        </Button>
      ) : (
        <div>
          <Button disabled={!live || state.orb !== 'speaking'} onClick={bargeIn}>
            {s.bargeIn}
          </Button>
          <Button aria-pressed={state.held} onClick={() => setHeld(!state.held)}>
            {state.held ? s.resume : s.hold}
          </Button>
          <Button aria-pressed={state.muted} onClick={() => setMuted(!state.muted)}>
            {state.muted ? s.unmute : s.mute}
          </Button>
          <Button variant="danger" onClick={() => void hangUp()}>
            {s.hangUp}
          </Button>
        </div>
      )}
    </main>
  );
}
