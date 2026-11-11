import { Navigate, useNavigate } from 'react-router-dom';

import { FriendNote } from './FriendNote';
import styles from './HomePage.module.css';
import { LastStory } from './LastStory';
import { ModeNote } from './ModeNote';
import { homeStrings as s } from './strings';

import type { CallMode } from '@/entities';
import { useConsents, useMemories } from '@/shared/api';
import { friendById, otherFriend } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Icon, Logo } from '@/shared/ui';

const isCallMode = (value: string): value is CallMode =>
  value === 'listen' || value === 'organize' || value === 'advise';

/**
 * 홈. 한 장의 편지지처럼 위에서 아래로 읽힌다:
 * 인사 → 오늘 이야기할 친구 → 어떻게 들어줄지 → 전화 걸기 → 지난번 이야기.
 * 전화 버튼은 흐름 안에 두어 첫 화면에서 스크롤 없이 닿고, 다른 내용을 가리지 않는다.
 */
export function HomePage() {
  const navigate = useNavigate();
  const consents = useConsents();
  const memories = useMemories('approved');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const modePref = useLocalPref(PREF_KEYS.mode, 'listen');
  const namePref = useLocalPref(PREF_KEYS.name, '');

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
        <Logo height={40} className={styles.logo} />
        <span className={styles.date}>{s.date(now)}</span>
      </header>

      <section className={styles.greeting}>
        <h1>
          {namePref.value ? (
            <span className={styles.name}>{s.callName(namePref.value)}</span>
          ) : null}
          <span className={styles.hello}>
            {s.greetingByHour(now.getHours())}
            <svg
              className={styles.underline}
              viewBox="0 0 180 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M3 9C32 4 58 11 90 7s62-3 86 1" />
            </svg>
          </span>
        </h1>
        <p className={styles.sub}>{s.sub}</p>
      </section>

      <FriendNote friend={friend} other={other} onSwap={() => friendPref.set(other.id)} />

      <ModeNote mode={mode} onChange={modePref.set} />

      <button type="button" className={styles.call} onClick={goCall}>
        <span className={styles.callIcon}>
          <Icon name="phone" size={22} />
        </span>
        <span className={styles.callText}>
          <strong>{s.callFriend(friend.name)}</strong>
          <small>{s.startWith(s.modes[mode].label)}</small>
        </span>
      </button>

      <LastStory memory={lastMemory} onContinue={goCall} />
    </main>
  );
}
