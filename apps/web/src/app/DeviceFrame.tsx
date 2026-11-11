import type { ReactNode } from 'react';

import styles from './DeviceFrame.module.css';
import { FRAME, useFrameScale } from './useFrameScale';

/**
 * 넓은 화면에서는 폰 모양 프레임 안에, 실제 폰에서는 전체 화면으로 앱을 보여준다.
 * 프레임이 transform을 가지므로 안쪽의 position: fixed/absolute 요소는 프레임을 기준으로 놓인다.
 */
export function DeviceFrame({ children }: { children: ReactNode }) {
  const scale = useFrameScale();
  return (
    <div className={styles.stage}>
      <div
        className={styles.slot}
        style={{ width: FRAME.width * scale, height: FRAME.height * scale }}
      >
        <div className={styles.device} style={{ transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
