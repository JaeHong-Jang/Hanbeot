import { useState } from 'react';

import { shouldNotifyBreak } from './shouldNotifyBreak';
import { usageStrings as s } from './strings';

import { formatMmSs } from '@/shared/lib/time';
import { Button, Card } from '@/shared/ui';

type Props = { elapsedSec: number; safeMode: boolean; onRest?: () => void };

export function UsagePanel({ elapsedSec, safeMode, onRest }: Props) {
  const [dismissed, setDismissed] = useState(false);
  const notify = shouldNotifyBreak(elapsedSec, safeMode, dismissed);
  return (
    <div>
      <span>
        {s.elapsed} {formatMmSs(elapsedSec)}
      </span>
      {notify ? (
        <Card role="status">
          <p>{s.breakMessage}</p>
          <Button onClick={onRest}>{s.rest}</Button>
          <Button onClick={() => setDismissed(true)}>{s.keepGoing}</Button>
        </Card>
      ) : null}
    </div>
  );
}
