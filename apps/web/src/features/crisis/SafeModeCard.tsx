import { crisisStrings as s } from './strings';

import {
  DISCLOSURE_AI_FRIEND,
  DISCLOSURE_NOT_THERAPY,
  DISCLOSURE_NO_LIVE_CONTACT,
} from '@/shared/strings/disclosure';
import { Button, Card } from '@/shared/ui';

type Props = { centerName?: string; onAnswer?: (safe: boolean) => void };

export function SafeModeCard({ centerName, onAnswer }: Props) {
  return (
    <Card role="alert" aria-label={s.title}>
      <h2>{s.title}</h2>
      <p>
        <a href="tel:109">{s.call109}</a>
      </p>
      <p>{centerName ?? s.centerPlaceholder}</p>
      <p>{s.safeQuestion}</p>
      <Button onClick={() => onAnswer?.(true)}>{s.yes}</Button>
      <Button onClick={() => onAnswer?.(false)}>{s.no}</Button>
      <small>
        {DISCLOSURE_AI_FRIEND} {DISCLOSURE_NOT_THERAPY} {DISCLOSURE_NO_LIVE_CONTACT}
      </small>
    </Card>
  );
}
