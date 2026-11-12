import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AppLayout } from './AppLayout';

import { CallPage } from '@/features/call';
import { HomePage } from '@/features/home';
import { LetterPage } from '@/features/letters';
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
      { path: '/letters/:sessionId', element: <LetterPage /> },
    ],
  },
  // 통화는 탭바 없이 화면 전체를 쓴다
  { path: '/call', element: <CallPage /> },
  // 없는 주소(오타, 예전 링크, 새로고침한 옛 경로)는 개발자용 오류 화면 대신 홈으로 보낸다
  { path: '*', element: <Navigate to="/" replace /> },
]);
