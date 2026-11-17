import { Link, useNavigate } from 'react-router-dom';

import { RoomHead } from './HouseLayout';
import styles from './MyPage.module.css';
import r from './room.module.css';
import { houseStrings as s } from './strings';

import { useDeletionRequest, useMemories } from '@/shared/api';
import { friendById } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Icon } from '@/shared/ui';

const NAME_MAX_LENGTH = 10;

/**
 * 마이페이지 = 나에 대한 설정. 부르는 이름, 친구가 기억하는 것, 개인정보와 동의,
 * 처음 이야기 다시 보기, 로그아웃, 데이터 삭제. 친구와 방 시간은 내 방에서 고른다.
 */
export function MyPage() {
  const navigate = useNavigate();
  const memories = useMemories('approved');
  const deletion = useDeletionRequest();
  const namePref = useLocalPref(PREF_KEYS.name, '');
  const userPref = useLocalPref(PREF_KEYS.user, '');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const friend = friendById(friendPref.value);

  const logout = () => {
    userPref.set('');
    navigate('/login', { replace: true });
  };

  return (
    <main className={styles.my}>
      <RoomHead title={s.myTitle} />
      <p className={styles.hello}>{s.myHello(namePref.value)}</p>

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
        <Link to="/memory" className={r.row}>
          {s.memoryRow(friend.name)}
          <small>{s.memoryCount(memories.data?.length ?? 0)}</small>
          <Icon name="chevronRight" size={16} />
        </Link>
        <Link to="/consent" className={r.row}>
          {s.consentRow}
          <Icon name="chevronRight" size={16} className={r.push} />
        </Link>
        <Link to="/intro" className={r.row}>
          {s.replayIntro}
          <Icon name="chevronRight" size={16} className={r.push} />
        </Link>
      </div>

      <div className={r.list}>
        <div className={r.row}>
          <button type="button" className={styles.plain} onClick={logout}>
            {s.logout}
          </button>
        </div>
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
    </main>
  );
}
