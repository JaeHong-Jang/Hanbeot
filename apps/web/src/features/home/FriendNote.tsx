import styles from './FriendNote.module.css';
import { homeStrings as s } from './strings';

import type { Friend } from '@/shared/friend';
import { Icon } from '@/shared/ui';

type Props = { friend: Friend; other: Friend; onSwap: () => void };

/** 편지지에 테이프로 붙인 친구 사진 한 장과, 그 옆에 적은 친구 소개. */
export function FriendNote({ friend, other, onSwap }: Props) {
  return (
    <section className={styles.wrap} aria-label={s.friendLabel}>
      <div className={styles.polaroid}>
        <span className={styles.tape} />
        <img key={friend.id} src={friend.image} alt="" />
      </div>
      <div className={styles.note}>
        <p className={styles.name}>{friend.name}</p>
        <p className={styles.tagline}>{friend.tagline}</p>
        <p className={styles.status}>
          <span className={styles.dot} />
          {s.available}
        </p>
        <button type="button" className={styles.swap} onClick={onSwap}>
          <Icon name="swap" size={16} />
          {s.swapTo(other.name)}
        </button>
      </div>
    </section>
  );
}
