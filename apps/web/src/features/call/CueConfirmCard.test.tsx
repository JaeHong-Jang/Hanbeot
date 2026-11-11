import { fireEvent, render, screen } from '@testing-library/react';

import { CueConfirmCard } from './CueConfirmCard';

describe('CueConfirmCard', () => {
  it('asks a question instead of asserting a feeling and answers in one tap', () => {
    const onAnswer = vi.fn();
    render(<CueConfirmCard category="low" onAnswer={onAnswer} />);
    // 단정("슬프구나")이 아니라 되묻는 문장이어야 한다
    expect(screen.getByText(/내가 맞게 들었어\?$/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '맞아' }));
    fireEvent.click(screen.getByRole('button', { name: '아니야' }));
    expect(onAnswer.mock.calls).toEqual([[true], [false]]);
  });

  it('falls back to a neutral question for an unknown category', () => {
    render(<CueConfirmCard category="something-new" onAnswer={() => undefined} />);
    expect(screen.getByText(/물어봐도 될까\?$/)).toBeInTheDocument();
  });
});
