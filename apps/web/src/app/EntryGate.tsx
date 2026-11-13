import { Navigate, Outlet } from 'react-router-dom';

import { PREF_KEYS } from '@/shared/hooks/useLocalPref';

function pref(key: string): string {
  try {
    return window.localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
}

/**
 * 집 안(거실, 냉장고, 내 방)과 통화는 이 문을 지나야 한다.
 * 순서: 입장 이야기(/intro) → 로그인(/login) → 필수 동의(/start, 거실이 확인) → 거실.
 */
export function EntryGate() {
  if (pref(PREF_KEYS.introSeen) !== 'yes') return <Navigate to="/intro" replace />;
  if (!pref(PREF_KEYS.user)) return <Navigate to="/login" replace />;
  return <Outlet />;
}
