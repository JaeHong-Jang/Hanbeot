import { fireEvent, render, screen } from '@testing-library/react';

import { CallScreen } from './CallScreen';

import { MockVoiceClient } from '@/shared/voice';

describe('CallScreen', () => {
  it('shows the AI disclosure, mode pill and a connect button before the call', () => {
    render(<CallScreen client={new MockVoiceClient()} />);
    expect(screen.getByRole('heading', { name: /AI 친구/ })).toBeInTheDocument();
    expect(screen.getByText('치료나 상담을 대신하지 않아요.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /대화 모드: 그냥 들어줘/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '통화 시작' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '지금 도움받을 곳 보기' })).toBeInTheDocument();
  });

  it('opens the three talk modes from the pill', () => {
    render(<CallScreen client={new MockVoiceClient()} />);
    expect(screen.queryAllByRole('radio')).toHaveLength(0);
    fireEvent.click(screen.getByRole('button', { name: /대화 모드: 그냥 들어줘/ }));
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('cannot interrupt while the friend is not speaking', () => {
    render(<CallScreen client={new MockVoiceClient()} />);
    expect(screen.getByRole('button', { name: '눌러서 한벗 말 끊기' })).toBeDisabled();
  });
});
