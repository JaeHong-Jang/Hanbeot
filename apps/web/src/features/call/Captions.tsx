import { callStrings as s } from './strings';

import type { Caption } from '@/shared/voice';

export function Captions({ captions }: { captions: readonly Caption[] }) {
  return (
    <div aria-live="polite" aria-label={s.captions}>
      {captions.map((c) => (
        <p key={c.id}>
          {c.speaker === 'user' ? s.user : s.ai}: {c.text}
        </p>
      ))}
    </div>
  );
}
