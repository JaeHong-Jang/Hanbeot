import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CallScreen } from './CallScreen';

import type { CallMode } from '@/entities';
import { useCreateSession, useEndSession } from '@/shared/api';
import { friendById } from '@/shared/friend';
import { useCallLog } from '@/shared/hooks/useCallLog';
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
  const callLog = useCallLog();

  useEffect(() => {
    createSession();
  }, [createSession]);

  // 화면을 떠나면 연결을 닫는다(마이크가 켜진 채 남지 않게).
  useEffect(() => () => void client.disconnect(), [client]);

  const onEnded = (elapsedSec: number) => {
    if (!session) {
      navigate('/', { replace: true });
      return;
    }
    endSession(session.session_id);
    // 홈의 최근 편지·이번 주 요약용. 내용 없이 세션 번호와 시간만 이 기기에 남긴다.
    callLog.add({
      sessionId: session.session_id,
      friendId: friendPref.value,
      endedAt: new Date().toISOString(),
      durationSec: elapsedSec,
    });
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
