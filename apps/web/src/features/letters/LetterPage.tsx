import { Link, useParams } from 'react-router-dom';

import { Letter } from './Letter';
import styles from './LetterPage.module.css';
import { lettersStrings as s } from './strings';

import { useSummary } from '@/shared/api';
import { friendById } from '@/shared/friend';
import { useCallLog } from '@/shared/hooks/useCallLog';
import { PREF_KEYS, useLocalPref } from '@/shared/hooks/useLocalPref';
import { Icon } from '@/shared/ui';

/** 지난 편지 한 장 보기. 날짜와 통화 시간은 이 기기의 통화 기록, 본문은 서버 요약에서 온다. */
export function LetterPage() {
  const { sessionId = '' } = useParams();
  const { data, isLoading, isError } = useSummary(sessionId);
  const { log } = useCallLog();
  const namePref = useLocalPref(PREF_KEYS.name, '');
  const entry = log.find((e) => e.sessionId === sessionId);
  const friend = friendById(entry?.friendId ?? 'haneul');

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.back}>
        <Icon name="chevronDown" size={20} className={styles.backIcon} />
        {s.back}
      </Link>
      {entry ? (
        <header className={styles.header}>
          <h1>{s.pageTitle(new Date(entry.endedAt))}</h1>
          <p>{s.callLength(Math.round(entry.durationSec / 60))}</p>
        </header>
      ) : null}
      {isLoading ? <p className={styles.note}>{s.loadingLine}</p> : null}
      {isError ? <p className={styles.note}>{s.notFound}</p> : null}
      {data ? (
        <Letter
          to={namePref.value}
          lines={data.summary}
          nextStep={data.next_step}
          friendName={friend.name}
        />
      ) : null}
    </main>
  );
}
