import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AppLayout } from './AppLayout';

import { CallPage } from '@/features/call';
import {
  Fridge,
  HouseConsent,
  HouseLayout,
  HouseMemory,
  LivingRoom,
  MyRoom,
} from '@/features/house';
import { LetterPage } from '@/features/letters';
import { OnboardingPage } from '@/features/onboarding';
import { SummaryPage } from '@/features/summary';

/**
 * 하늘이네 집: 거실(홈, 통화) / 냉장고(편지 모음) / 내 방(설정).
 * 통화, 통화 후 요약, 동의, 편지 한 장은 방 틀 밖의 화면이다.
 */
export const router = createBrowserRouter([
  {
    element: <HouseLayout />,
    children: [
      { path: '/', element: <LivingRoom /> },
      { path: '/fridge', element: <Fridge /> },
      { path: '/room', element: <MyRoom /> },
      { path: '/memory', element: <HouseMemory /> },
      { path: '/consent', element: <HouseConsent /> },
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
  // 통화는 화면 전체를 쓴다
  { path: '/call', element: <CallPage /> },
  // 예전 주소(/settings, /v3, /v5 등)와 없는 주소는 거실로
  { path: '*', element: <Navigate to="/" replace /> },
]);
