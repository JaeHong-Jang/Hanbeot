/**
 * 입장 이야기. 혼자 있는 밤, 팀플, 동아리, 불 켜진 거실로 이어진다.
 * 장면마다 문장 하나. 1차 보고서 1.1절(배경, 필요성)의 세 장면이 앞 셋이고, 넷째가 한벗의 약속이다.
 */
export const introStrings = {
  skip: '건너뛰기',
  next: '다음 장면',
  pause: '이야기 잠시 멈추기',
  resume: '이야기 자동 넘기기',
  replay: '처음 이야기 다시 보기',
  holdHint: '현관문 눌러 들어가기',
  ringing: '띵동',
  slideLabel: (step: number, total: number) => `이야기 ${step} / ${total}`,
  scenes: [
    {
      id: 'alone',
      line: '오늘도 아무한테도 말 못 하고\n하루가 끝났어.',
      sub: '말할 사람이 떠오르지 않는 밤이 있어요.',
    },
    {
      id: 'team',
      line: '불만이 있어도\n분위기 나빠질까 봐 삼켰어.',
      sub: '팀플에서도, 다 아는 사이에서도 고민은 꺼내기 어려워요.',
    },
    {
      id: 'tangled',
      line: '같은 과, 같은 동아리라서\n더 말하기 어려웠어.',
      sub: '다 아는 사이일수록 꺼내기 어려운 이야기도 있어요.',
    },
    {
      id: 'home',
      line: '언제든 놀러 와.\n불 켜 두고 기다릴게.',
      sub: 'AI 친구예요. 치료나 상담을 대신하지는 않아요.',
    },
  ],
} as const;

export type SceneId = (typeof introStrings.scenes)[number]['id'];

export const SCENE_MS = 3000;
export const HOLD_MS = 800;
