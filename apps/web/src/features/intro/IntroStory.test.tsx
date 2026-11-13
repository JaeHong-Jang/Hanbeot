import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { IntroStory } from './IntroStory';
import { sceneImage } from './scenes';

import { PREF_KEYS } from '@/shared/hooks/useLocalPref';

function renderIntro(): ReturnType<typeof render> {
  return render(
    <MemoryRouter initialEntries={['/intro']}>
      <Routes>
        <Route path="/intro" element={<IntroStory />} />
        <Route path="/login" element={<p>이름 입력 화면</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('IntroStory', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(performance, 'now').mockImplementation(() => Date.now());
  });
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    window.localStorage.clear();
  });

  it('loads all four photographs and advances every three seconds until home', () => {
    const { container } = renderIntro();
    const sources = Array.from(container.querySelectorAll('img'), (image) =>
      image.getAttribute('src'),
    );
    expect(sources).toEqual(
      ['alone', 'team', 'tangled', 'home'].map((id) =>
        sceneImage(id as 'alone' | 'team' | 'tangled' | 'home'),
      ),
    );
    expect(container.querySelector('svg')).toBeNull();
    for (const scene of ['team', 'tangled', 'home']) {
      act(() => vi.advanceTimersByTime(3000));
      expect(container.querySelector('section')).toHaveAttribute('data-scene', scene);
    }
    act(() => vi.advanceTimersByTime(12000));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'home');
    fireEvent.click(screen.getByRole('button', { name: '현관문 눌러 들어가기' }));
    act(() => vi.advanceTimersByTime(700));
    expect(screen.getByText('이름 입력 화면')).toBeInTheDocument();
    expect(window.localStorage.getItem(PREF_KEYS.introSeen)).toBe('yes');
  });

  it('pauses automatic advance and still supports the next button', () => {
    const { container } = renderIntro();
    fireEvent.click(screen.getByRole('button', { name: '이야기 잠시 멈추기' }));
    act(() => vi.advanceTimersByTime(9000));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'alone');
    fireEvent.click(screen.getByRole('button', { name: '다음 장면' }));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'team');
  });

  it('cancels both hold and delayed navigation when leaving', () => {
    const { unmount } = renderIntro();
    for (let sceneIndex = 0; sceneIndex < 3; sceneIndex += 1) {
      fireEvent.click(screen.getByRole('button', { name: '다음 장면' }));
    }
    const bell = screen.getByRole('button', { name: '현관문 눌러 들어가기' });
    fireEvent.pointerDown(bell);
    act(() => vi.advanceTimersByTime(800));
    expect(screen.getByText('띵동')).toBeInTheDocument();
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
    act(() => vi.advanceTimersByTime(1000));
    expect(window.localStorage.getItem(PREF_KEYS.introSeen)).toBeNull();
  });

  it('resumes with the time left on the paused progress bar', () => {
    const { container } = renderIntro();
    act(() => vi.advanceTimersByTime(2000));
    fireEvent.click(screen.getByRole('button', { name: '이야기 잠시 멈추기' }));
    act(() => vi.advanceTimersByTime(9000));
    fireEvent.click(screen.getByRole('button', { name: '이야기 자동 넘기기' }));
    act(() => vi.advanceTimersByTime(999));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'alone');
    act(() => vi.advanceTimersByTime(1));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'team');
  });

  it('supports skipping and stores completion only after explicit progression', () => {
    renderIntro();
    fireEvent.click(screen.getByRole('button', { name: '건너뛰기' }));
    expect(screen.getByText('이름 입력 화면')).toBeInTheDocument();
    expect(window.localStorage.getItem(PREF_KEYS.introSeen)).toBe('yes');
    // jsdom은 localStorage 변경 알림도 0ms 타이머로 예약한다.
    act(() => vi.advanceTimersByTime(0));
    expect(vi.getTimerCount()).toBe(0);
  });

  it('waits for the user when reduced motion is requested', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    );
    const { container } = renderIntro();
    act(() => vi.advanceTimersByTime(10000));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'alone');
    fireEvent.click(screen.getByRole('button', { name: '다음 장면' }));
    expect(container.querySelector('section')).toHaveAttribute('data-scene', 'team');
  });
});
