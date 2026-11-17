import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HouseLayout } from './HouseLayout';
import { LivingRoom } from './LivingRoom';

import { friendById } from '@/shared/friend';
import { PREF_KEYS } from '@/shared/hooks/useLocalPref';
import { dayPart } from '@/shared/lib/dayPart';

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

describe('LivingRoom (V5 홈)', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    window.localStorage.clear();
  });

  it('shows the three-step coach once on the first visit', () => {
    renderLiving({ coached: false });
    expect(screen.getByRole('dialog')).toHaveTextContent('아래 버튼을 누르면 통화해요');
    fireEvent.click(screen.getByRole('button', { name: '건너뛰기' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(window.localStorage.getItem('hanbeot.pref.houseCoached')).toBe('yes');
  });

  it('names the home after the friend only and starts a call from the sheet button', () => {
    renderLiving({ coached: true });
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^하늘이네$/);
    fireEvent.click(screen.getByRole('button', { name: '하늘이 옆에 앉기' }));
    expect(screen.getByText('통화 화면')).toBeInTheDocument();
  });

  it('keeps the friend picker, door note, window and fridge tags off the home', () => {
    renderLiving({ coached: true });
    expect(screen.queryByRole('radiogroup', { name: /친구/ })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /현관 쪽지|창문|에서 통화/ }),
    ).not.toBeInTheDocument();
    const tabs = within(screen.getByRole('navigation'));
    expect(tabs.getAllByRole('link').map((link) => link.textContent)).toEqual([
      '거실',
      '냉장고',
      '내 방',
      '마이페이지',
    ]);
  });

  it('folds and opens the mode sheet from its handle', () => {
    renderLiving({ coached: true });
    const handle = screen.getByRole('button', { name: '대화 방식 접기' });
    expect(handle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(handle);
    expect(screen.getByRole('button', { name: '대화 방식 펼치기' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    // 접혀도 통화 버튼(작은 것)은 남고, 지금 고른 방식이 한 줄로 보인다
    expect(screen.getByText('그냥 들어줘')).toBeVisible();
    expect(screen.getByRole('button', { name: '하늘이 옆에 앉기' })).toBeInTheDocument();
  });

  it('moves to the next line when the talk box is pressed', () => {
    renderLiving({ coached: true });
    const talk = screen.getByRole('button', { name: /하늘이가 하는 말/ });
    const first = talk.textContent;
    fireEvent.click(talk);
    expect(talk).toHaveTextContent("오늘은 '들어줘'로 들을게");
    expect(talk.textContent).not.toBe(first);
  });

  it('follows the friend and room time chosen in my page', () => {
    window.localStorage.setItem(PREF_KEYS.friend, 'seoyun');
    window.localStorage.setItem(PREF_KEYS.dayPart, 'morning');
    renderLiving({ coached: true });
    const seoyun = friendById('seoyun');
    expect(screen.getByRole('img', { name: /서윤/ })).toHaveAttribute('src', seoyun.room.morning);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('서윤이네');
  });

  it('uses the current time for the room when the time setting is auto', () => {
    renderLiving({ coached: true });
    expect(screen.getByRole('img', { name: /하늘/ })).toHaveAttribute(
      'src',
      friendById('haneul').room[dayPart(new Date().getHours())],
    );
  });
});
