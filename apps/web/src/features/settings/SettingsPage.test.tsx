import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import { SettingsPage } from './SettingsPage';

describe('SettingsPage', () => {
  it('shows consent toggles and the deletion button', async () => {
    const consent = { basic: true, voice: false, sensitive: false };
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify(consent), { status: 200 })),
    );
    render(
      <QueryClientProvider client={new QueryClient()}>
        <SettingsPage />
      </QueryClientProvider>,
    );
    expect(await screen.findByRole('button', { name: '데이터 삭제 요청' })).toBeInTheDocument();
    expect(screen.getAllByRole('switch')).toHaveLength(3);
    vi.unstubAllGlobals();
  });
});
