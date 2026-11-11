import { NavLink } from 'react-router-dom';

import { appStrings as s } from './strings';
import styles from './TabBar.module.css';

import { Icon, type IconName } from '@/shared/ui';

const TABS: readonly { to: string; icon: IconName; label: string }[] = [
  { to: '/', icon: 'home', label: s.tabs.home },
  { to: '/memory', icon: 'bookmark', label: s.tabs.memory },
  { to: '/settings', icon: 'settings', label: s.tabs.settings },
];

export function TabBar() {
  return (
    <nav className={styles.bar} aria-label={s.navLabel}>
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
        >
          <Icon name={tab.icon} size={23} />
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
