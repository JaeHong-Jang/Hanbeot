import { BrushStroke } from './BrushStroke';
import { LETTERING, SLANT_TRANSFORM } from './lettering';

type Props = { height?: number; className?: string };

/** 붓으로 쓴 "한벗" 로고. 시작 화면과 같은 글씨다. */
export function Logo({ height = 36, className }: Props) {
  return (
    <svg
      className={className}
      height={height}
      viewBox={`-8 -6 ${LETTERING.width + 16} ${LETTERING.height + 12}`}
      role="img"
      aria-label="한벗"
    >
      <g transform={SLANT_TRANSFORM}>
        {LETTERING.strokes.map((stroke) => (
          <BrushStroke key={stroke.d} stroke={stroke} />
        ))}
      </g>
    </svg>
  );
}
