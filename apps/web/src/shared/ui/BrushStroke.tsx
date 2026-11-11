import { useId } from 'react';

import styles from './BrushStroke.module.css';
import { LETTERING, type BrushStrokeDef } from './lettering';

type Props = {
  stroke: BrushStrokeDef;
  /** true면 중심선을 따라 조금씩 드러난다(--len / --off로 조절). false면 다 쓴 모습. */
  animated?: boolean;
  groupRef?: (el: SVGGElement | null) => void;
};

const MASK_MARGIN = 40;

/**
 * 붓 획 하나. 첫 번째 자식은 보이지 않는 중심선으로, 길이를 재고 붓 위치를 구하는 데 쓴다.
 * 쓰는 동안에는 중심선 모양의 가림막(mask)이 길어지면서 획이 드러난다.
 */
export function BrushStroke({ stroke, animated = false, groupRef }: Props) {
  const maskId = `brush-${useId().replace(/:/g, '')}`;
  return (
    <g ref={groupRef} className={styles.stroke}>
      <path className={styles.guide} d={stroke.d} />
      {animated ? (
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x={-MASK_MARGIN}
          y={-MASK_MARGIN}
          width={LETTERING.width + MASK_MARGIN * 2}
          height={LETTERING.height + MASK_MARGIN * 2}
        >
          <path className={styles.reveal} d={stroke.d} strokeWidth={stroke.width + 8} />
        </mask>
      ) : null}
      <path d={stroke.outline} mask={animated ? `url(#${maskId})` : undefined} />
    </g>
  );
}
