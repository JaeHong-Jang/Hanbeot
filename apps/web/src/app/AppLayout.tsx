import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.css';
import { TabBar } from './TabBar';

/** 종이 바탕 + 스크롤 영역. tabs가 켜진 화면에는 아래 탭바가 붙는다. */
export function AppLayout({ tabs = false }: { tabs?: boolean }) {
  return (
    <div className={styles.screen}>
      <div className={`${styles.scroll} ${tabs ? styles.withTabs : ''}`}>
        <Outlet />
      </div>
      {tabs ? <TabBar /> : null}
    </div>
  );
}
