import { useMemo } from 'react';

import { CallScreen } from './CallScreen';

import { MockVoiceClient } from '@/shared/voice';

/** TODO: 서버가 준비되면 MockVoiceClient 대신 pipecat-ai/client-js 구현을 쓴다. */
export function CallPage() {
  const client = useMemo(() => new MockVoiceClient(), []);
  return <CallScreen client={client} />;
}
