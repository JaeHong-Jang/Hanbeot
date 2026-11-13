import { useEffect, useState } from 'react';

import styles from './TalkingPortrait.module.css';

import type { Friend } from '@/shared/friend';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';

type Mouth = keyof Friend['mouth'];
type Props = {
  friend: Friend;
  speaking: boolean;
  /** 재생 중인 AI 음성의 0~1 음량. 실제 음성이 미연결이면 null. */
  readOutputLevel?: () => number | null;
  className?: string;
};

const FRAME_MS = 150;
const MOUTH_SEQUENCE: readonly Mouth[] = ['closed', 'half', 'open', 'half'];

function mouthAtLevel(level: number): Mouth {
  if (!Number.isFinite(level) || level < 0.2) return 'closed';
  return level < 0.55 ? 'half' : 'open';
}

/** 사진 위치는 고정한다. 음성 미연결 데모에서만 150ms 주기를 쓴다. */
export function TalkingPortrait({ friend, speaking, readOutputLevel, className }: Props) {
  const reducedMotion = useReducedMotion();
  const [loadedSources, setLoadedSources] = useState<readonly string[]>([]);
  const framesReady = Object.values(friend.mouth).every((src) => loadedSources.includes(src));
  const active = speaking && !reducedMotion && framesReady;
  const [frame, setFrame] = useState<{ friendId: string; mouth: Mouth }>({
    friendId: friend.id,
    mouth: 'closed',
  });

  useEffect(() => {
    setFrame({ friendId: friend.id, mouth: 'closed' });
    if (!active) return;
    let frameIndex = 0;
    const timer = window.setInterval(() => {
      frameIndex += 1;
      const level = readOutputLevel?.();
      const mouth =
        level == null
          ? (MOUTH_SEQUENCE.at(frameIndex % MOUTH_SEQUENCE.length) ?? 'closed')
          : mouthAtLevel(level);
      setFrame({ friendId: friend.id, mouth });
    }, FRAME_MS);
    return () => window.clearInterval(timer);
  }, [active, friend.id, readOutputLevel]);

  const mouth = active && frame.friendId === friend.id ? frame.mouth : 'closed';
  const frames: readonly { mouth: Mouth; src: string }[] = [
    { mouth: 'closed', src: friend.mouth.closed },
    { mouth: 'half', src: friend.mouth.half },
    { mouth: 'open', src: friend.mouth.open },
  ];

  return (
    <div className={`${styles.portrait} ${className ?? ''}`} aria-hidden="true" data-mouth={mouth}>
      {frames.map((item) => (
        <img
          key={item.mouth}
          src={item.src}
          alt=""
          onLoad={() =>
            setLoadedSources((sources) =>
              sources.includes(item.src) ? sources : [...sources, item.src],
            )
          }
          className={mouth === item.mouth ? styles.show : undefined}
        />
      ))}
    </div>
  );
}
