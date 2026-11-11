import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';
import './app/tokens.css';
import './app/global.css';

async function start(): Promise<void> {
  // `npm run dev:mock`: 서버 없이 화면을 돌려 볼 때만 가짜 API를 켠다.
  if (import.meta.env.VITE_API_MOCK === 'on') {
    const { installMockApi } = await import('./shared/api/mockApi');
    installMockApi();
  }
  const root = document.getElementById('root');
  if (!root) throw new Error('#root not found');
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

void start();
