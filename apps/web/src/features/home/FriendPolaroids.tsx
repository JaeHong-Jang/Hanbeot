import styles from './FriendPolaroids.module.css';
import { homeStrings as s } from './strings';

import type { Friend } from '@/shared/friend';
import { Icon } from '@/shared/ui';

type Props = { friend: Friend; other: Friend; onCall: () => void; onSwap: () => void };

/** 테이프로 붙인 폴라로이드 두 장. 앞 사진은 전화 걸기, 뒤 사진은 친구 바꾸기. */
export function FriendPolaroids({ friend, other, onCall, onSwap }: Props) {
  return (
    <section className={styles.wrap}>
      <button
        type="button"
        className={`${styles.polaroid} ${styles.back}`}
        onClick={onSwap}
        aria-label={s.swapTo(other.name)}
      >
        <img src={other.image} alt="" />
        <span className={styles.caption}>{other.name}</span>
      </button>
      <button
        type="button"
        className={`${styles.polaroid} ${styles.front}`}
        onClick={onCall}
        aria-label={s.callFriend(friend.name)}
      >
        <span className={styles.tape} />
        <img key={friend.id} src={friend.image} alt="" />
        <span className={styles.caption}>
          <strong>{friend.name}</strong>
          <small>{friend.tagline}</small>
        </span>
      </button>
      <p className={styles.status}>
        <span className={styles.dot} />
        {s.available}
      </p>
      <p className={styles.hint}>
        <Icon name="swap" size={15} />
        {s.swapHint(other.name)}
      </p>
    </section>
  );
}
