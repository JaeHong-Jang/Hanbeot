import { useEffect, useState } from 'react';

/** iPhone 17 Pro 화면 크기(pt). 넓은 화면에서는 이 크기의 폰 프레임 안에 앱을 보여준다. */
export const FRAME = { width: 402, height: 874, minViewport: 540 } as const;

function computeScale(): number {
  if (window.innerWidth < FRAME.minViewport) return 1;
  const margin = 48;
  return Math.min(
    1,
    (window.innerHeight - margin) / FRAME.height,
    (window.innerWidth - margin) / FRAME.width,
  );
}

/** 창 높이에 맞춰 폰 프레임을 줄이는 배율. 좁은 화면(실제 폰)에서는 1. */
export function useFrameScale(): number {
  const [scale, setScale] = useState(computeScale);
  useEffect(() => {
    const onResize = () => setScale(computeScale());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return scale;
}
