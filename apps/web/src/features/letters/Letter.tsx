import styles from './Letter.module.css';
import { lettersStrings as s } from './strings';

type Props = {
  /** 받는 사람 이름. 비어 있으면 "오늘의 너에게" */
  to: string;
  lines: readonly string[];
  nextStep?: string | null;
  friendName: string;
  /** 통화 직후처럼 막 도착한 편지는 아래에서 올라오며 나타난다. */
  arriving?: boolean;
};

/** 친구가 오늘 이야기를 정리해 쓴 편지 한 장. 편지지 색, 명조 본문, 손글씨 서명. */
export function Letter({ to, lines, nextStep, friendName, arriving = false }: Props) {
  return (
    <article className={`${styles.letter} ${arriving ? styles.arriving : ''}`} aria-label={s.label}>
      <p className={styles.dear}>{s.dear(to)}</p>
      <ul className={styles.lines}>
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {nextStep ? (
        <p className={styles.next}>
          <strong>{s.nextStep}</strong>
          {nextStep}
        </p>
      ) : null}
      <p className={styles.sign}>{s.signature(friendName)}</p>
    </article>
  );
}
