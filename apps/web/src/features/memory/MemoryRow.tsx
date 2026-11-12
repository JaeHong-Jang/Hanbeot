import { useState } from 'react';

import styles from './MemoryRow.module.css';
import { memoryStrings as s } from './strings';

import type { Memory } from '@/entities';
import { daysSince } from '@/shared/lib/time';
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
      {editing ? (
        <div className={styles.edit}>
          <input
            type="text"
            className={styles.input}
            aria-label={s.edit}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <div className={styles.editActions}>
            <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>
              {s.cancel}
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => {
                onSave(memory.id, draft);
                setEditing(false);
              }}
            >
              {s.save}
            </Button>
          </div>
        </div>
      ) : (
        <p className={styles.text}>{memory.text}</p>
      )}
      {editing ? null : (
        <div className={styles.meta}>
          <Badge tone={memory.state === 'approved' ? 'ok' : 'neutral'}>
            {s.state[memory.state]}
          </Badge>
          <span className={styles.when}>{s.when(daysSince(memory.created_at))}</span>
          <div className={styles.actions}>
            {editable ? (
              <button
                type="button"
                className={styles.iconBtn}
                aria-label={s.edit}
                onClick={() => setEditing(true)}
              >
                <Icon name="pen" size={18} />
              </button>
            ) : null}
            <button
              type="button"
              className={styles.iconBtn}
              aria-label={s.remove}
              onClick={() => onDelete(memory.id)}
            >
              <Icon name="trash" size={18} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
