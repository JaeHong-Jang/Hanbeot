#!/usr/bin/env python3
"""2차 산출 보고서 그림 생성: 유스케이스 다이어그램, 위기 대응 흐름도, 주차별 일정 간트.

  python3 tools/draw_report_figures.py "보고서/소프트웨어 공학/2차 산출물/그림"
"""

from __future__ import annotations

import sys
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
from matplotlib import font_manager  # noqa: E402
from matplotlib.patches import Ellipse, FancyArrowPatch, FancyBboxPatch, Rectangle  # noqa: E402

FONT_PATH = Path.home() / ".local/share/fonts/pretendard/Pretendard-Regular.otf"
FONT_BOLD = Path.home() / ".local/share/fonts/pretendard/Pretendard-Bold.otf"
for p in (FONT_PATH, FONT_BOLD):
    if p.exists():
        font_manager.fontManager.addfont(str(p))
plt.rcParams["font.family"] = "Pretendard" if FONT_PATH.exists() else "sans-serif"
plt.rcParams["axes.unicode_minus"] = False


def actor(ax, x: float, y: float, label: str) -> None:
    """스틱 피겨 액터. (x, y)는 머리 중심."""
    ax.add_patch(plt.Circle((x, y), 0.18, fill=False, lw=1.5))
    ax.plot([x, x], [y - 0.18, y - 0.75], lw=1.5, color="k")
    ax.plot([x - 0.3, x + 0.3], [y - 0.4, y - 0.4], lw=1.5, color="k")
    ax.plot([x, x - 0.25], [y - 0.75, y - 1.15], lw=1.5, color="k")
    ax.plot([x, x + 0.25], [y - 0.75, y - 1.15], lw=1.5, color="k")
    ax.text(x, y - 1.4, label, ha="center", va="top", fontsize=10)


def usecase(ax, x: float, y: float, label: str, w: float = 2.6, h: float = 0.72) -> tuple[float, float]:
    ax.add_patch(Ellipse((x, y), w, h, facecolor="#f3f6fb", edgecolor="#2c3e66", lw=1.3))
    ax.text(x, y, label, ha="center", va="center", fontsize=9.2)
    return (x, y)


def link(ax, a: tuple[float, float], b: tuple[float, float], style: str = "-", label: str | None = None) -> None:
    arrow = FancyArrowPatch(a, b, arrowstyle="-" if style == "-" else "-|>", linestyle="solid" if style == "-" else "dashed",
                            mutation_scale=10, lw=1.0, color="#444", shrinkA=6, shrinkB=6)
    ax.add_patch(arrow)
    if label:
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        ax.text(mx, my + 0.12, label, fontsize=7.5, ha="center", color="#444", style="italic")


def draw_usecase(out: Path) -> None:
    fig, ax = plt.subplots(figsize=(13, 10))
    ax.set_xlim(0, 13)
    ax.set_ylim(-1.7, 9.2)
    ax.axis("off")
    # 시스템 경계
    ax.add_patch(Rectangle((2.6, 0.4), 7.9, 8.1, fill=False, lw=1.6, edgecolor="#2c3e66"))
    ax.text(6.55, 8.8, "한벗 (음성 기반 개인 맞춤형 AI 친구) 시스템", ha="center", va="center", fontsize=12, weight="bold")

    # 액터
    actor(ax, 1.2, 7.2, "사용자\n(대학생)")
    actor(ax, 1.2, 2.6, "운영자\n(PM, 안전 담당)")
    actor(ax, 11.9, 8.4, "음성 인식 서비스\n(RTZR STT)")
    actor(ax, 11.9, 6.1, "대화 생성 서비스\n(Claude)")
    actor(ax, 11.9, 3.8, "음성 합성 서비스\n(Typecast)")
    actor(ax, 6.5, -0.2, "자살예방상담전화 109\n(외부 기관)")

    # 유스케이스
    uc = {}
    uc["onb"] = usecase(ax, 4.3, 8.0, "UC-01 온보딩, 3단 동의")
    uc["mode"] = usecase(ax, 4.3, 6.3, "UC-03 대화 방식 선택", 2.4)
    uc["sum"] = usecase(ax, 4.3, 5.0, "UC-07 통화 후 요약, \n기억 승인", 2.6, 0.9)
    uc["mem"] = usecase(ax, 4.3, 3.8, "UC-08 기억 열람, \n수정, 삭제", 2.6, 0.9)
    uc["cons"] = usecase(ax, 4.3, 2.75, "UC-09 동의 변경, \n통화 중 철회", 2.6, 0.9)
    uc["del"] = usecase(ax, 4.3, 1.35, "UC-10 데이터 삭제 요청", 2.6, 0.8)
    uc["call"] = usecase(ax, 6.6, 7.3, "UC-02 음성 통화로\n고민 말하기", 3.0, 1.0)
    uc["crisis"] = usecase(ax, 6.6, 4.8, "UC-06 위기 신호 대응\n(안전 모드, 109 안내)", 3.2, 0.95)
    uc["cue"] = usecase(ax, 9.1, 7.95, "UC-04 감정 단서\n확인 질문", 2.5, 0.85)
    uc["intr"] = usecase(ax, 9.2, 4.9, "UC-05 끼어들기, \n보류, 음소거", 2.5, 0.9)
    uc["usage"] = usecase(ax, 9.2, 3.5, "UC-11 사용 시간, \n휴식 알림", 2.4, 0.9)
    uc["ops"] = usecase(ax, 9.2, 2.1, "UC-12 위기 로그 점검, \n운영 지표 조회", 2.6, 0.9)

    # 사용자 연결 (왼쪽 열 + UC-02)
    left_edges = {"onb": (3.0, 8.0), "mode": (3.1, 6.3), "sum": (3.0, 5.0), "mem": (3.0, 3.8), "cons": (3.0, 2.75), "del": (3.0, 1.35)}
    for k, pt in left_edges.items():
        link(ax, (1.55, 6.7), pt)
    link(ax, (1.55, 6.7), (5.15, 7.3))
    # 운영자
    link(ax, (1.55, 2.1), (7.95, 2.1))
    # 외부 시스템 → UC-02 (오른쪽 위 빈 공간으로)
    link(ax, (11.55, 7.9), (8.05, 7.3))
    link(ax, (11.55, 5.6), (8.05, 7.05))
    link(ax, (11.55, 3.3), (8.05, 6.85))
    # 109 → UC-06 (아래에서 수직)
    link(ax, (6.5, 0.15), (6.5, 4.33))
    # include / extend
    link(ax, (7.7, 7.6), (8.1, 7.8), "-|>", "«extend»")
    link(ax, (6.6, 6.8), (6.6, 5.28), "-|>", "«extend»")
    link(ax, (7.4, 6.85), (8.45, 5.3), "-|>", "«include»")
    link(ax, (5.15, 7.05), (5.25, 6.55), "-|>", "«include»")
    link(ax, (6.0, 6.8), (5.5, 5.2), "-|>", "«include»")
    link(ax, (7.2, 6.8), (8.3, 3.9), "-|>", "«include»")
    link(ax, (7.3, 4.45), (8.4, 2.45), "-|>", "«include»")
    ax.text(6.55, 0.55, "«include»: 항상 포함   «extend»: 조건 충족 시 확장(감정 단서 동의, 점수 조건 / 위기 신호 감지)", ha="center", fontsize=8.5, color="#333")
    fig.tight_layout()
    fig.savefig(out / "그림1_유스케이스_다이어그램.png", dpi=180)
    plt.close(fig)


def box(ax, x: float, y: float, w: float, h: float, text: str, fc: str = "#f3f6fb", fs: float = 9) -> tuple[float, float]:
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h, boxstyle="round,pad=0.02,rounding_size=0.08", facecolor=fc, edgecolor="#2c3e66", lw=1.2))
    ax.text(x, y, text, ha="center", va="center", fontsize=fs)
    return (x, y)


def diamond(ax, x: float, y: float, w: float, h: float, text: str) -> tuple[float, float]:
    ax.add_patch(plt.Polygon([(x, y + h / 2), (x + w / 2, y), (x, y - h / 2), (x - w / 2, y)], facecolor="#fff7e6", edgecolor="#2c3e66", lw=1.2))
    ax.text(x, y, text, ha="center", va="center", fontsize=8.6)
    return (x, y)


def arrow(ax, a: tuple[float, float], b: tuple[float, float], label: str | None = None, dx: float = 0.0) -> None:
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle="-|>", mutation_scale=11, lw=1.1, color="#333", shrinkA=10, shrinkB=10))
    if label:
        ax.text((a[0] + b[0]) / 2 + dx, (a[1] + b[1]) / 2, label, fontsize=8, color="#333", ha="center", va="center",
                bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))


def draw_crisis_flow(out: Path) -> None:
    fig, ax = plt.subplots(figsize=(12.5, 8.8))
    ax.set_xlim(0, 12.5)
    ax.set_ylim(0, 8.8)
    ax.axis("off")
    ax.text(6.25, 8.5, "위기 신호 대응 흐름 (매 턴 실행, 글 기반 2단 분류)", ha="center", fontsize=12, weight="bold")
    a = box(ax, 2.0, 7.4, 3.0, 0.7, "사용자 발화 → 음성 인식(STT) 전사")
    d1 = diamond(ax, 2.0, 5.9, 3.2, 1.1, "① 키워드 게이트\n명시적 자살, 자해 표현?")
    b = box(ax, 6.3, 5.9, 3.2, 0.8, "② 대화 생성(Claude)\n응답 첫 줄에 위험 태그")
    d2 = diamond(ax, 6.3, 4.1, 3.0, 1.1, "위험 태그?")
    l1 = box(ax, 2.0, 2.6, 3.4, 1.35, "안전 모드 진입 (L1)\n,  생성 응답 폐기, 사전 녹음 안전 스크립트\n,  109 카드 전면 + 지역 정신건강복지센터\n,  모드 전환 잠금, 휴식 알림 보류\n,  사용자 중지, 종료, 정정 발화는 항상 처리", fc="#fdecec", fs=8.4)
    l2 = box(ax, 6.3, 2.2, 3.0, 1.0, "L2 암시적 신호\n세션 점수 누적, 2점 이상이면\n부드러운 안내(임시 기준)", fc="#fff7e6", fs=8.4)
    l0 = box(ax, 10.3, 4.1, 2.9, 0.8, "L0 신호 없음\n태그 제거 후 음성 합성, 재생")
    rel = box(ax, 2.0, 0.65, 3.4, 0.75, "해제: \"안전해\" + 연속 3턴 신호 없음\n(임시 기준, 전문가 검토 대상)", fs=8.2)
    fail = box(ax, 10.3, 2.2, 2.9, 1.0, "실패 동작\n태그 누락, 파싱 실패 → L0 + 키워드 유지\nLLM, TTS 장애 → 사전 녹음 음성 + 카드", fc="#eef5ee", fs=8.0)
    arrow(ax, (2.0, 7.05), (2.0, 6.45))
    arrow(ax, (2.0, 5.35), (2.0, 3.28), "예 (Claude 호출 없이 즉시)", dx=1.0)
    arrow(ax, (3.6, 5.9), (4.7, 5.9), "아니오")
    arrow(ax, (6.3, 5.5), (6.3, 4.65))
    arrow(ax, (4.8, 4.1), (3.7, 3.1), "L1", dx=-0.2)
    arrow(ax, (6.3, 3.55), (6.3, 2.7), "L2")
    arrow(ax, (7.8, 4.1), (8.85, 4.1), "L0")
    arrow(ax, (2.0, 1.93), (2.0, 1.03))
    arrow(ax, (7.8, 2.2), (8.85, 2.2))
    ax.text(6.25, 0.35, "우선순위: 키워드 양성 > 태그 L1 > 사용자 정정 > L2 누적 > 태그 누락.   음성 감정 단서는 위기 점수에 넣지 않는다(2026-11-08 결정 상정안).", ha="center", fontsize=8.4, color="#333")
    fig.tight_layout()
    fig.savefig(out / "그림2_위기_대응_흐름도.png", dpi=180)
    plt.close(fig)


def draw_gantt(out: Path) -> None:
    rows = [
        ("W0 10/23–10/26", "앱 설계서, 기술 논문 근거 문서", "완료"),
        ("W1 10/27–11/02", "라이선스, 데이터 약관 확인, 설계 확정, 문제 인터뷰 시작(인터뷰는 계속)", "완료"),
        ("W2 11/03–11/09", "코드 하네스 구축, 회의 후속 조사, 11/9 결정 회의 (통화 루프는 W3로 이월)", "완료"),
        ("W3 11/10–11/16", "음성 통화 루프 E2E, TTFA 1차 측정, 요구사항, 유스케이스(2차 산출물)", "진행 중"),
        ("W4 11/17–11/23", "감정 단서, 대화 방식, 위기 분류 초안, SER 자체 평가, TTS 블라인드 테스트", "예정"),
        ("W5 11/24–11/30", "기억, 요약, 삭제, 안전 프로토콜, 동의 화면 완료, 내부 파일럿", "예정"),
        ("W6 12/01–12/07", "사용자 테스트 20~30명 (시작 게이트 통과 시)", "예정"),
        ("W7 12/08–12/12", "분석, 발표 준비, 최종 산출물", "예정"),
    ]
    fig, ax = plt.subplots(figsize=(12.5, 5.2))
    ax.set_xlim(0, 8)
    ax.set_ylim(-0.5, len(rows) - 0.5)
    colors = {"완료": "#9fc5a5", "진행 중": "#f2c76b", "예정": "#c9d6ea"}
    for i, (wk, task, status) in enumerate(rows):
        y = len(rows) - 1 - i
        key = status
        ax.barh(y, 1, left=i, height=0.6, color=colors[key], edgecolor="#2c3e66")
        ax.text(i + 0.5, y, status, ha="center", va="center", fontsize=8.5)
        ax.text(-0.1, y, wk, ha="right", va="center", fontsize=9)
        ax.text(8.05, y, task, ha="left", va="center", fontsize=8.6)
    ax.set_yticks([])
    ax.set_xticks([])
    for s in ax.spines.values():
        s.set_visible(False)
    ax.set_title("주차별 일정 (2026-11-12 기준 상태)", fontsize=12, weight="bold", loc="left")
    fig.subplots_adjust(left=0.14, right=0.52, top=0.9, bottom=0.05)
    fig.savefig(out / "그림3_주차별_일정.png", dpi=180, bbox_inches="tight")
    plt.close(fig)


def main() -> None:
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "보고서/소프트웨어 공학/2차 산출물/그림")
    out.mkdir(parents=True, exist_ok=True)
    draw_usecase(out)
    draw_crisis_flow(out)
    draw_gantt(out)
    print("saved:", sorted(p.name for p in out.glob("*.png")))


if __name__ == "__main__":
    main()
