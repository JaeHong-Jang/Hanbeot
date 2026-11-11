import styles from './CallControls.module.css';
import { callStrings as s } from './strings';

import { Icon, type IconName } from '@/shared/ui';

type Props = {
  muted: boolean;
  held: boolean;
  canBargeIn: boolean;
  onBargeIn: () => void;
  onToggleHold: () => void;
  onToggleMute: () => void;
  onHangUp: () => void;
};

type Control = {
  icon: IconName;
  /** 스크린리더가 읽는 이름 */
  name: string;
  /** 버튼 아래에 보이는 짧은 글자 */
  caption: string;
  pressed?: boolean;
  disabled?: boolean;
  danger?: boolean;
  onClick: () => void;
};

/** 끊기 · 보류 · 음소거 · 종료. 보류(마이크+AI 발화 정지)와 음소거(마이크만)는 따로 둔다(설계서 3장). */
export function CallControls(p: Props) {
  const controls: readonly Control[] = [
    {
      icon: 'hand',
      name: s.bargeIn,
      caption: s.bargeInShort,
      disabled: !p.canBargeIn,
      onClick: p.onBargeIn,
    },
    {
      icon: p.held ? 'play' : 'pause',
      name: p.held ? s.resume : s.hold,
      caption: s.hold,
      pressed: p.held,
      onClick: p.onToggleHold,
    },
    {
      icon: p.muted ? 'micOff' : 'mic',
      name: p.muted ? s.unmute : s.mute,
      caption: s.mute,
      pressed: p.muted,
      onClick: p.onToggleMute,
    },
    { icon: 'phone', name: s.hangUp, caption: s.hangUp, danger: true, onClick: p.onHangUp },
  ];
  return (
    <div className={styles.controls} role="group" aria-label={s.controlsLabel}>
      {controls.map((c) => (
        <button
          key={c.caption}
          type="button"
          className={`${styles.control} ${c.danger ? styles.danger : ''}`}
          aria-label={c.name}
          aria-pressed={c.pressed}
          disabled={c.disabled}
          onClick={c.onClick}
        >
          <span className={styles.circle}>
            <Icon name={c.icon} size={24} />
          </span>
          <span className={styles.caption}>{c.caption}</span>
        </button>
      ))}
    </div>
  );
}
