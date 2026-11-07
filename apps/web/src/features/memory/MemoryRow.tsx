import { useState } from 'react';

import { memoryStrings as s } from './strings';

import type { Memory } from '@/entities';
import { Badge, Button } from '@/shared/ui';

type Props = {
  memory: Memory;
  onSave: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

export function MemoryRow({ memory, onSave, onDelete }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(memory.text);
  // 수정은 "내가 말한 것"만(설계서 3.5).
  const editable = memory.kind === 'stated';

  return (
    <li>
      <Badge tone={memory.state === 'approved' ? 'ok' : 'neutral'}>{s.state[memory.state]}</Badge>
      {editing ? (
        <>
          <input aria-label={s.edit} value={draft} onChange={(e) => setDraft(e.target.value)} />
          <Button
            onClick={() => {
              onSave(memory.id, draft);
              setEditing(false);
            }}
          >
            {s.save}
          </Button>
        </>
      ) : (
        <span>{memory.text}</span>
      )}
      {editable && !editing ? <Button onClick={() => setEditing(true)}>{s.edit}</Button> : null}
      <Button onClick={() => onDelete(memory.id)}>{s.remove}</Button>
    </li>
  );
}
