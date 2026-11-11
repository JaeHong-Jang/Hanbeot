import doyunImage from '@/shared/assets/friend-doyun.jpg';
import haneulImage from '@/shared/assets/friend-haneul.jpg';
import { FRIEND_STRINGS } from '@/shared/strings/friends';

export type FriendId = keyof typeof FRIEND_STRINGS;
export type Friend = { id: FriendId; name: string; tagline: string; image: string };

/** 고를 수 있는 AI 친구. 사진은 사업계획서 삽화에서 가져온 임시 이미지다. */
export const FRIENDS: readonly Friend[] = [
  { id: 'haneul', ...FRIEND_STRINGS.haneul, image: haneulImage },
  { id: 'doyun', ...FRIEND_STRINGS.doyun, image: doyunImage },
];

const DEFAULT_FRIEND: Friend = { id: 'haneul', ...FRIEND_STRINGS.haneul, image: haneulImage };

export function friendById(id: string): Friend {
  return FRIENDS.find((friend) => friend.id === id) ?? DEFAULT_FRIEND;
}

export function otherFriend(id: string): Friend {
  return FRIENDS.find((friend) => friend.id !== id) ?? DEFAULT_FRIEND;
}
