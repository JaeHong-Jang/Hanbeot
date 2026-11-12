import styles from './Logo.module.css';

/** 말풍선 모양 봉투: 말하면 편지가 된다. 덮개(V) 선은 따로 두어 시작 화면에서 그려지게 한다. */
export const LOGO_BUBBLE =
  'M15 12h18a5.5 5.5 0 0 1 5.5 5.5v10A5.5 5.5 0 0 1 33 33H21.5L15 38.5V33a5.5 5.5 0 0 1-5.5-5.5v-10A5.5 5.5 0 0 1 15 12Z';
export const LOGO_FLAP = 'M14.5 18 24 24.5 33.5 18';

type MarkProps = {
  size: number;
  /** brand: 빨간 칸에 흰 말풍선(앱 아이콘) · inverse: 흰 칸에 빨간 말풍선(빨간 바탕 위) */
  tone?: 'brand' | 'inverse';
  className?: string;
};

/** 앱 아이콘 모양의 로고 마크. */
export function LogoMark({ size, tone = 'brand', className }: MarkProps) {
  return (
    <svg
      className={`${styles.mark} ${styles[tone]} ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <rect className={styles.tile} width="48" height="48" rx="13" />
      <path className={styles.bubble} d={LOGO_BUBBLE} />
      <path className={styles.flap} d={LOGO_FLAP} />
    </svg>
  );
}

type Props = { height?: number; className?: string };

/** 마크 + "한벗" 글자. 머리글 왼쪽에 둔다. */
export function Logo({ height = 28, className }: Props) {
  return (
    <span className={`${styles.logo} ${className ?? ''}`} role="img" aria-label="한벗">
      <LogoMark size={height} />
      <span
        className={styles.word}
        style={{ fontSize: Math.round(height * 0.72) }}
        aria-hidden="true"
      >
        한벗
      </span>
    </span>
  );
}
