/** 하루를 셋으로 나눈다. 하늘이네 거실 조명과 인사말이 이 값으로 바뀐다. */
export type DayPart = 'morning' | 'evening' | 'night';

/** 5시~16시 아침(낮 포함), 17시~19시 저녁, 그 밖은 밤. */
export function dayPart(hour: number): DayPart {
  if (hour >= 5 && hour < 17) return 'morning';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
}

/** "밤 9시 40분" 처럼 지금 시각을 하루 때와 함께 읽는다. */
export function clockLabel(d: Date): string {
  const hour = d.getHours();
  const word = hour < 5 ? '새벽' : hour < 12 ? '오전' : hour < 18 ? '오후' : '밤';
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  const minute = d.getMinutes();
  return minute === 0 ? `${word} ${h12}시` : `${word} ${h12}시 ${minute}분`;
}
