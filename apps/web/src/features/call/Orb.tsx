import styles from './Orb.module.css';

import type { Friend } from '@/shared/friend';
import type { Orb as OrbState } from '@/shared/voice';

type Props = { friend: Friend; state: OrbState; live: boolean; statusText: string };

const STATE_CLASS: Record<OrbState, string | undefined> = {
  listening: styles.listening,
  thinking: styles.thinking,
  speaking: styles.speaking,
};

/** 통화 화면의 오브 하나 + 상태 글자(설계서 3장). 친구 사진을 오브로 쓰고, 고리의 움직임으로 상태를 알린다. */
export function Orb({ friend, state, live, statusText }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={`${styles.orb} ${live ? STATE_CLASS[state] : ''}`}>
        <span className={styles.ring} aria-hidden="true" />
        <img src={friend.image} alt="" />
      </div>
      <p className={styles.name}>{friend.name}</p>
      <p className={styles.status} role="status">
        {statusText}
      </p>
    </div>
  );
}
