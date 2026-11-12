import { crisisStrings as s } from './strings';

/** 지금 바로 연락할 수 있는 곳. 번호는 공식 안내 기준(설계서 P0-6). 두 컨셉의 도움 화면이 함께 쓴다. */
export const HELP_LINES: readonly { name: string; number: string; desc: string }[] = [
  { name: s.lines.suicide.name, number: '109', desc: s.lines.suicide.desc },
  { name: s.lines.mental.name, number: '1577-0199', desc: s.lines.mental.desc },
  { name: s.lines.youth.name, number: '1388', desc: s.lines.youth.desc },
  { name: s.lines.emergency.name, number: '119', desc: s.lines.emergency.desc },
];

/** tel: 링크용 번호(하이픈 제거) */
export const telHref = (number: string): string => `tel:${number.replace(/-/g, '')}`;
