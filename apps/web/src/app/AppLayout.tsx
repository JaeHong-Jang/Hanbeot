import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.css';

/** 종이 바탕 + 스크롤 영역. 동의, 통화 후 요약, 편지 한 장(V5)이 쓴다. */
export function AppLayout() {
  return (
    <div className={styles.screen}>
      <div className={styles.scroll}>
        <Outlet />
      </div>
    </div>
  );
}
