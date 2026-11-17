import { useState } from 'react';

import { houseStrings as s } from './strings';
import styles from './TalkBox.module.css';

import { Icon } from '@/shared/ui';

type Props = { name: string; doing: string; lines: readonly string[] };

/**
 * 방 그림 아래쪽에 깔리는 대화 상자. 친구 이름과 지금 하는 일, 그 아래 친구의 말 한 줄.
 * 말이 여러 줄이면 누를 때마다 다음 말로 넘어가고, 끝에서 처음으로 돌아간다.
 */
export function TalkBox({ name, doing, lines }: Props) {
  const [turn, setTurn] = useState(0);
  const line = lines[turn % lines.length] ?? '';
  const body = (
    <>
      <span className={styles.who}>
        <b>{name}</b>
        <small>{doing}</small>
      </span>
      <span className={styles.line}>{line}</span>
    </>
  );

  if (lines.length < 2) {
    return (
      <p className={styles.talk} aria-label={s.talkLabel(name)}>
        {body}
      </p>
    );
  }
  return (
    <button
      type="button"
      className={styles.talk}
      aria-label={`${s.talkLabel(name)}: ${line} ${s.talkNext}`}
      onClick={() => setTurn(turn + 1)}
    >
      {body}
      <Icon name="chevronDown" size={18} className={styles.more} />
    </button>
  );
}
