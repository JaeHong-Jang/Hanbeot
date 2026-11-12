import styles from './Captions.module.css';
import { callStrings as s } from './strings';

import type { Caption } from '@/shared/voice';

const VISIBLE_COUNT = 2; // 영상통화처럼 한벗의 최근 말 두 줄만. 전체는 통화 뒤 요약에서 본다.

/** 한벗이 한 말만 사진 위 말풍선으로 띄운다. 내 말은 화면에 다시 쓰지 않는다. */
export function Captions({ captions }: { captions: readonly Caption[] }) {
  const aiLines = captions.filter((c) => c.speaker === 'ai').slice(-VISIBLE_COUNT);
  return (
    <div className={styles.captions} aria-live="polite" aria-label={s.captions}>
      {aiLines.map((c) => (
        <p key={c.id} className={styles.bubble}>
          {c.text}
        </p>
      ))}
    </div>
  );
}
