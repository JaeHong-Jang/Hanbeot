import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import styles from './Fridge.module.css';
import { RoomHead } from './HouseLayout';
import r from './room.module.css';
import { houseStrings as s } from './strings';

import { useMemories, useSummary } from '@/shared/api';
import fridgeImage from '@/shared/assets/rooms/fridge.jpg';
import { friendById } from '@/shared/friend';
import { useCallLog } from '@/shared/hooks/useCallLog';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { weekStats, type CallLogEntry } from '@/shared/lib/callLog';

const DAY_MS = 86_400_000;

/** 냉장고 그림 속 사진 네 자리(그림 기준 %). 최근 편지 넷을 여기에 붙인다. */
type Slot = { left: number; top: number; width: number; tilt: number };
const PHOTO_SLOTS: readonly Slot[] = [
  { left: 27.8, top: 50, width: 18.7, tilt: -3 },
  { left: 56.6, top: 52, width: 19.8, tilt: 2.5 },
  { left: 27.8, top: 68.2, width: 18.2, tilt: 2 },
  { left: 62, top: 68.6, width: 18.5, tilt: -2.5 },
];

const slotStyle = ({ left, top, width, tilt }: Slot): CSSProperties => ({
  left: `${left}%`,
  top: `${top}%`,
  width: `${width}%`,
  transform: `rotate(${tilt}deg)`,
});

/** 냉장고에 붙은 편지 사진 한 장. 사진 아래 손글씨로 날짜, 누르면 편지 한 장을 펼친다. */
function LetterPhoto({ entry, slot, now }: { entry: CallLogEntry; slot: Slot; now: Date }) {
  const friend = friendById(entry.friendId);
  const ended = new Date(entry.endedAt);
  const isNew = now.getTime() - ended.getTime() < DAY_MS;
  return (
    <Link to={`/letters/${entry.sessionId}`} className={styles.photo} style={slotStyle(slot)}>
      <img src={friend.image} alt="" />
      <span>
        {ended.getMonth() + 1}/{ended.getDate()}
      </span>
      {isNew ? <em className={styles.new}>{s.justNow}</em> : null}
    </Link>
  );
}

/** 냉장고에 다 못 붙인 편지: 아래 목록 한 줄. */
function LetterRow({ entry }: { entry: CallLogEntry }) {
  const { data } = useSummary(entry.sessionId);
  const ended = new Date(entry.endedAt);
  return (
    <Link to={`/letters/${entry.sessionId}`} className={r.row}>
      <span className={styles.rowDate}>
        {ended.getMonth() + 1}/{ended.getDate()}
      </span>
      <span className={styles.rowText}>{data?.summary[0] ?? ''}</span>
    </Link>
  );
}

/**
 * V5 냉장고 = 편지 모음. 냉장고 문에 최근 편지 사진 넷, 달력에 이번 주 통화,
 * 노란 메모에 가장 최근 기억. 더 오래된 편지는 아래 목록으로.
 */
export function Fridge() {
  const { log } = useCallLog();
  const memories = useMemories('approved');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const friend = friendById(friendPref.value);
  const now = new Date();
  const week = weekStats(log, now);
  const thisMonth = log.filter((e) => {
    const d = new Date(e.endedAt);
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }).length;
  const lastMemory = memories.data?.find((m) => m.kind === 'stated');
  const pinned = log.slice(0, PHOTO_SLOTS.length);
  const rest = log.slice(PHOTO_SLOTS.length);

  return (
    <main>
      <div className={r.scene}>
        <img src={fridgeImage} alt="" />
        <RoomHead title={s.fridgeTitle} sub={s.fridgeSub(log.length)} />

        <div className={styles.chips}>
          <span className={styles.chipOn}>{s.all(log.length)}</span>
          <span>{s.thisMonth(thisMonth)}</span>
        </div>

        <Link to="/memory" className={styles.memo} aria-label={s.memoNote}>
          {lastMemory ? lastMemory.text : s.memoEmpty}
        </Link>

        <div className={styles.calendar}>
          <small>{s.calendarTitle}</small>
          <b>{s.calendarCalls(week.calls)}</b>
          <span>{s.calendarMinutes(week.minutes)}</span>
        </div>

        {pinned.map((entry, slotIndex) => {
          const slot = PHOTO_SLOTS[slotIndex];
          return slot ? (
            <LetterPhoto key={entry.sessionId} entry={entry} slot={slot} now={now} />
          ) : null;
        })}
      </div>

      <section className={styles.below}>
        {log.length === 0 ? <p className={styles.empty}>{s.fridgeEmpty(friend.name)}</p> : null}
        {rest.length > 0 ? (
          <>
            <h2 className={r.panelTitle}>{s.moreLetters}</h2>
            <div className={r.list}>
              {rest.map((entry) => (
                <LetterRow key={entry.sessionId} entry={entry} />
              ))}
            </div>
          </>
        ) : null}
      </section>
    </main>
  );
}
