/** 만년필 그림. 펜촉 끝이 (0,0)이라 부모에서 translate만 하면 글씨 위에 올라간다. */
export function FountainPen({
  angleDeg = 34,
  scale = 0.62,
}: {
  angleDeg?: number;
  scale?: number;
}) {
  return (
    <g transform={`rotate(${angleDeg}) scale(${scale})`}>
      <rect x="-9" y="-178" width="18" height="118" rx="9" fill="#5a2230" />
      <rect x="-9" y="-178" width="6" height="118" rx="3" fill="#7a3446" opacity="0.7" />
      <rect x="-9.5" y="-74" width="19" height="5" rx="1.5" fill="#c9a35b" />
      <rect x="-9.5" y="-150" width="19" height="3" rx="1.5" fill="#c9a35b" opacity="0.8" />
      <path d="M-8 -62h16l-2 24h-12Z" fill="#2a1a15" />
      <path d="M0 0L-7.5-22Q-8.5-31-6-38H6Q8.5-31 7.5-22Z" fill="#d8b46a" />
      <path d="M0 0L-7.5-22Q-8.5-31-6-38H-1Q-4-28 0 0Z" fill="#f0d79a" opacity="0.7" />
      <path d="M0 -1V-20" stroke="#3a2618" strokeWidth="0.9" />
      <circle cx="0" cy="-21" r="1.8" fill="#3a2618" />
    </g>
  );
}
