import doyunClosed from '@/shared/assets/friend-doyun-mouth-closed.jpg';
import doyunHalf from '@/shared/assets/friend-doyun-mouth-half.jpg';
import doyunOpen from '@/shared/assets/friend-doyun-mouth-open.jpg';
import haneulClosed from '@/shared/assets/friend-haneul-mouth-closed.jpg';
import haneulHalf from '@/shared/assets/friend-haneul-mouth-half.jpg';
import haneulOpen from '@/shared/assets/friend-haneul-mouth-open.jpg';
import jiwooClosed from '@/shared/assets/friend-jiwoo-mouth-closed.jpg';
import jiwooHalf from '@/shared/assets/friend-jiwoo-mouth-half.jpg';
import jiwooOpen from '@/shared/assets/friend-jiwoo-mouth-open.jpg';
import seoyunClosed from '@/shared/assets/friend-seoyun-mouth-closed.jpg';
import seoyunHalf from '@/shared/assets/friend-seoyun-mouth-half.jpg';
import seoyunOpen from '@/shared/assets/friend-seoyun-mouth-open.jpg';
import balconyRoom from '@/shared/assets/rooms/balcony-dusk.jpg';
import deskRoom from '@/shared/assets/rooms/desk-dusk.jpg';
import kitchenRoom from '@/shared/assets/rooms/kitchen-night.jpg';
import livingRoom from '@/shared/assets/rooms/living-night.jpg';
import { FRIEND_STRINGS } from '@/shared/strings/friends';

export type FriendId = keyof typeof FRIEND_STRINGS;
/** 입 모양 세 장: 통화 화면이 소리 크기에 맞춰 바꿔 가며 말하는 것처럼 보이게 한다. */
export type MouthFrames = { closed: string; half: string; open: string };
export type Friend = {
  id: FriendId;
  name: string;
  tagline: string;
  mood: string;
  /** 카드와 통화 대기 상태에서 같은 인물·구도를 쓰도록 닫힌 입 초상을 공유한다. */
  image: string;
  mouth: MouthFrames;
  /** 이 친구가 머무는 자리(빈 방 그림) */
  room: string;
};

const frames = (closed: string, half: string, open: string): MouthFrames => ({
  closed,
  half,
  open,
});

const DEFAULT_FRIEND: Friend = {
  id: 'haneul',
  ...FRIEND_STRINGS.haneul,
  image: haneulClosed,
  mouth: frames(haneulClosed, haneulHalf, haneulOpen),
  room: livingRoom,
};

/** 고를 수 있는 AI 친구. 그림은 같은 아파트, 같은 조명으로 생성했다. */
export const FRIENDS: readonly Friend[] = [
  DEFAULT_FRIEND,
  {
    id: 'doyun',
    ...FRIEND_STRINGS.doyun,
    image: doyunClosed,
    mouth: frames(doyunClosed, doyunHalf, doyunOpen),
    room: deskRoom,
  },
  {
    id: 'jiwoo',
    ...FRIEND_STRINGS.jiwoo,
    image: jiwooClosed,
    mouth: frames(jiwooClosed, jiwooHalf, jiwooOpen),
    room: kitchenRoom,
  },
  {
    id: 'seoyun',
    ...FRIEND_STRINGS.seoyun,
    image: seoyunClosed,
    mouth: frames(seoyunClosed, seoyunHalf, seoyunOpen),
    room: balconyRoom,
  },
];

export function friendById(id: string): Friend {
  return FRIENDS.find((friend) => friend.id === id) ?? DEFAULT_FRIEND;
}

/** 지금 친구의 다음 친구(옷장에서 바꾸기). 마지막이면 처음으로 돌아간다. */
export function otherFriend(id: string): Friend {
  const friendIndex = FRIENDS.findIndex((friend) => friend.id === id);
  return FRIENDS.at((friendIndex + 1) % FRIENDS.length) ?? DEFAULT_FRIEND;
}
