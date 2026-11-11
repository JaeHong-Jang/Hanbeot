import { useState } from 'react';

import { shouldNotifyBreak } from './shouldNotifyBreak';
import { usageStrings as s } from './strings';
import styles from './UsagePanel.module.css';

import { formatMmSs } from '@/shared/lib/time';
import { Button, Card } from '@/shared/ui';

type Props = { elapsedSec: number; safeMode: boolean; onRest?: () => void };

export function UsagePanel({ elapsedSec, safeMode, onRest }: Props) {
  const [dismissed, setDismissed] = useState(false);
  const notify = shouldNotifyBreak(elapsedSec, safeMode, dismissed);
  return (
    <div className={styles.panel}>
      <span className={styles.elapsed}>
        {s.elapsed} <span className={styles.clock}>{formatMmSs(elapsedSec)}</span>
      </span>
      {notify ? (
        <Card role="status" className={styles.banner}>
          <p>{s.breakMessage}</p>
          <div className={styles.actions}>
            <Button onClick={onRest}>{s.rest}</Button>
            <Button onClick={() => setDismissed(true)}>{s.keepGoing}</Button>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
