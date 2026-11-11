import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';

function renderHome(consent: { basic: boolean; voice: boolean; sensitive: boolean }) {
  const memories = [
    {
      id: 'a',
      kind: 'stated',
      state: 'approved',
      text: '팀 프로젝트로 지쳤다고 했어요',
      created_at: '2026-11-01T00:00:00Z',
    },
  ];
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string) =>
      String(url).includes('/consents')
        ? new Response(JSON.stringify(consent), { status: 200 })
        : new Response(JSON.stringify(memories), { status: 200 }),
    ),
  );
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<p>동의 화면</p>} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe('HomePage', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('shows the call button, three talk modes and the last stated memory', async () => {
    renderHome({ basic: true, voice: false, sensitive: false });
    expect(await screen.findByText('팀 프로젝트로 지쳤다고 했어요')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getAllByRole('button', { name: '하늘이에게 전화하기' }).length).toBeGreaterThan(
      0,
    );
  });

  it('sends people without the required consent to the consent screen', async () => {
    renderHome({ basic: false, voice: false, sensitive: false });
    expect(await screen.findByText('동의 화면')).toBeInTheDocument();
  });
});
