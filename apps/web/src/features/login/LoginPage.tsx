import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './LoginPage.module.css';
import { NAME_MAX_LENGTH, OPEN_MS, loginStrings as s } from './strings';

import { useConsents } from '@/shared/api';
import livingNight from '@/shared/assets/intro/home.jpg';
import { friendById } from '@/shared/friend';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';

/**
 * 로그인(지금은 부를 이름만). 입력 폼 대신 현관문 틈으로 친구가 묻고 내가 말풍선으로 답한다.
 * 이름을 말하면 친구가 "들어와"라고 답하고 문이 열리며, 필수 동의가 없으면 동의 화면으로, 있으면 거실로 간다.
 * TODO: 계정 API가 생기면 간편 로그인을 실제 OAuth로 바꾼다.
 */
export function LoginPage() {
  const navigate = useNavigate();
  const user = useLocalPref(PREF_KEYS.user, '');
  const namePref = useLocalPref(PREF_KEYS.name, '');
  const friendPref = useLocalPref(PREF_KEYS.friend, 'haneul');
  const consents = useConsents();
  const friend = friendById(friendPref.value);
  const [name, setName] = useState(namePref.value);
  const [answered, setAnswered] = useState('');
  const timer = useRef<number>();
  const trimmed = name.trim();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const answer = (event: FormEvent) => {
    event.preventDefault();
    if (!trimmed || answered) return;
    user.set(trimmed);
    namePref.set(trimmed);
    setAnswered(trimmed);
    const consented = consents.data?.basic ?? false;
    timer.current = window.setTimeout(
      () => navigate(consented ? '/' : '/start', { replace: true }),
      OPEN_MS,
    );
  };

  return (
    <main className={`${styles.page} ${answered ? styles.opening : ''}`}>
      <img className={styles.room} src={livingNight} alt="" />
      <span className={styles.doorLeft} aria-hidden="true" />
      <span className={styles.doorRight} aria-hidden="true" />
      <span className={styles.gapLight} aria-hidden="true" />

      <div className={styles.talk}>
        <p className={styles.ask}>
          <small>{s.from(friend.name)}</small>
          {s.ask}
        </p>

        {answered ? (
          <>
            <p className={styles.me}>{answered}</p>
            <p className={`${styles.ask} ${styles.open}`} role="status">
              {s.opening(friend.name, answered)}
            </p>
          </>
        ) : (
          <form className={styles.me} onSubmit={answer}>
            <input
              type="text"
              autoComplete="nickname"
              maxLength={NAME_MAX_LENGTH}
              placeholder={s.placeholder}
              aria-label={s.placeholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <button type="submit" disabled={!trimmed}>
              {s.reply}
            </button>
          </form>
        )}
      </div>

      <p className={styles.note}>
        {s.note}
        <br />
        {s.social}
      </p>
    </main>
  );
}
