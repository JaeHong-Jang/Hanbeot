/** 붓 그림. 붓끝이 (0,0)이라 부모에서 translate만 하면 글씨 위에 올라간다. */
export function InkBrush({ angleDeg = 24, scale = 0.7 }: { angleDeg?: number; scale?: number }) {
  return (
    <g transform={`rotate(${angleDeg}) scale(${scale})`}>
      {/* 대나무 붓대 */}
      <rect x="-7" y="-236" width="14" height="176" rx="6" fill="#c8a56a" />
      <rect x="-7" y="-236" width="5" height="176" rx="2.5" fill="#e3c88f" opacity="0.75" />
      <path d="M-7 -176h14M-7 -118h14" stroke="#9a7a44" strokeWidth="1.4" />
      <path d="M0 -236v-12" stroke="#7a2e3b" strokeWidth="2" strokeLinecap="round" />
      {/* 붓대와 붓털을 잇는 고리 */}
      <path d="M-8 -64h16l-1 14h-14Z" fill="#3a2a22" />
      {/* 먹을 머금은 붓털 */}
      <path d="M-7.5 -50C-10 -30 -6 -12 0 0C6 -12 10 -30 7.5 -50Z" fill="#1d1613" />
      <path
        d="M-7.5 -50C-9 -34 -6 -18 -1.5 -6C-4 -22 -4.5 -36 -3 -50Z"
        fill="#4a3a31"
        opacity="0.8"
      />
    </g>
  );
}
