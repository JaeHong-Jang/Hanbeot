import styles from './SettingsPage.module.css';
import { settingsStrings as s } from './strings';

import type { Consent } from '@/entities';
import { ConsentForm } from '@/features/onboarding';
import { useConsents, useDeletionRequest, useUpdateConsents } from '@/shared/api';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Button } from '@/shared/ui';

const NAME_MAX_LENGTH = 10;

export function SettingsPage() {
  const { data } = useConsents();
  const update = useUpdateConsents();
  const deletion = useDeletionRequest();
  const namePref = useLocalPref(PREF_KEYS.name, '');
  if (!data) return <p className={styles.loading}>{s.loading}</p>;

  // 바꾸는 즉시 서버에 보낸다. 통화 중 철회도 즉시 반영돼야 한다(설계서 5⑩-3).
  const change = (next: Consent) => update.mutate(next);
  return (
    <main>
      <h1>{s.title}</h1>
      <h2>{s.nameTitle}</h2>
      <label className={styles.name}>
        <span>{s.nameLabel}</span>
        <input
          type="text"
          autoComplete="nickname"
          maxLength={NAME_MAX_LENGTH}
          placeholder={s.namePlaceholder}
          value={namePref.value}
          onChange={(e) => namePref.set(e.target.value.trim())}
        />
      </label>
      <p className={styles.note}>{s.nameNote}</p>
      <h2>{s.consent}</h2>
      <ConsentForm value={data} onChange={change} />
      <h2>{s.deletionTitle}</h2>
      <Button variant="danger" disabled={deletion.isPending} onClick={() => deletion.mutate()}>
        {s.requestDeletion}
      </Button>
      {deletion.data ? <p role="status">{s.deletionAccepted(deletion.data.eta_hours)}</p> : null}
    </main>
  );
}
