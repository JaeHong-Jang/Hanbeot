import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConsentForm } from './ConsentForm';
import styles from './OnboardingPage.module.css';
import { onboardingStrings as s } from './strings';

import type { Consent } from '@/entities';
import { useUpdateConsents } from '@/shared/api';
import doorImage from '@/shared/assets/rooms/living-evening.jpg';
import { DISCLOSURE_LINES } from '@/shared/strings/disclosure';
import { Button, Icon, Logo } from '@/shared/ui';

/**
 * 처음 한 번: 하늘이네 현관 앞. 고지문(P0-12)을 읽고 필수 동의(P0-7)를 한 뒤 들어간다.
 * 위는 불 켜진 거실 그림과 하늘이 인사, 아래는 꼭 알아야 할 것과 동의, 들어가기 버튼은 화면 아래 고정.
 */
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
      <div className={styles.hero}>
        <img src={doorImage} alt="" />
        <Logo height={28} className={styles.logo} />
        <p className={styles.say}>
          <small>{s.sayFrom}</small>
          {s.say}
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.intro}>
          <h1>{s.title}</h1>
          <p className={styles.lead}>{s.lead}</p>
        </div>

        <section aria-labelledby="onb-know">
          <h2 id="onb-know" className={styles.label}>
            {s.knowTitle}
          </h2>
          <ul className={styles.card}>
            {DISCLOSURE_LINES.map((line) => (
              <li key={line} className={styles.know}>
                <Icon name="check" size={18} className={styles.check} />
                <p>{line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="onb-consent">
          <h2 id="onb-consent" className={styles.label}>
            {s.consentTitle}
          </h2>
          <div className={`${styles.card} ${styles.form}`}>
            <ConsentForm value={consent} onChange={setConsent} />
          </div>
        </section>
      </div>

      <div className={styles.bottom}>
        <Button
          variant="primary"
          block
          disabled={!consent.basic || update.isPending}
          onClick={start}
        >
          <Icon name="door" size={20} />
          {s.start}
        </Button>
        {!consent.basic ? <p className={styles.need}>{s.needBasic}</p> : null}
      </div>
    </main>
  );
}
