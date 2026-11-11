import { useCallback, useEffect, useReducer } from 'react';

import { callReducer, initialCallState } from './callReducer';
import type { VoiceClient } from './types';

import type { CallMode } from '@/entities';

export function useVoiceSession(client: VoiceClient) {
  const [state, dispatch] = useReducer(callReducer, initialCallState);

  useEffect(() => client.subscribe((event) => dispatch({ type: 'event', event })), [client]);

  const connect = useCallback(() => client.connect(), [client]);
  const hangUp = useCallback(() => client.disconnect(), [client]);
  const setMuted = useCallback(
    (muted: boolean) => {
      client.setMuted(muted);
      dispatch({ type: 'set_muted', muted });
    },
    [client],
  );
  const setHeld = useCallback(
    (held: boolean) => {
      client.setHeld(held);
      dispatch({ type: 'set_held', held });
    },
    [client],
  );
  const bargeIn = useCallback(() => {
    client.interrupt();
    dispatch({ type: 'barge_in' });
  }, [client]);
  const setMode = useCallback((mode: CallMode) => client.setMode(mode), [client]);
  const answerCue = useCallback(
    (utteranceId: string, confirmed: boolean) => {
      client.answerCue(utteranceId, confirmed);
      dispatch({ type: 'answer_cue' });
    },
    [client],
  );

  return { state, connect, hangUp, setMuted, setHeld, bargeIn, setMode, answerCue };
}
