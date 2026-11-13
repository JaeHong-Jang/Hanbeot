import { act, cleanup, fireEvent, render } from '@testing-library/react';

import { TalkingPortrait } from './TalkingPortrait';

import { friendById } from '@/shared/friend';

function loadFrames(container: HTMLElement): void {
  container.querySelectorAll('img').forEach((image) => fireEvent.load(image));
}

describe('TalkingPortrait', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('cycles only while speaking and closes immediately when speech stops', () => {
    const friend = friendById('haneul');
    const { container, rerender } = render(<TalkingPortrait friend={friend} speaking={false} />);
    loadFrames(container);
    const portrait = container.firstElementChild;
    expect(portrait).toHaveAttribute('data-mouth', 'closed');
    expect(container.querySelectorAll('img')).toHaveLength(3);
    expect(vi.getTimerCount()).toBe(0);
    rerender(<TalkingPortrait friend={friend} speaking />);
    act(() => vi.advanceTimersByTime(150));
    expect(portrait).toHaveAttribute('data-mouth', 'half');
    act(() => vi.advanceTimersByTime(150));
    expect(portrait).toHaveAttribute('data-mouth', 'open');
    rerender(<TalkingPortrait friend={friend} speaking={false} />);
    expect(portrait).toHaveAttribute('data-mouth', 'closed');
    expect(vi.getTimerCount()).toBe(0);
  });

  it('uses playback volume including silence instead of the demo cycle', () => {
    let level = 0.8;
    const readOutputLevel = (): number => level;
    const { container } = render(
      <TalkingPortrait friend={friendById('seoyun')} speaking readOutputLevel={readOutputLevel} />,
    );
    loadFrames(container);
    const portrait = container.firstElementChild;
    act(() => vi.advanceTimersByTime(150));
    expect(portrait).toHaveAttribute('data-mouth', 'open');
    level = 0.3;
    act(() => vi.advanceTimersByTime(150));
    expect(portrait).toHaveAttribute('data-mouth', 'half');
    level = 0;
    act(() => vi.advanceTimersByTime(150));
    expect(portrait).toHaveAttribute('data-mouth', 'closed');
    level = Number.NaN;
    act(() => vi.advanceTimersByTime(150));
    expect(portrait).toHaveAttribute('data-mouth', 'closed');
  });

  it('resets on friend changes and removes its timer on unmount', () => {
    const { container, rerender, unmount } = render(
      <TalkingPortrait friend={friendById('doyun')} speaking />,
    );
    loadFrames(container);
    act(() => vi.advanceTimersByTime(300));
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'open');
    rerender(<TalkingPortrait friend={friendById('jiwoo')} speaking />);
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'closed');
    expect(container.querySelector('img')).toHaveAttribute('src', friendById('jiwoo').mouth.closed);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('keeps a still portrait when reduced motion is requested', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    );
    const readOutputLevel = vi.fn(() => 1);
    const { container } = render(
      <TalkingPortrait friend={friendById('jiwoo')} speaking readOutputLevel={readOutputLevel} />,
    );
    loadFrames(container);
    act(() => vi.advanceTimersByTime(3000));
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'closed');
    expect(readOutputLevel).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('holds the closed portrait until every frame has loaded, including after a friend change', () => {
    const { container, rerender } = render(
      <TalkingPortrait friend={friendById('haneul')} speaking />,
    );
    const [closed, half, open] = container.querySelectorAll('img');
    if (!closed || !half || !open) throw new Error('Missing mouth images');
    fireEvent.load(closed);
    fireEvent.load(half);
    act(() => vi.advanceTimersByTime(600));
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'closed');
    expect(vi.getTimerCount()).toBe(0);
    fireEvent.load(open);
    act(() => vi.advanceTimersByTime(300));
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'open');

    rerender(<TalkingPortrait friend={friendById('seoyun')} speaking />);
    act(() => vi.advanceTimersByTime(600));
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'closed');
    loadFrames(container);
    act(() => vi.advanceTimersByTime(150));
    expect(container.firstElementChild).toHaveAttribute('data-mouth', 'half');
  });
});
