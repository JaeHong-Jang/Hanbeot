import { useEffect, useRef } from 'react';

import styles from './HelpSheet.module.css';
import { crisisStrings as s } from './strings';

import { DISCLOSURE_AI_FRIEND, DISCLOSURE_NO_LIVE_CONTACT } from '@/shared/strings/disclosure';
import { Icon } from '@/shared/ui';

/** 지금 바로 연락할 수 있는 곳. 번호는 공식 안내 기준(설계서 P0-6). */
const LINES: readonly { name: string; number: string; desc: string }[] = [
  { name: s.lines.suicide.name, number: '109', desc: s.lines.suicide.desc },
  { name: s.lines.mental.name, number: '1577-0199', desc: s.lines.mental.desc },
  { name: s.lines.youth.name, number: '1388', desc: s.lines.youth.desc },
  { name: s.lines.emergency.name, number: '119', desc: s.lines.emergency.desc },
];

type Props = { onClose: () => void };

/** 홈 어디서든 한 번에 여는 도움 받기 시트. 바깥을 누르거나 Esc로 닫는다. */
export function HelpSheet({ onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.head}>
          <h2 id="help-title">{s.title}</h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label={s.close}
            onClick={onClose}
          >
            <Icon name="x" size={20} />
          </button>
        </div>
        <p className={styles.lead}>{s.lead}</p>
        <ul className={styles.list}>
          {LINES.map((line) => (
            <li key={line.number}>
              <a className={styles.line} href={`tel:${line.number.replace(/-/g, '')}`}>
                <span className={styles.text}>
                  <strong>{line.name}</strong>
                  <span>{line.desc}</span>
                </span>
                <span className={styles.number}>
                  <Icon name="phone" size={16} />
                  {line.number}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.note}>
          {DISCLOSURE_AI_FRIEND} {DISCLOSURE_NO_LIVE_CONTACT}
        </p>
      </div>
    </div>
  );
}
