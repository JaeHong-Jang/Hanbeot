import { josa } from '@/shared/strings/friends';

/** V5 하늘이네 집. 방 안의 물건을 누르면 그 기능으로 간다. */
export const houseStrings = {
  tabs: { living: '거실', fridge: '냉장고', room: '내 방' },
  navLabel: '하늘이네 집',
  help: '도움 받기',
  // 거실
  livingTitle: (friendName: string) => `${josa(friendName, '이네', '네')} 거실`,
  doing: {
    morning: '창가에서 커피 내리는 중',
    evening: '저녁 준비하다 잠깐 쉬는 중',
    night: '소파에서 차 마시는 중',
  },
  doorNote: '현관 쪽지',
  window: '창문',
  fridgeCount: (count: number) => `냉장고 ${count}장`,
  sofaCall: '소파에서 통화',
  windowCall: '창가로 가서 통화',
  noteTitle: (friendName: string) => `${josa(friendName, '이가', '가')} 남긴 쪽지`,
  noteClose: '쪽지 접기',
  windowPreview: (label: string) => `창밖이 ${label}이 됐어요. 한 번 더 누르면 바뀌어요.`,
  partLabel: { morning: '아침', evening: '저녁', night: '밤' },
  modeTitle: '오늘은 어떻게 들어줄까?',
  modeLabel: '대화 방식',
  sitWith: (friendName: string) => `${josa(friendName, '이', '')} 옆에 앉기`,
  week: (friendName: string, calls: number, minutes: number) =>
    calls === 0
      ? '이번 주엔 아직 놀러 오지 않았어요'
      : `이번 주 ${josa(friendName, '이네', '네')}에서 ${calls}번, ${minutes}분`,
  // 처음 안내
  coach: [
    {
      title: '소파를 누르면 통화해요',
      body: '아래 큰 버튼과 같아요. 현관, 창문, 냉장고도 눌러 보세요.',
    },
    {
      title: '통화가 끝나면 냉장고에 편지가 붙어요',
      body: '같이 이야기한 날만큼 사진이 늘어나요.',
    },
    {
      title: '힘들 땐 오른쪽 위 도움 받기',
      body: '109, 1577-0199처럼 바로 전화할 수 있는 곳이 있어요.',
    },
  ],
  coachStep: (step: number, total: number) => `처음 오셨네요 ${step}/${total}`,
  next: '다음',
  done: '시작하기',
  skip: '건너뛰기',
  // 냉장고
  fridgeTitle: '냉장고',
  fridgeSub: (count: number) =>
    count === 0 ? '아직 붙은 편지가 없어요' : `같이 이야기한 날 ${count}장`,
  all: (count: number) => `전체 ${count}`,
  thisMonth: (count: number) => `이번 달 ${count}`,
  calendarTitle: '이번 주',
  calendarCalls: (calls: number) => `${calls}번`,
  calendarMinutes: (minutes: number) => `${minutes}분 이야기`,
  memoNote: '기억 메모',
  memoEmpty: '통화에서 기억해 달라고 한 것이 여기 붙어요',
  justNow: '방금',
  moreLetters: '냉장고에 다 못 붙인 편지',
  fridgeEmpty: (friendName: string) =>
    `${josa(friendName, '이랑', '랑')} 통화가 끝나면 편지 사진이 여기 붙어요.`,
  // 내 방
  roomTitle: '내 방',
  roomSub: '설정',
  wardrobe: '옷장: 친구 바꾸기',
  clock: '탁상시계: 쪽지 알림',
  drawer: '서랍: 앱 잠금',
  swapped: (friendName: string) => `이제 ${josa(friendName, '이랑', '랑')} 이야기해요`,
  soon: (what: string) => `${what}은 준비 중이에요`,
  reminder: '쪽지 알림',
  lock: '앱 잠금',
  nameRow: '부르는 이름',
  namePlaceholder: '이름',
  friendRow: '이야기할 친구',
  memoryRow: (friendName: string) => `${josa(friendName, '이가', '가')} 기억하는 것`,
  memoryCount: (count: number) => `${count}개`,
  consentRow: '개인정보와 동의',
  deletion: '내 데이터 삭제 요청',
  deletionAccepted: (hours: number) => `삭제 요청을 받았어요. ${hours}시간 안에 지워요.`,
  back: '내 방',
  consentTitle: '개인정보와 동의',
  loading: '불러오는 중…',
} as const;
