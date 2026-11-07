import { render, screen } from '@testing-library/react';

import { SafeModeCard } from './SafeModeCard';

describe('SafeModeCard', () => {
  it('links to 109 and asks about safety', () => {
    render(<SafeModeCard />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'tel:109');
    expect(screen.getByText('지금 안전한가요?')).toBeInTheDocument();
    expect(screen.getByText(/AI 친구/)).toBeInTheDocument();
  });
});
