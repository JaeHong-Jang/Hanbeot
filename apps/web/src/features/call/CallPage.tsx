import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CallScreen } from './CallScreen';

import type { CallMode } from '@/entities';
import { useCreateSession, useEndSession } from '@/shared/api';
import { friendById } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { MockVoiceClient } from '@/shared/voice';

const isCallMode = (value: string): value is CallMode =>
  value === 'listen' || value === 'organize' || value === 'advise';

/** TODO: 서버가 준비되면 MockVoiceClient 대신 pipecat-ai/client-js 구현을 쓴다(webrtc_offer_url 사용). */
export function CallPage() {
  const navigate = useNavigate();
  const client = useMemo(() => new MockVoiceClient(), []);
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const modePref = useLocalPref(PREF_KEYS.mode, 'listen');
  const { mutate: createSession, data: session } = useCreateSession();
  const { mutate: endSession } = useEndSession();

  useEffect(() => {
    createSession();
  }, [createSession]);

  // 화면을 떠나면 연결을 닫는다(마이크가 켜진 채 남지 않게).
  useEffect(() => () => void client.disconnect(), [client]);

  const onEnded = () => {
    if (!session) {
      navigate('/', { replace: true });
      return;
    }
    endSession(session.session_id);
    navigate(`/summary/${session.session_id}`, { replace: true });
  };

  return (
    <CallScreen
      client={client}
      friend={friendById(friendPref.value)}
      initialMode={isCallMode(modePref.value) ? modePref.value : 'listen'}
      onEnded={onEnded}
      onClose={() => navigate('/')}
    />
  );
}
