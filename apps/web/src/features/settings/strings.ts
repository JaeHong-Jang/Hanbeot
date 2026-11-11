export const settingsStrings = {
  title: '설정',
  nameTitle: '부르는 이름',
  nameLabel: '이름',
  namePlaceholder: '예: 하윤',
  nameNote: '홈 인사말에만 써요. 이 기기에만 남고 서버로 보내지 않아요.',
  consent: '동의',
  save: '동의 저장',
  deletionTitle: '내 데이터',
  requestDeletion: '데이터 삭제 요청',
  deletionAccepted: (hours: number) =>
    `삭제 요청을 받았어요. 운영 DB 기준 ${hours}시간 안에 처리돼요.`,
  loading: '불러오는 중…',
} as const;
