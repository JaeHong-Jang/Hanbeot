import styles from './Captions.module.css';
import { callStrings as s } from './strings';

import type { Caption } from '@/shared/voice';

const VISIBLE_COUNT = 2; // 영상통화처럼 한벗의 최근 말 두 줄만. 전체는 통화 뒤 요약에서 본다.

type Props = {
  captions: readonly Caption[];
  /** 받아쓴 내 말 한 줄을 같이 보여 줄지 */ showHeard?: boolean;
};

/**
 * 한벗이 한 말을 사진 위 말풍선으로 띄운다. 받아쓰기를 쓰는 통화에서는
 * 방금 받아쓴 내 말 한 줄도 오른쪽에 보여 줘서 제대로 알아들었는지 확인할 수 있게 한다.
 */
export function Captions({ captions, showHeard = false }: Props) {
  const aiLines = captions.filter((c) => c.speaker === 'ai').slice(-VISIBLE_COUNT);
  const heard = showHeard ? captions.filter((c) => c.speaker === 'user').at(-1) : undefined;
  return (
    <div className={styles.captions} aria-live="polite" aria-label={s.captions}>
      {heard ? (
        <p key={heard.id} className={`${styles.bubble} ${styles.heard}`}>
          <small>{s.heard}</small>
          {heard.text}
        </p>
      ) : null}
      {aiLines.map((c) => (
        <p key={c.id} className={styles.bubble}>
          {c.text}
        </p>
      ))}
    </div>
  );
}
