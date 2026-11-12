import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { Coach } from './Coach';
import { RoomHead } from './HouseLayout';
import styles from './LivingRoom.module.css';
import r from './room.module.css';
import { RoomTag } from './RoomTag';
import { Segmented } from './Segmented';
import { houseStrings as s } from './strings';

import { useConsents, useMemories } from '@/shared/api';
import livingEvening from '@/shared/assets/rooms/living-evening.jpg';
import livingMorning from '@/shared/assets/rooms/living-morning.jpg';
import livingNight from '@/shared/assets/rooms/living-night.jpg';
import { friendById } from '@/shared/friend';
import { useCallLog } from '@/shared/hooks/useCallLog';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { weekStats } from '@/shared/lib/callLog';
import { clockLabel, dayPart, type DayPart } from '@/shared/lib/dayPart';
import { CALL_MODES, greetingStrings as g, isCallMode } from '@/shared/strings/greeting';
import { Icon } from '@/shared/ui';

/** 시간대별 거실. 같은 방을 아침 햇빛, 저녁 노을, 밤 스탠드 불빛으로 그렸다. */
const ROOM_IMAGE: Record<DayPart, string> = {
  morning: livingMorning,
  evening: livingEvening,
  night: livingNight,
};
const DOT: Record<DayPart, string> = { morning: '#7fb2e5', evening: '#f0a06a', night: '#f5a524' };
const PART_ORDER: readonly DayPart[] = ['morning', 'evening', 'night'];
const MODE_OPTIONS = CALL_MODES.map((mode) => ({ value: mode, label: g.modes[mode].short }));

/**
 * V5 거실(홈). 위는 누를 수 있는 방, 아래는 앱 기본 조작(대화 방식, 큰 통화 버튼, 이번 주).
 * 소파 = 통화, 냉장고 = 편지 모음, 현관 = 친구가 남긴 쪽지, 창문 = 시간대 바꿔 보기.
 */
export function LivingRoom() {
  const navigate = useNavigate();
  const consents = useConsents();
  const memories = useMemories('approved');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const modePref = useLocalPref(PREF_KEYS.mode, 'listen');
  const { log } = useCallLog();
  const now = new Date();
  const [part, setPart] = useState<DayPart>(() => dayPart(now.getHours()));
  const [noteOpen, setNoteOpen] = useState(false);
  const [noteRead, setNoteRead] = useState(false);

  // 필수 동의 전에는 고지문과 동의 화면부터(P0-7, P0-12).
  if (consents.data && !consents.data.basic) return <Navigate to="/start" replace />;

  const friend = friendById(friendPref.value);
  const mode = isCallMode(modePref.value) ? modePref.value : 'listen';
  const lastMemory = memories.data?.find((m) => m.kind === 'stated');
  const opener = g.opener(now.getHours(), Boolean(lastMemory));
  const week = weekStats(log, now);
  const goCall = () => navigate('/call');
  const nextPart = () => {
    const next = PART_ORDER[(PART_ORDER.indexOf(part) + 1) % PART_ORDER.length] ?? 'night';
    setPart(next);
  };
  const isLive = part === dayPart(now.getHours());

  return (
    <main>
      <div className={`${r.scene} ${r.shade}`}>
        <img src={ROOM_IMAGE[part]} alt="" />
        <RoomHead
          title={s.livingTitle(friend.name)}
          sub={isLive ? clockLabel(now) : s.partLabel[part]}
          dot={DOT[part]}
        />
        <RoomTag
          x={11}
          y={31}
          align="start"
          icon="door"
          badge={noteRead ? undefined : 1}
          onClick={() => {
            setNoteOpen((open) => !open);
            setNoteRead(true);
          }}
        >
          {s.doorNote}
        </RoomTag>
        <RoomTag x={33} y={41} icon={part === 'morning' ? 'sun' : 'moon'} onClick={nextPart}>
          {s.window}
        </RoomTag>
        <RoomTag x={92} y={31} align="end" icon="fridge" to="/fridge">
          {s.fridgeCount(log.length)}
        </RoomTag>
        <RoomTag x={50} y={80} icon="sofa" main onClick={goCall}>
          {part === 'morning' ? s.windowCall : s.sofaCall}
        </RoomTag>

        {noteOpen ? (
          <div className={styles.note} role="note">
            <b>{s.noteTitle(friend.name)}</b>
            <p>{opener}</p>
            {lastMemory ? <p className={styles.memo}>{lastMemory.text}</p> : null}
            <button type="button" onClick={() => setNoteOpen(false)}>
              {s.noteClose}
            </button>
          </div>
        ) : (
          <p className={r.say} style={{ left: 10, top: '45%' }}>
            <small>{s.doing[part]}</small>
            {opener}
          </p>
        )}
      </div>

      <section className={r.panel}>
        <p className={r.panelTitle}>{s.modeTitle}</p>
        <Segmented
          label={s.modeLabel}
          options={MODE_OPTIONS}
          value={mode}
          onChange={modePref.set}
        />
        <button type="button" className={r.btn} onClick={goCall}>
          <Icon name="sofa" size={20} />
          {s.sitWith(friend.name)}
        </button>
        <Link to="/fridge" className={r.mini}>
          {s.week(friend.name, week.calls, week.minutes)}
          <Icon name="chevronRight" size={16} />
        </Link>
      </section>

      <Coach />
    </main>
  );
}
