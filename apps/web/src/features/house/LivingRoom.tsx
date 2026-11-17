import { Navigate, useNavigate } from 'react-router-dom';

import { Coach } from './Coach';
import { RoomHead } from './HouseLayout';
import styles from './LivingRoom.module.css';
import { ModeSheet } from './ModeSheet';
import r from './room.module.css';
import { houseStrings as s } from './strings';
import { TalkBox } from './TalkBox';

import { useConsents, useMemories } from '@/shared/api';
import { friendById, type FriendId } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { resolveDayPart } from '@/shared/lib/dayPart';
import { greetingStrings as g, isCallMode } from '@/shared/strings/greeting';

/** 방 그림을 화면 높이에 맞춰 자를 때 친구가 가운데 오도록 하는 가로 기준점(%). */
const FOCUS_X: Record<FriendId, number> = { haneul: 50, doyun: 60, jiwoo: 47, seoyun: 50 };

/**
 * V5 홈. 방 그림이 화면 전체를 채우고, 그 위에 머리(누구네 집, 도움 받기),
 * 아래에 친구의 말(대화 상자)과 밀어서 여닫는 판(대화 방식, 통화 버튼)이 놓인다.
 * 친구와 방 시간은 마이페이지에서 고른다.
 */
export function LivingRoom() {
  const navigate = useNavigate();
  const consents = useConsents();
  const memories = useMemories('approved');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const modePref = useLocalPref(PREF_KEYS.mode, 'listen');
  const partPref = useLocalPref(PREF_KEYS.dayPart, 'auto');

  // 필수 동의 전에는 고지문과 동의 화면부터(P0-7, P0-12).
  if (consents.data && !consents.data.basic) return <Navigate to="/start" replace />;

  const now = new Date();
  const friend = friendById(friendPref.value);
  const part = resolveDayPart(partPref.value, now.getHours());
  const mode = isCallMode(modePref.value) ? modePref.value : 'listen';
  const hasMemory = Boolean(memories.data?.some((m) => m.kind === 'stated'));

  return (
    <main className={styles.home}>
      <div className={`${r.scene} ${r.shade} ${styles.scene}`}>
        {/* 친구마다 같은 방을 아침 햇빛, 저녁 노을, 밤 스탠드 불빛으로 그렸다 */}
        <img
          src={friend.room[part]}
          alt={s.places[friend.id].alt}
          style={{ objectPosition: `${FOCUS_X[friend.id]}% 50%` }}
        />
        <RoomHead title={s.homeTitle(friend.name)} />
      </div>

      <ModeSheet
        mode={mode}
        onModeChange={modePref.set}
        callLabel={s.sitWith(friend.name)}
        onCall={() => navigate('/call')}
        above={
          <TalkBox
            key={friend.id}
            name={friend.name}
            doing={s.doing[friend.id][part]}
            lines={[g.opener(now.getHours(), hasMemory), s.talkMode(g.modes[mode].short)]}
          />
        }
      />

      <Coach />
    </main>
  );
}
