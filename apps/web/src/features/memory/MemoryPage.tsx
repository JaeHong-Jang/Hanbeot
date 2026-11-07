import { MemoryRow } from './MemoryRow';
import { memoryStrings as s } from './strings';

import type { Memory } from '@/entities';
import { useDeleteMemory, useMemories, useUpdateMemory } from '@/shared/api';

function MemoryGroup({
  title,
  items,
  onSave,
  onDelete,
}: {
  title: string;
  items: readonly Memory[];
  onSave: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p>{s.empty}</p>
      ) : (
        <ul>
          {items.map((m) => (
            <MemoryRow key={m.id} memory={m} onSave={onSave} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  );
}

export function MemoryPage() {
  const { data, isLoading } = useMemories();
  const update = useUpdateMemory();
  const remove = useDeleteMemory();
  if (isLoading || !data) return <p>{s.loading}</p>;

  const save = (id: string, text: string) => update.mutate({ id, text });
  const del = (id: string) => remove.mutate(id);
  return (
    <main>
      <h1>{s.title}</h1>
      <p>{s.deleteNote}</p>
      <MemoryGroup
        title={s.stated}
        items={data.filter((m) => m.kind === 'stated')}
        onSave={save}
        onDelete={del}
      />
      <MemoryGroup
        title={s.inferred}
        items={data.filter((m) => m.kind === 'inferred')}
        onSave={save}
        onDelete={del}
      />
    </main>
  );
}
