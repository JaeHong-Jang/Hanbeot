import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { DeviceFrame } from './DeviceFrame';
import { Providers } from './providers';
import { router } from './router';

import { SplashScreen } from '@/features/splash';
import { PREF_KEYS } from '@/shared/hooks/useLocalPref';

function introSeen(): boolean {
  try {
    return window.localStorage.getItem(PREF_KEYS.introSeen) === 'yes';
  } catch {
    return false;
  }
}

export function App() {
  // 처음 들어온 사람은 입장 이야기가 시작 화면 역할을 하므로 스플래시를 건너뛴다.
  const [splashDone, setSplashDone] = useState(() => !introSeen());
  return (
    <Providers>
      <DeviceFrame>
        <RouterProvider router={router} />
        {splashDone ? null : <SplashScreen onDone={() => setSplashDone(true)} />}
      </DeviceFrame>
    </Providers>
  );
}
