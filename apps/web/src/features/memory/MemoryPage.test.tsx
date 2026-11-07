import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import { MemoryPage } from './MemoryPage';

describe('MemoryPage', () => {
  it('groups memories into stated vs inferred', async () => {
    const memories = [
      {
        id: 'a',
        kind: 'stated',
        state: 'approved',
        text: '경영학과 3학년',
        created_at: '2026-11-01T00:00:00Z',
      },
      {
        id: 'b',
        kind: 'inferred',
        state: 'confirmed',
        text: '발표 앞두고 지쳐 보였어요',
        created_at: '2026-11-01T00:00:00Z',
      },
    ];
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify(memories), { status: 200 })),
    );
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryPage />
      </QueryClientProvider>,
    );
    expect(await screen.findByText('경영학과 3학년')).toBeInTheDocument();
    expect(screen.getByRole('region', { name: '내가 말한 것' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: '한벗이 느낀 것' })).toBeInTheDocument();
    expect(screen.getByText('발표 앞두고 지쳐 보였어요')).toBeInTheDocument();
    vi.unstubAllGlobals();
  });
});
