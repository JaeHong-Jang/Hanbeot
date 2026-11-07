import { settingsStrings as s } from './strings';

import { ConsentForm } from '@/features/onboarding';
import type { Consent } from '@/entities';
import { useConsents, useDeletionRequest, useUpdateConsents } from '@/shared/api';
import { Button } from '@/shared/ui';

export function SettingsPage() {
  const { data } = useConsents();
  const update = useUpdateConsents();
  const deletion = useDeletionRequest();
  if (!data) return <p>{s.loading}</p>;

  // 바꾸는 즉시 서버에 보낸다. 통화 중 철회도 즉시 반영돼야 한다(설계서 5⑩-3).
  const change = (next: Consent) => update.mutate(next);
  return (
    <main>
      <h1>{s.title}</h1>
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
