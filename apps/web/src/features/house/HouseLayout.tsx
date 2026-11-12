import { useState } from 'react';
import { NavLink, Outlet, useLocation, useOutletContext } from 'react-router-dom';

import styles from './HouseLayout.module.css';
import { houseStrings as s } from './strings';

import { HelpSheet } from '@/features/crisis';
import { Icon, type IconName } from '@/shared/ui';

type HouseContext = { openHelp: () => void };

const ROOMS: readonly { to: string; icon: IconName; label: string; match: readonly string[] }[] = [
  { to: '/', icon: 'sofa', label: s.tabs.living, match: [] },
  { to: '/fridge', icon: 'fridge', label: s.tabs.fridge, match: ['/fridge'] },
  {
    to: '/room',
    icon: 'bed',
    label: s.tabs.room,
    match: ['/room', '/memory', '/consent'],
  },
];

/**
 * V5 "하늘이네 집". 방마다 화면 하나(거실, 냉장고, 내 방)이고 아래 탭으로 오간다.
 * 도움 받기는 어느 방이든 오른쪽 위에 있고, 시트는 이 틀이 띄운다.
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
            <Icon name={room.icon} size={23} />
            <span>{room.label}</span>
          </NavLink>
        ))}
      </nav>
      {helpOpen ? <HelpSheet onClose={() => setHelpOpen(false)} /> : null}
    </div>
  );
}

/** 방 위쪽 머리: 어느 방인지, 지금 몇 시인지, 도움 받기. */
export function RoomHead({ title, sub, dot }: { title: string; sub: string; dot?: string }) {
  const { openHelp } = useOutletContext<HouseContext>();
  return (
    <div className={styles.head}>
      <h1 className={styles.place}>
        <b>{title}</b>
        <small>
          {dot ? (
            <span className={styles.dot} style={{ background: dot }} aria-hidden="true" />
          ) : null}
          {sub}
        </small>
      </h1>
      <button type="button" className={styles.help} onClick={openHelp}>
        <Icon name="lifebuoy" size={16} />
        {s.help}
      </button>
    </div>
  );
}
