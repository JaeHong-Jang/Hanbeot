import { LETTERING, SLANT_TRANSFORM } from './penLettering';
import { PenStroke } from './PenStroke';

type Props = { height?: number; className?: string };

/** 펜으로 쓴 "한벗" 로고. 스플래시와 같은 글씨다. */
export function Logo({ height = 36, className }: Props) {
  return (
    <svg
      className={className}
      height={height}
      viewBox={`-8 0 ${LETTERING.width + 16} ${LETTERING.height}`}
      role="img"
      aria-label="한벗"
    >
      <g transform={SLANT_TRANSFORM}>
        {LETTERING.strokes.map((stroke) => (
          <PenStroke key={stroke.d} stroke={stroke} scale={1.7} />
        ))}
      </g>
    </svg>
  );
}
