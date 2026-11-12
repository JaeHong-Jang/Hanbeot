import styles from './SettingsPage.module.css';
import { settingsStrings as s } from './strings';

import type { Consent } from '@/entities';
import { ConsentForm } from '@/features/onboarding';
import { useConsents, useDeletionRequest, useUpdateConsents } from '@/shared/api';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Button } from '@/shared/ui';

const NAME_MAX_LENGTH = 10;

/** 설정. 운영 앱처럼 주제별 묶음(프로필, 동의, 내 데이터)으로 나눈 목록이다. */
export function SettingsPage() {
  const { data } = useConsents();
  const update = useUpdateConsents();
  const deletion = useDeletionRequest();
  const namePref = useLocalPref(PREF_KEYS.name, '');
  if (!data) return <p className={styles.loading}>{s.loading}</p>;

  // 바꾸는 즉시 서버에 보낸다. 통화 중 철회도 즉시 반영돼야 한다(설계서 5⑩-3).
  const change = (next: Consent) => update.mutate(next);
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{s.title}</h1>

      <section className={styles.section} aria-labelledby="set-name">
        <h2 id="set-name" className={styles.label}>
          {s.nameTitle}
        </h2>
        <div className={styles.group}>
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
        </div>
        <p className={styles.note}>{s.nameNote}</p>
      </section>

      <section className={styles.section} aria-labelledby="set-consent">
        <h2 id="set-consent" className={styles.label}>
          {s.consent}
        </h2>
        <div className={styles.group}>
          <ConsentForm value={data} onChange={change} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="set-data">
        <h2 id="set-data" className={styles.label}>
          {s.deletionTitle}
        </h2>
        <div className={styles.group}>
          <p className={styles.dataDesc}>{s.deletionDesc}</p>
          <Button
            variant="danger"
            block
            disabled={deletion.isPending}
            onClick={() => deletion.mutate()}
          >
            {s.requestDeletion}
          </Button>
          {deletion.data ? (
            <p role="status" className={styles.done}>
              {s.deletionAccepted(deletion.data.eta_hours)}
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
