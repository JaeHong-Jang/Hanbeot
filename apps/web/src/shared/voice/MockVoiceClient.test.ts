import { MockVoiceClient } from './MockVoiceClient';
import type { VoiceEvent } from './types';

describe('MockVoiceClient playback', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('ends playback before waiting for the next user turn', async () => {
    const client = new MockVoiceClient();
    const events: VoiceEvent[] = [];
    const unsubscribe = client.subscribe((event) => events.push(event));
    await client.connect();
    vi.advanceTimersByTime(4400);
    expect(events.some((event) => event.type === 'playback_started')).toBe(true);
    expect(events.some((event) => event.type === 'playback_stopped')).toBe(false);
    vi.advanceTimersByTime(2600);
    expect(events.at(-1)?.type).toBe('playback_stopped');
    await client.disconnect();
    unsubscribe();
    expect(vi.getTimerCount()).toBe(0);
  });
});
