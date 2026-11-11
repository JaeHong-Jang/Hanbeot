import { allowedFeatures, normalizeConsent } from './allowedFeatures';
import styles from './ConsentForm.module.css';
import { onboardingStrings as s } from './strings';

import type { Consent } from '@/entities';
import { Toggle } from '@/shared/ui';

type Props = { value: Consent; onChange: (next: Consent) => void };

export function ConsentForm({ value, onChange }: Props) {
  const features = allowedFeatures(value);
  const optionalDisabled = !value.basic;
  return (
    <section aria-label={s.consentTitle}>
      <Toggle
        label={s.basic.label}
        description={s.basic.desc}
        checked={value.basic}
        onChange={(basic) => onChange(normalizeConsent({ ...value, basic }))}
      />
      <Toggle
        label={s.sensitive.label}
        description={s.sensitive.desc}
        checked={value.sensitive}
        disabled={optionalDisabled}
        onChange={(sensitive) => onChange({ ...value, sensitive })}
      />
      <Toggle
        label={s.voice.label}
        description={s.voice.desc}
        checked={false}
        disabled
        onChange={() => undefined}
      />
      <h3 className={styles.allowedTitle}>{s.allowedTitle}</h3>
      {features.length === 0 ? (
        <p className={styles.none}>{s.noneAllowed}</p>
      ) : (
        <ul className={styles.features} aria-label={s.allowedTitle}>
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
