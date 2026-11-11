import { useState } from 'react';

import styles from './MemoryRow.module.css';
import { memoryStrings as s } from './strings';

import type { Memory } from '@/entities';
import { Badge, Button, Icon } from '@/shared/ui';

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
    <li className={styles.row}>
      <Badge tone={memory.state === 'approved' ? 'ok' : 'neutral'}>{s.state[memory.state]}</Badge>
      {editing ? (
        <div className={styles.edit}>
          <input
            type="text"
            className={styles.input}
            aria-label={s.edit}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <Button
            variant="primary"
            onClick={() => {
              onSave(memory.id, draft);
              setEditing(false);
            }}
          >
            {s.save}
          </Button>
        </div>
      ) : (
        <span className={styles.text}>{memory.text}</span>
      )}
      <div className={styles.actions}>
        {editable && !editing ? (
          <Button onClick={() => setEditing(true)}>
            <Icon name="pen" size={17} />
            {s.edit}
          </Button>
        ) : null}
        <Button onClick={() => onDelete(memory.id)}>
          <Icon name="trash" size={17} />
          {s.remove}
        </Button>
      </div>
    </li>
  );
}
