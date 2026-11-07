import { createBrowserRouter } from 'react-router-dom';

import { CallPage } from '@/features/call';
import { MemoryPage } from '@/features/memory';
import { OnboardingPage } from '@/features/onboarding';
import { SettingsPage } from '@/features/settings';
import { SummaryPage } from '@/features/summary';

export const router = createBrowserRouter([
  { path: '/', element: <OnboardingPage /> },
  { path: '/call', element: <CallPage /> },
  { path: '/summary/:sessionId', element: <SummaryPage /> },
  { path: '/memory', element: <MemoryPage /> },
  { path: '/settings', element: <SettingsPage /> },
]);
