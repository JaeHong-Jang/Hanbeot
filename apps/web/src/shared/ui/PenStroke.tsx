import styles from './PenStroke.module.css';
import { nibLineWidth, nibOffsets, type PenStrokeDef } from './penLettering';

type Props = {
  stroke: PenStrokeDef;
  /** 전체 굵기 배수. 작게 그릴 때 선이 너무 가늘어지지 않게 올린다. */
  scale?: number;
  groupRef?: (el: SVGGElement | null) => void;
};

/** 펜 글씨 한 획 = 펜촉 폭만큼 겹친 선 묶음. 첫 번째 path가 가운데 선이다. */
export function PenStroke({ stroke, scale = 1, groupRef }: Props) {
  const weight = stroke.weight * scale;
  return (
    <g ref={groupRef} className={styles.stroke} strokeWidth={nibLineWidth(weight)}>
      {nibOffsets(weight).map(({ dx, dy }) => (
        <path
          key={`${dx},${dy}`}
          d={stroke.d}
          transform={`translate(${dx.toFixed(2)} ${dy.toFixed(2)})`}
        />
      ))}
    </g>
  );
}
