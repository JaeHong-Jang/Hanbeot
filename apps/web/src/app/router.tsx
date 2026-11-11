import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './AppLayout';

import { CallPage } from '@/features/call';
import { HomePage } from '@/features/home';
import { MemoryPage } from '@/features/memory';
import { OnboardingPage } from '@/features/onboarding';
import { SettingsPage } from '@/features/settings';
import { SummaryPage } from '@/features/summary';

export const router = createBrowserRouter([
  {
    element: <AppLayout tabs />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/memory', element: <MemoryPage /> },
      { path: '/settings', element: <SettingsPage /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      { path: '/start', element: <OnboardingPage /> },
      { path: '/summary/:sessionId', element: <SummaryPage /> },
    ],
  },
  // 통화는 탭바 없이 화면 전체를 쓴다
  { path: '/call', element: <CallPage /> },
]);
