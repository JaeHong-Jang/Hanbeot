import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { FriendNote } from './FriendNote';
import styles from './HomePage.module.css';
import { ModeNote } from './ModeNote';
import { homeStrings as s } from './strings';
import { WeekNote } from './WeekNote';

import type { CallMode } from '@/entities';
import { HelpSheet } from '@/features/crisis';
import { LetterStrip } from '@/features/letters';
import { useConsents, useMemories } from '@/shared/api';
import { friendById, otherFriend } from '@/shared/friend';
import { useCallLog } from '@/shared/hooks/useCallLog';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { weekStats } from '@/shared/lib/callLog';
import { Button, Icon, Logo } from '@/shared/ui';

const isCallMode = (value: string): value is CallMode =>
  value === 'listen' || value === 'organize' || value === 'advise';

/**
 * 홈. 위에서 아래로:
 * 로고·도움 받기 → 인사 → 오늘의 친구 카드(먼저 건네는 한마디, 대화 방식, 전화 걸기) → 최근 편지 → 이번 주.
 * 전화 걸기는 친구 카드 안에 두어 첫 화면에서 스크롤 없이 닿는다. 도움 받기는 늘 오른쪽 위(P0-6).
 */
export function HomePage() {
  const navigate = useNavigate();
  const consents = useConsents();
  const memories = useMemories('approved');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const modePref = useLocalPref(PREF_KEYS.mode, 'listen');
  const namePref = useLocalPref(PREF_KEYS.name, '');
  const { log } = useCallLog();
  const [helpOpen, setHelpOpen] = useState(false);

  // 필수 동의 전에는 고지문과 동의 화면부터 보여준다(P0-7, P0-12).
  if (consents.data && !consents.data.basic) return <Navigate to="/start" replace />;

  const friend = friendById(friendPref.value);
  const other = otherFriend(friend.id);
  const mode: CallMode = isCallMode(modePref.value) ? modePref.value : 'listen';
  const lastMemory = memories.data?.find((m) => m.kind === 'stated');
  const now = new Date();
  const goCall = () => navigate('/call');

  return (
    <main className={styles.home}>
      <header className={styles.top}>
        <Logo height={30} className={styles.logo} />
        <button type="button" className={styles.help} onClick={() => setHelpOpen(true)}>
          <Icon name="lifebuoy" size={17} />
          {s.help}
        </button>
      </header>

      <section className={styles.greeting}>
        <p className={styles.date}>{s.date(now)}</p>
        <h1>
          {namePref.value ? (
            <span className={styles.name}>{s.callName(namePref.value)}</span>
          ) : null}
          {s.greetingByHour(now.getHours())}
        </h1>
      </section>

      <section className={styles.card} aria-label={s.friendLabel}>
        <FriendNote
          friend={friend}
          other={other}
          opener={s.opener(now.getHours(), Boolean(lastMemory))}
          lastMemory={lastMemory?.text}
          today={now}
          onSwap={() => friendPref.set(other.id)}
        />
        <ModeNote mode={mode} onChange={modePref.set} />
        <Button variant="primary" block onClick={goCall} className={styles.call}>
          <Icon name="phone" size={20} />
          {s.callFriend(friend.name)}
        </Button>
      </section>

      <LetterStrip log={log} friendName={friend.name} />

      <WeekNote stats={weekStats(log, now)} />

      {helpOpen ? <HelpSheet onClose={() => setHelpOpen(false)} /> : null}
    </main>
  );
}
