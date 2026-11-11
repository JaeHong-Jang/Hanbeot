import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConsentForm } from './ConsentForm';
import styles from './OnboardingPage.module.css';
import { onboardingStrings as s } from './strings';

import type { Consent } from '@/entities';
import { useUpdateConsents } from '@/shared/api';
import { DISCLOSURE_LINES } from '@/shared/strings/disclosure';
import { Button, Card, Logo } from '@/shared/ui';

export function OnboardingPage() {
  const navigate = useNavigate();
  const update = useUpdateConsents();
  const [consent, setConsent] = useState<Consent>({
    basic: false,
    voice: false,
    sensitive: false,
  });

  const start = () => update.mutate(consent, { onSuccess: () => navigate('/', { replace: true }) });

  return (
    <main>
      <Logo height={44} className={styles.logo} />
      <h1>{s.title}</h1>
      <Card className={styles.disclosure}>
        {DISCLOSURE_LINES.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </Card>
      <ConsentForm value={consent} onChange={setConsent} />
      <Button
        variant="primary"
        className={styles.start}
        disabled={!consent.basic || update.isPending}
        onClick={start}
      >
        {s.start}
      </Button>
    </main>
  );
}
