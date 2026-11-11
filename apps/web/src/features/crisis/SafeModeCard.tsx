import styles from './SafeModeCard.module.css';
import { crisisStrings as s } from './strings';

import {
  DISCLOSURE_AI_FRIEND,
  DISCLOSURE_NOT_THERAPY,
  DISCLOSURE_NO_LIVE_CONTACT,
} from '@/shared/strings/disclosure';
import { Button, Card, Icon } from '@/shared/ui';

type Props = { centerName?: string; onAnswer?: (safe: boolean) => void };

export function SafeModeCard({ centerName, onAnswer }: Props) {
  return (
    <Card role="alert" aria-label={s.title} className={styles.card}>
      <h2>{s.title}</h2>
      <p>
        <a className={styles.tel} href="tel:109">
          <Icon name="phone" size={20} />
          {s.call109}
        </a>
      </p>
      <p className={styles.center}>{centerName ?? s.centerPlaceholder}</p>
      <p>{s.safeQuestion}</p>
      <div className={styles.answers}>
        <Button onClick={() => onAnswer?.(true)}>{s.yes}</Button>
        <Button onClick={() => onAnswer?.(false)}>{s.no}</Button>
      </div>
      <small>
        {DISCLOSURE_AI_FRIEND} {DISCLOSURE_NOT_THERAPY} {DISCLOSURE_NO_LIVE_CONTACT}
      </small>
    </Card>
  );
}
