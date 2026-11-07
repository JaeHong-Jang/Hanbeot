import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { SummaryPage } from './SummaryPage';

describe('SummaryPage', () => {
  it('renders the summary with candidates and approve/reject buttons, never auto-approving', async () => {
    const summary = {
      session_id: 's1',
      summary: ['발표 준비가 부담됐어요'],
      next_step: null,
      memory_candidates: [{ id: 'm1', kind: 'stated', state: 'stated', text: '경영학과 3학년' }],
    };
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify(summary), { status: 200 })),
    );
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={['/summary/s1']}>
          <Routes>
            <Route path="/summary/:sessionId" element={<SummaryPage />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>,
    );
    expect(await screen.findByText('발표 준비가 부담됐어요')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '저장' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '버리기' })).toBeInTheDocument();
    expect(vi.mocked(fetch)).toHaveBeenCalledTimes(1);
    vi.unstubAllGlobals();
  });
});
