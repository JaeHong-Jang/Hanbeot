import { render, screen } from '@testing-library/react';

import { UsagePanel } from './UsagePanel';

describe('UsagePanel', () => {
  it('shows elapsed time without a banner before the boundary', () => {
    render(<UsagePanel elapsedSec={462} safeMode={false} />);
    expect(screen.getByText(/07:42/)).toBeInTheDocument();
    expect(screen.queryByRole('status')).toBeNull();
  });
  it('shows the break banner at 60 minutes', () => {
    render(<UsagePanel elapsedSec={3600} safeMode={false} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
  it('suppresses the banner in safe mode', () => {
    render(<UsagePanel elapsedSec={3600} safeMode />);
    expect(screen.queryByRole('status')).toBeNull();
  });
});
