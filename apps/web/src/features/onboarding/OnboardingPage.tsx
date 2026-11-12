import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConsentForm } from './ConsentForm';
import styles from './OnboardingPage.module.css';
import { onboardingStrings as s } from './strings';

import type { Consent } from '@/entities';
import { useUpdateConsents } from '@/shared/api';
import { DISCLOSURE_LINES } from '@/shared/strings/disclosure';
import { Button, Icon, Logo } from '@/shared/ui';

/** 처음 한 번: 고지문(P0-12)을 읽고 필수 동의(P0-7)를 한 뒤 시작한다. 시작 버튼은 화면 아래에 고정. */
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
    <main className={styles.page}>
      <Logo height={30} className={styles.logo} />
      <div className={styles.intro}>
        <h1>{s.title}</h1>
        <p className={styles.lead}>{s.lead}</p>
      </div>

      <ul className={styles.disclosure}>
        {DISCLOSURE_LINES.map((line) => (
          <li key={line}>
            <Icon name="check" size={18} className={styles.check} />
            <p>{line}</p>
          </li>
        ))}
      </ul>

      <section className={styles.consent} aria-labelledby="onb-consent">
        <h2 id="onb-consent" className={styles.label}>
          {s.consentTitle}
        </h2>
        <div className={styles.group}>
          <ConsentForm value={consent} onChange={setConsent} />
        </div>
      </section>

      <div className={styles.bottom}>
        <Button
          variant="primary"
          block
          disabled={!consent.basic || update.isPending}
          onClick={start}
        >
          {s.start}
        </Button>
        {!consent.basic ? <p className={styles.need}>{s.needBasic}</p> : null}
      </div>
    </main>
  );
}
