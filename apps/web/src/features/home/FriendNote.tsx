import styles from './FriendNote.module.css';
import { homeStrings as s } from './strings';

import type { Friend } from '@/shared/friend';
import { Icon } from '@/shared/ui';

type Props = {
  friend: Friend;
  other: Friend;
  /** 친구가 먼저 건네는 한마디(손글씨) */
  opener: string;
  /** 가장 최근에 저장한 "내가 말한 것" */
  lastMemory?: string;
  /** 소인에 찍을 날짜 */
  today: Date;
  onSwap: () => void;
};

/**
 * 친구 카드 윗부분: 하늘이가 보낸 짧은 편지.
 * 우표 자리에 친구 사진, 오늘 날짜 소인, 손글씨 첫마디, 지난번 이야기 한 줄.
 */
export function FriendNote({ friend, other, opener, lastMemory, today, onSwap }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.from}>
          <span className={styles.fromLabel}>{s.fromLabel}</span>
          <span className={styles.name}>{friend.name}</span>
          <span className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {s.available}
          </span>
          <button type="button" className={styles.swap} onClick={onSwap}>
            <Icon name="swap" size={14} />
            {s.swapTo(other.name)}
          </button>
        </div>
        <div className={styles.postage}>
          <span className={styles.postmark} aria-hidden="true">
            <b>{s.postmark(today)}</b>
            <small>한벗</small>
          </span>
          <span className={styles.stamp}>
            <img key={friend.id} src={friend.image} alt="" />
          </span>
        </div>
      </div>
      <p className={styles.opener}>{opener}</p>
      {lastMemory ? (
        <p className={styles.memory}>
          <span className={styles.memoryLabel}>{s.lastLabel}</span>
          <span>{lastMemory}</span>
        </p>
      ) : null}
    </div>
  );
}
