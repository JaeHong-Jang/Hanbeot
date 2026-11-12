import { Link } from 'react-router-dom';

import styles from './HouseSubPage.module.css';
import { houseStrings as s } from './strings';

import type { Consent } from '@/entities';
import { MemoryPage } from '@/features/memory';
import { ConsentForm } from '@/features/onboarding';
import { useConsents, useUpdateConsents } from '@/shared/api';
import { Icon } from '@/shared/ui';

function BackToRoom() {
  return (
    <Link to="/room" className={styles.back}>
      <Icon name="chevronDown" size={20} className={styles.backIcon} />
      {s.back}
    </Link>
  );
}

/** 내 방 → 하늘이가 기억하는 것. 목록과 고치기·지우기는 공용 기억 화면을 그대로 쓴다. */
export function HouseMemory() {
  return (
    <div className={styles.sub}>
      <BackToRoom />
      <MemoryPage />
    </div>
  );
}

/** 내 방 → 개인정보와 동의. 바꾸는 즉시 서버에 보낸다(설계서 5⑩-3). */
export function HouseConsent() {
  const { data } = useConsents();
  const update = useUpdateConsents();
  return (
    <div className={styles.sub}>
      <BackToRoom />
      <main className={styles.page}>
        <h1>{s.consentTitle}</h1>
        {data ? (
          <ConsentForm value={data} onChange={(next: Consent) => update.mutate(next)} />
        ) : (
          <p>{s.loading}</p>
        )}
      </main>
    </div>
  );
}
