import { useTimer } from '@/shared/hooks/useTimer';
import type { CallStatus } from '@/shared/voice';

/** 연결된 동안만 흐르는 통화 경과 초. */
export function useCallTimer(status: CallStatus): number {
  return useTimer(status === 'connected');
}
