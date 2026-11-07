import { callStrings as s } from './strings';

import type { CallMode } from '@/entities';

const MODES: readonly CallMode[] = ['listen', 'organize', 'advise'];

type Props = { mode: CallMode; onChange: (mode: CallMode) => void };

export function ModeSelector({ mode, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label={s.modeLabel}>
      {MODES.map((m) => (
        <button
          key={m}
          type="button"
          role="radio"
          aria-checked={m === mode}
          onClick={() => onChange(m)}
        >
          {s.modes[m]}
        </button>
      ))}
    </div>
  );
}
