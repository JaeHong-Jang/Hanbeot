import { useEffect, useRef } from 'react';

import styles from './MemorySheet.module.css';
import { callStrings as s } from './strings';

import { useMemories } from '@/shared/api';

const SHOWN = 3;

/** 통화 중에 "한벗이 기억하는 이야기"를 잠깐 본다. 고치기·삭제는 기억 화면에서 한다. */
export function MemorySheet({ id, onClose }: { id: string; onClose: () => void }) {
  const memories = useMemories('approved');
  const closeRef = useRef<HTMLButtonElement>(null);

  // 열리면 닫기 버튼으로 포커스를 옮겨 키보드·스크린리더가 새 내용을 바로 만난다.
  useEffect(() => closeRef.current?.focus(), []);

  const body = (() => {
    if (memories.isPending) return <p className={styles.note}>{s.memoryLoading}</p>;
    if (memories.isError)
      return (
        <p className={styles.note}>
          {s.memoryError}{' '}
          <button type="button" className={styles.link} onClick={() => void memories.refetch()}>
            {s.memoryRetry}
          </button>
        </p>
      );
    const items = memories.data.slice(0, SHOWN);
    if (items.length === 0) return <p className={styles.note}>{s.memoryEmpty}</p>;
    return (
      <ul className={styles.list}>
        {items.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
    );
  })();

  return (
    <section id={id} className={styles.sheet} aria-label={s.memoryTitle}>
      <div className={styles.head}>
        <h2 className={styles.title}>{s.memoryTitle}</h2>
        <button ref={closeRef} type="button" className={styles.link} onClick={onClose}>
          {s.memoryClose}
        </button>
      </div>
      {body}
    </section>
  );
}
