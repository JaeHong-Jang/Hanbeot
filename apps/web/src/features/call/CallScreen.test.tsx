import { render, screen } from '@testing-library/react';

import { CallScreen } from './CallScreen';

import { MockVoiceClient } from '@/shared/voice';

describe('CallScreen', () => {
  it('shows the disclosure, mode selector and a connect button', () => {
    render(<CallScreen client={new MockVoiceClient()} />);
    expect(screen.getByText(/AI 친구/)).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getByRole('button', { name: '통화 시작' })).toBeInTheDocument();
  });
});
