import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HouseLayout } from './HouseLayout';
import { LivingRoom } from './LivingRoom';

import { friendById } from '@/shared/friend';
import { PREF_KEYS } from '@/shared/hooks/useLocalPref';

function renderLiving({ coached }: { coached: boolean }) {
  if (coached) window.localStorage.setItem('hanbeot.pref.houseCoached', 'yes');
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string) =>
      String(url).includes('/consents')
        ? new Response(JSON.stringify({ basic: true, voice: false, sensitive: false }), {
            status: 200,
          })
        : new Response(JSON.stringify([]), { status: 200 }),
    ),
  );
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HouseLayout />}>
            <Route index element={<LivingRoom />} />
          </Route>
          <Route path="/call" element={<p>통화 화면</p>} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe('LivingRoom (V5 하늘이네 집)', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    window.localStorage.clear();
  });

  it('shows the three-step coach once on the first visit', () => {
    renderLiving({ coached: false });
    expect(screen.getByRole('dialog')).toHaveTextContent('소파를 누르면 통화해요');
    fireEvent.click(screen.getByRole('button', { name: '건너뛰기' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(window.localStorage.getItem('hanbeot.pref.houseCoached')).toBe('yes');
  });

  it('starts a call from the sofa tag', () => {
    renderLiving({ coached: true });
    fireEvent.click(screen.getByRole('button', { name: /에서 통화/ }));
    expect(screen.getByText('통화 화면')).toBeInTheDocument();
  });

  it('opens the note on the front door and clears its badge', () => {
    renderLiving({ coached: true });
    const door = screen.getByRole('button', { name: /현관 쪽지/ });
    expect(door).toHaveTextContent('1');
    fireEvent.click(door);
    expect(screen.getByRole('note')).toHaveTextContent('하늘이가 남긴 쪽지');
    expect(door).not.toHaveTextContent('1');
  });

  it('switches all four friends together with their rooms and persists the selection', () => {
    renderLiving({ coached: true });
    const picker = within(screen.getByRole('radiogroup', { name: '지금 이야기할 친구' }));
    expect(picker.getAllByRole('radio')).toHaveLength(4);
    for (const friend of [friendById('doyun'), friendById('jiwoo'), friendById('seoyun')]) {
      fireEvent.click(picker.getByRole('radio', { name: friend.name }));
      expect(picker.getByRole('radio', { name: friend.name })).toHaveAttribute(
        'aria-checked',
        'true',
      );
      expect(screen.getByRole('img', { name: new RegExp(friend.name) })).toHaveAttribute(
        'src',
        friend.room,
      );
      expect(window.localStorage.getItem(PREF_KEYS.friend)).toBe(friend.id);
      expect(screen.queryByRole('button', { name: /현관 쪽지/ })).not.toBeInTheDocument();
    }
    fireEvent.click(screen.getByRole('button', { name: '베란다에서 통화' }));
    expect(screen.getByText('통화 화면')).toBeInTheDocument();
  });
});
