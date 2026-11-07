import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { allowedFeatures } from './allowedFeatures';
import { OnboardingPage } from './OnboardingPage';

import { DISCLOSURE_AI_FRIEND, DISCLOSURE_NOT_THERAPY } from '@/shared/strings/disclosure';

describe('OnboardingPage', () => {
  it('shows the AI disclosure and consent toggles', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <OnboardingPage />
        </MemoryRouter>
      </QueryClientProvider>,
    );
    expect(screen.getByText(DISCLOSURE_AI_FRIEND)).toBeInTheDocument();
    expect(screen.getByText(DISCLOSURE_NOT_THERAPY)).toBeInTheDocument();
    expect(screen.getAllByRole('switch')).toHaveLength(3);
  });
});

describe('allowedFeatures (8 combinations)', () => {
  const bools = [false, true];
  for (const basic of bools) {
    for (const voice of bools) {
      for (const sensitive of bools) {
        it(`basic=${basic} voice=${voice} sensitive=${sensitive}`, () => {
          const n = allowedFeatures({ basic, voice, sensitive }).length;
          expect(n).toBe(!basic ? 0 : sensitive ? 9 : 5);
        });
      }
    }
  }
});
