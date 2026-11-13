import { josa } from '@/shared/strings/friends';

/** 로그인은 현관문 틈으로 친구가 묻고 내가 답하는 대화다(Finch, Tolan 방식). */
export const loginStrings = {
  from: (friendName: string) => `${friendName}, 문틈으로`,
  ask: '문 앞까지 와 줬구나.\n어떻게 부르면 돼?',
  placeholder: '부를 이름',
  reply: '이렇게 불러 줘',
  opening: (friendName: string, userName: string) =>
    `${josa(userName, '아', '야')}, 들어와. ${josa(friendName, '이가', '가')} 문 열어 줄게.`,
  note: '이름은 이 기기에만 남고, 대화 기록과 따로 보관해요. 본명이 아니어도 괜찮아요.',
  social: '카카오, Apple 간편 로그인은 준비 중이에요.',
} as const;

export const NAME_MAX_LENGTH = 10;
/** "들어와" 말풍선을 읽고 문이 열리는 시간 */
export const OPEN_MS = 1400;
