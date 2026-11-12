import styles from './CallControls.module.css';
import { callStrings as s } from './strings';

import { Icon, type IconName } from '@/shared/ui';

type Props = {
  muted: boolean;
  speakerOff: boolean;
  modeOpen: boolean;
  memoryOpen: boolean;
  memorySheetId: string;
  onToggleMute: () => void;
  onToggleSpeaker: () => void;
  onToggleMode: () => void;
  onToggleMemory: () => void;
  onHangUp: () => void;
};

type Control = {
  icon: IconName;
  /** 스크린리더가 읽는 이름 */
  name: string;
  /** 버튼 아래에 보이는 짧은 글자 */
  caption: string;
  pressed?: boolean;
  expanded?: boolean;
  controls?: string;
  danger?: boolean;
  onClick: () => void;
};

/** 마이크 · 스피커 · 대화 모드 · 기억 · 종료 (영상통화 시안 순서). */
export function CallControls(p: Props) {
  const controls: readonly Control[] = [
    {
      icon: p.muted ? 'micOff' : 'mic',
      name: p.muted ? s.muteOff : s.muteOn,
      caption: s.mute,
      pressed: p.muted,
      onClick: p.onToggleMute,
    },
    {
      icon: p.speakerOff ? 'speakerOff' : 'speaker',
      name: p.speakerOff ? s.speakerOff : s.speakerOn,
      caption: s.speaker,
      pressed: p.speakerOff,
      onClick: p.onToggleSpeaker,
    },
    {
      icon: 'chat',
      name: s.modeButton,
      caption: s.modeButton,
      expanded: p.modeOpen,
      onClick: p.onToggleMode,
    },
    {
      icon: 'heart',
      name: s.memoryOpen,
      caption: s.memory,
      expanded: p.memoryOpen,
      controls: p.memoryOpen ? p.memorySheetId : undefined,
      onClick: p.onToggleMemory,
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
          aria-expanded={c.expanded}
          aria-controls={c.controls}
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
