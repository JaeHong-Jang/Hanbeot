import { RoomHead } from './HouseLayout';
import styles from './MyRoom.module.css';
import r from './room.module.css';
import { RoomTag } from './RoomTag';
import { Segmented } from './Segmented';
import { houseStrings as s } from './strings';
import { useToast } from './useToast';

import bedroomImage from '@/shared/assets/rooms/bedroom.jpg';
import { FRIENDS, friendById, otherFriend, type FriendId } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { DAY_PARTS, dayPart, isDayPart } from '@/shared/lib/dayPart';
import { Toggle } from '@/shared/ui';

const FRIEND_OPTIONS = FRIENDS.map((friend) => ({ value: friend.id, label: friend.name }));
const PART_OPTIONS = DAY_PARTS.map((part) => ({ value: part, label: s.partLabel[part] }));

/**
 * 내 방 = 집 꾸미기 설정. 그림 속 옷장은 친구 바꾸기, 탁상시계는 쪽지 알림, 서랍은 앱 잠금.
 * 아래 목록에서 이야기할 친구와 방 시간을 고른다. 이름, 기억, 동의, 삭제는 마이페이지에 있다.
 */
export function MyRoom() {
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const partPref = useLocalPref(PREF_KEYS.dayPart, 'auto');
  const toast = useToast();
  const friend = friendById(friendPref.value);
  const fixedPart = isDayPart(partPref.value) ? partPref.value : null;

  const swapFriend = () => {
    const other = otherFriend(friend.id);
    friendPref.set(other.id);
    toast.show(s.swapped(other.name));
  };

  return (
    <main className={styles.room}>
      <div className={`${r.scene} ${r.shade} ${styles.scene}`}>
        {/* 그림과 이름표는 같은 무대에 둔다: 화면 높이에 맞춰 그림이 커져도 자리가 어긋나지 않는다 */}
        <div className={styles.stage}>
          <img src={bedroomImage} alt="" />
          <RoomTag x={85} y={30} align="end" icon="swap" onClick={swapFriend}>
            {s.wardrobe}
          </RoomTag>
          <RoomTag
            x={15}
            y={50}
            align="start"
            icon="clock"
            onClick={() => toast.show(s.soon(s.reminder))}
          >
            {s.clock}
          </RoomTag>
          <RoomTag
            x={16}
            y={59}
            align="start"
            icon="lock"
            onClick={() => toast.show(s.soon(s.lock))}
          >
            {s.drawer}
          </RoomTag>
        </div>
        <RoomHead title={s.roomTitle} />
      </div>

      <section className={`${r.panel} ${styles.panel}`}>
        <div className={r.list}>
          <div className={`${r.row} ${r.stack}`}>
            {s.friendRow}
            <Segmented<FriendId>
              label={s.friendRow}
              options={FRIEND_OPTIONS}
              value={friend.id}
              onChange={friendPref.set}
            />
          </div>
          <div className={`${r.row} ${r.stack}`}>
            {s.timeRow}
            <Toggle
              label={s.timeAuto}
              dense
              checked={fixedPart === null}
              onChange={(auto) => partPref.set(auto ? 'auto' : dayPart(new Date().getHours()))}
            />
            {fixedPart ? (
              <Segmented
                label={s.timeLabel}
                options={PART_OPTIONS}
                value={fixedPart}
                onChange={partPref.set}
              />
            ) : null}
          </div>
        </div>
      </section>

      {toast.text ? (
        <p role="status" className={r.toast}>
          {toast.text}
        </p>
      ) : null}
    </main>
  );
}
