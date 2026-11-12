import { Link } from 'react-router-dom';

import { RoomHead } from './HouseLayout';
import r from './room.module.css';
import { RoomTag } from './RoomTag';
import { Segmented } from './Segmented';
import { houseStrings as s } from './strings';
import { useToast } from './useToast';

import { useDeletionRequest, useMemories } from '@/shared/api';
import bedroomImage from '@/shared/assets/rooms/bedroom.jpg';
import { FRIENDS, friendById, otherFriend, type FriendId } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Icon } from '@/shared/ui';

const NAME_MAX_LENGTH = 10;
const FRIEND_OPTIONS = FRIENDS.map((friend) => ({ value: friend.id, label: friend.name }));

/**
 * 내 방 = 설정. 옷장은 친구 바꾸기, 탁상시계는 쪽지 알림, 서랍은 앱 잠금.
 * 아래 목록에 같은 설정과 기억, 동의, 데이터 삭제가 다 있다.
 */
export function MyRoom() {
  const memories = useMemories('approved');
  const deletion = useDeletionRequest();
  const namePref = useLocalPref(PREF_KEYS.name, '');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const toast = useToast();
  const friend = friendById(friendPref.value);

  const swapFriend = () => {
    const other = otherFriend(friend.id);
    friendPref.set(other.id);
    toast.show(s.swapped(other.name));
  };

  return (
    <main>
      <div className={`${r.scene} ${r.shade}`} style={{ height: 420 }}>
        <img src={bedroomImage} alt="" />
        <RoomHead title={s.roomTitle} sub={s.roomSub} />
        <RoomTag x={95} y={36} align="end" icon="swap" onClick={swapFriend}>
          {s.wardrobe}
        </RoomTag>
        <RoomTag
          x={9}
          y={60}
          align="start"
          icon="clock"
          onClick={() => toast.show(s.soon(s.reminder))}
        >
          {s.clock}
        </RoomTag>
        <RoomTag x={11} y={71} align="start" icon="lock" onClick={() => toast.show(s.soon(s.lock))}>
          {s.drawer}
        </RoomTag>
      </div>

      <section className={r.panel}>
        <div className={r.list}>
          <label className={r.row}>
            {s.nameRow}
            <input
              type="text"
              autoComplete="nickname"
              maxLength={NAME_MAX_LENGTH}
              placeholder={s.namePlaceholder}
              value={namePref.value}
              onChange={(e) => namePref.set(e.target.value.trim())}
            />
          </label>
          <div className={`${r.row} ${r.stack}`}>
            {s.friendRow}
            <Segmented<FriendId>
              label={s.friendRow}
              options={FRIEND_OPTIONS}
              value={friend.id}
              onChange={friendPref.set}
            />
          </div>
          <Link to="/memory" className={r.row}>
            {s.memoryRow(friend.name)}
            <small>{s.memoryCount(memories.data?.length ?? 0)}</small>
            <Icon name="chevronRight" size={16} />
          </Link>
          <Link to="/consent" className={r.row}>
            {s.consentRow}
            <Icon name="chevronRight" size={16} className={r.push} />
          </Link>
          <div className={r.row}>
            <button
              type="button"
              className={r.danger}
              disabled={deletion.isPending}
              onClick={() => deletion.mutate()}
            >
              {s.deletion}
            </button>
          </div>
        </div>
        {deletion.data ? (
          <p role="status" className={r.panelTitle}>
            {s.deletionAccepted(deletion.data.eta_hours)}
          </p>
        ) : null}
      </section>

      {toast.text ? (
        <p role="status" className={r.toast}>
          {toast.text}
        </p>
      ) : null}
    </main>
  );
}
