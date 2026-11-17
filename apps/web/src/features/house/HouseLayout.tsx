import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useOutletContext } from 'react-router-dom';

import styles from './HouseLayout.module.css';
import { houseStrings as s } from './strings';

import { HelpSheet } from '@/features/crisis';
import { Icon, type IconName } from '@/shared/ui';

type HouseContext = { openHelp: () => void };

const ROOMS: readonly { to: string; icon: IconName; label: string; match: readonly string[] }[] = [
  { to: '/', icon: 'sofa', label: s.tabs.living, match: [] },
  { to: '/fridge', icon: 'fridge', label: s.tabs.fridge, match: ['/fridge'] },
  { to: '/room', icon: 'bed', label: s.tabs.room, match: ['/room'] },
  { to: '/my', icon: 'user', label: s.tabs.my, match: ['/my', '/memory', '/consent'] },
];

/**
 * V5 "하늘이네 집". 아래 탭은 거실, 냉장고, 내 방, 마이페이지 넷이다.
 * 내 방은 친구와 방 시간, 마이페이지는 이름·기억·동의·삭제를 맡는다.
 * 도움 받기는 어느 화면이든 오른쪽 위에 있고, 시트는 이 틀이 띄운다.
 */
export function HouseLayout() {
  const { pathname } = useLocation();
  const [helpOpen, setHelpOpen] = useState(false);
  const isActive = (room: (typeof ROOMS)[number]) =>
    room.match.length === 0 ? pathname === room.to : room.match.some((m) => pathname.startsWith(m));

  return (
    <div className={styles.house}>
      <div className={styles.view}>
        <Outlet context={{ openHelp: () => setHelpOpen(true) } satisfies HouseContext} />
      </div>
      <nav className={styles.tabs} aria-label={s.navLabel}>
        {ROOMS.map((room) => (
          <NavLink
            key={room.to}
            to={room.to}
            className={`${styles.tab} ${isActive(room) ? styles.on : ''}`}
            aria-current={isActive(room) ? 'page' : undefined}
          >
            <Icon name={room.icon} size={22} />
            <span>{room.label}</span>
          </NavLink>
        ))}
      </nav>
      {helpOpen ? <HelpSheet onClose={() => setHelpOpen(false)} /> : null}
    </div>
  );
}

type RoomHeadProps = { title: string; sub?: string; backTo?: string; backLabel?: string };

/** 화면 위쪽 머리: 상태 표시줄 바로 아래에 왼쪽은 이름, 오른쪽은 도움 받기. */
export function RoomHead({ title, sub, backTo, backLabel }: RoomHeadProps) {
  const { openHelp } = useOutletContext<HouseContext>();
  return (
    <div className={styles.head}>
      <div className={styles.lead}>
        {backTo ? (
          <Link to={backTo} className={styles.back} aria-label={backLabel}>
            <Icon name="chevronRight" size={18} />
          </Link>
        ) : null}
        <h1 className={styles.place}>
          <b>{title}</b>
          {sub ? <small>{sub}</small> : null}
        </h1>
      </div>
      <button type="button" className={styles.help} onClick={openHelp}>
        <Icon name="lifebuoy" size={16} />
        {s.help}
      </button>
    </div>
  );
}
