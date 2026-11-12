import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './room.module.css';

import { Icon, type IconName } from '@/shared/ui';

/** 방 그림 위의 한 점(그림 너비·높이에 대한 %). 이름표 꼬리가 이 점을 가리킨다. */
export type ScenePoint = { x: number; y: number; align?: 'start' | 'center' | 'end' };

type Props = ScenePoint & {
  icon: IconName;
  children: ReactNode;
  badge?: number;
  main?: boolean;
} & ({ to: string; onClick?: never } | { onClick: () => void; to?: never });

/** 방 안 물건에 붙은 이름표. 누르면 그 물건이 하는 일(통화, 냉장고, 쪽지…)로 간다. */
export function RoomTag({
  x,
  y,
  align = 'center',
  icon,
  children,
  badge,
  main = false,
  to,
  onClick,
}: Props) {
  const style = { '--x': `${x}%`, '--y': `${y}%` } as CSSProperties;
  const className = `${styles.tag} ${styles[align]} ${main ? styles.main : ''}`;
  const inner = (
    <>
      <Icon name={icon} size={15} />
      {children}
      {badge ? <em className={styles.badge}>{badge}</em> : null}
    </>
  );
  return to ? (
    <Link to={to} className={className} style={style}>
      {inner}
    </Link>
  ) : (
    <button type="button" className={className} style={style} onClick={onClick}>
      {inner}
    </button>
  );
}
