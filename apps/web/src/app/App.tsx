import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { DeviceFrame } from './DeviceFrame';
import { Providers } from './providers';
import { router } from './router';

import { SplashScreen } from '@/features/splash';

export function App() {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <Providers>
      <DeviceFrame>
        <RouterProvider router={router} />
        {splashDone ? null : <SplashScreen onDone={() => setSplashDone(true)} />}
      </DeviceFrame>
    </Providers>
  );
}
