#!/usr/bin/env python3
"""2차 산출 보고서(한벗)를 원래 양식(부산 공모전 분석_보고서.hwpx)의 스타일로 HWPX 생성.

  python3 tools/build_report2_hwpx.py "<양식.hwpx>" "<출력 폴더>"

방법: 양식 hwpx 의 header.xml(글꼴·문단·글자 모양·표 테두리 정의)을 그대로 쓰고, section0.xml 만 새로 만든다.
스타일 ID 는 양식에서 실측한 값: 대제목 paraPr66/charPr82(번호 자동), 중제목 38/58, 소제목 54/54,
■ 67/66, ❍ 52/65, 표 캡션 56/78, 표 머리글 57/73(테두리 17), 표 본문 58/74(테두리 16),
표지 상자 테두리 3(흰 바탕)·15(회색 바탕), 표지 글자 51(제목 띠)·49(큰 제목)·50(날짜).
"""

from __future__ import annotations

import re
import struct
import sys
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

sys.path.insert(0, str(Path(__file__).resolve().parent))
import report2_content as C  # noqa: E402

TEXT_W = 48190  # 본문 폭 (HWPUNIT = 1/7200 inch). 양식 pagePr: 59528 - 5669*2


def t(text: str) -> str:
    return escape(text, {'"': "&quot;"})


_pid = [1000]


def pid() -> int:
    _pid[0] += 1
    return _pid[0]


def para(text: str, parapr: int, charpr: int, page_break: bool = False) -> str:
    runs = ""
    lines = text.split("\n")
    for i, line in enumerate(lines):
        if i:
            runs += f'<hp:run charPrIDRef="{charpr}"><hp:lineBreak/></hp:run>'
        runs += f'<hp:run charPrIDRef="{charpr}"><hp:t>{t(line)}</hp:t></hp:run>'
    return (f'<hp:p id="{pid()}" paraPrIDRef="{parapr}" styleIDRef="0" pageBreak="{1 if page_break else 0}" '
            f'columnBreak="0" merged="0">{runs}</hp:p>')


def empty(parapr: int = 0, charpr: int = 0) -> str:
    return f'<hp:p id="{pid()}" paraPrIDRef="{parapr}" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0"><hp:run charPrIDRef="{charpr}"/></hp:p>'


def cell(text: str, col: int, row: int, width: int, height: int, header: bool, borderfill: int, parapr: int, charpr: int) -> str:
    paras = "".join(para(line, parapr, charpr) for line in text.split("\n")) if text else empty(parapr, charpr)
    return (f'<hp:tc header="{1 if header else 0}" hasMargin="1" protect="0" editable="0" dirty="0" borderFillIDRef="{borderfill}">'
            f'<hp:subList id="" textDirection="HORIZONTAL" lineWrap="BREAK" vertAlign="CENTER" linkListIDRef="0" linkListNextIDRef="0" '
            f'textWidth="{width}" textHeight="0" hasTextRef="0" hasNumRef="0">{paras}</hp:subList>'
            f'<hp:cellAddr colAddr="{col}" rowAddr="{row}"/><hp:cellSpan colSpan="1" rowSpan="1"/>'
            f'<hp:cellSz width="{width}" height="{height}"/><hp:cellMargin left="300" right="300" top="200" bottom="200"/></hp:tc>')


def table_xml(header: list[str], rows: list[list[str]], widths: list[float] | None, total: int = TEXT_W,
              head_bf: int = 17, body_bf: int = 16, tbl_bf: int = 16, head_pp: int = 57, head_cp: int = 73,
              body_pp: int = 58, body_cp: int = 74, head_h: int = 1700, body_h: int = 1500) -> str:
    ncol = len(header)
    widths = widths or [1.0] * ncol
    scale = total / sum(widths)
    col_w = [int(w * scale) for w in widths]
    col_w[-1] += total - sum(col_w)
    all_rows = [header] + rows
    trs = []
    for r_idx, row in enumerate(all_rows):
        is_head = r_idx == 0
        h = head_h if is_head else body_h
        tcs = "".join(cell(row[c] if c < len(row) else "", c, r_idx, col_w[c], h, is_head,
                           head_bf if is_head else body_bf, head_pp if is_head else body_pp, head_cp if is_head else body_cp)
                      for c in range(ncol))
        trs.append(f"<hp:tr>{tcs}</hp:tr>")
    height = head_h + body_h * len(rows)
    return (f'<hp:tbl id="{pid()}" zOrder="0" numberingType="TABLE" textWrap="TOP_AND_BOTTOM" textFlow="BOTH_SIDES" lock="0" '
            f'dropcapstyle="None" pageBreak="CELL" repeatHeader="1" rowCnt="{len(all_rows)}" colCnt="{ncol}" cellSpacing="0" '
            f'borderFillIDRef="{tbl_bf}" noAdjust="0"><hp:sz width="{total}" widthRelTo="ABSOLUTE" height="{height}" heightRelTo="ABSOLUTE" protect="0"/>'
            f'<hp:pos treatAsChar="1" affectLSpacing="0" flowWithText="1" allowOverlap="0" holdAnchorAndSO="0" vertRelTo="PARA" '
            f'horzRelTo="PARA" vertAlign="TOP" horzAlign="LEFT" vertOffset="0" horzOffset="0"/>'
            f'<hp:outMargin left="141" right="141" top="141" bottom="141"/><hp:inMargin left="141" right="141" top="141" bottom="141"/>'
            + "".join(trs) + "</hp:tbl>")


def table_para(header, rows, widths, **kw) -> str:
    """표는 '문자처럼 취급' 되어 문단 안 run 에 들어간다."""
    return (f'<hp:p id="{pid()}" paraPrIDRef="57" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0">'
            f'<hp:run charPrIDRef="74">{table_xml(header, rows, widths, **kw)}</hp:run></hp:p>')


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as f:
        head = f.read(24)
    w, h = struct.unpack(">II", head[16:24])
    return w, h


def pic_para(binary_id: str, img: Path, max_w: int = TEXT_W - 2000) -> str:
    px_w, px_h = png_size(img)
    # 한컴이 그림을 넣을 때의 실측: 1 px = 75 HWPUNIT(96dpi 가정), 축소는 scaMatrix 와 curSz/sz 로 표현
    org_w, org_h = px_w * 75, px_h * 75
    scale = min(1.0, max_w / org_w)
    cur_w, cur_h = int(org_w * scale), int(org_h * scale)
    pic = (f'<hp:pic id="{pid()}" zOrder="1" numberingType="PICTURE" textWrap="TOP_AND_BOTTOM" textFlow="BOTH_SIDES" lock="0" '
           f'dropcapstyle="None" href="" groupLevel="0" instid="{pid()}" reverse="0">'
           f'<hp:offset x="0" y="0"/><hp:orgSz width="{org_w}" height="{org_h}"/><hp:curSz width="{cur_w}" height="{cur_h}"/>'
           f'<hp:flip horizontal="0" vertical="0"/><hp:rotationInfo angle="0" centerX="0" centerY="0" rotateimage="1"/>'
           f'<hp:renderingInfo><hc:transMatrix e1="1" e2="0" e3="0" e4="0" e5="1" e6="0"/>'
           f'<hc:scaMatrix e1="{scale:.6f}" e2="0" e3="0" e4="0" e5="{scale:.6f}" e6="0"/>'
           f'<hc:rotMatrix e1="1" e2="0" e3="0" e4="0" e5="1" e6="0"/></hp:renderingInfo>'
           f'<hp:imgRect><hc:pt0 x="0" y="0"/><hc:pt1 x="{org_w}" y="0"/><hc:pt2 x="{org_w}" y="{org_h}"/><hc:pt3 x="0" y="{org_h}"/></hp:imgRect>'
           f'<hp:imgClip left="0" right="0" top="0" bottom="0"/><hp:inMargin left="0" right="0" top="0" bottom="0"/>'
           f'<hc:img binaryItemIDRef="{binary_id}" bright="0" contrast="0" effect="REAL_PIC" alpha="0"/><hp:effects/>'
           f'<hp:sz width="{cur_w}" widthRelTo="ABSOLUTE" height="{cur_h}" heightRelTo="ABSOLUTE" protect="0"/>'
           f'<hp:pos treatAsChar="1" affectLSpacing="0" flowWithText="1" allowOverlap="0" holdAnchorAndSO="0" vertRelTo="PARA" '
           f'horzRelTo="PARA" vertAlign="TOP" horzAlign="CENTER" vertOffset="0" horzOffset="0"/>'
           f'<hp:outMargin left="0" right="0" top="0" bottom="0"/></hp:pic>')
    return (f'<hp:p id="{pid()}" paraPrIDRef="57" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0">'
            f'<hp:run charPrIDRef="74">{pic}</hp:run></hp:p>')


def cover_box(lines: list[str], charpr: int, bf: int, height: int) -> str:
    paras = "".join(para(line, 57, charpr) for line in lines)
    tc = (f'<hp:tc header="0" hasMargin="1" protect="0" editable="0" dirty="0" borderFillIDRef="{bf}">'
          f'<hp:subList id="" textDirection="HORIZONTAL" lineWrap="BREAK" vertAlign="CENTER" linkListIDRef="0" linkListNextIDRef="0" '
          f'textWidth="{TEXT_W}" textHeight="0" hasTextRef="0" hasNumRef="0">{paras}</hp:subList>'
          f'<hp:cellAddr colAddr="0" rowAddr="0"/><hp:cellSpan colSpan="1" rowSpan="1"/>'
          f'<hp:cellSz width="{TEXT_W}" height="{height}"/><hp:cellMargin left="500" right="500" top="400" bottom="400"/></hp:tc>')
    tbl = (f'<hp:tbl id="{pid()}" zOrder="0" numberingType="TABLE" textWrap="TOP_AND_BOTTOM" textFlow="BOTH_SIDES" lock="0" '
           f'dropcapstyle="None" pageBreak="NONE" repeatHeader="0" rowCnt="1" colCnt="1" cellSpacing="0" borderFillIDRef="3" noAdjust="0">'
           f'<hp:sz width="{TEXT_W}" widthRelTo="ABSOLUTE" height="{height}" heightRelTo="ABSOLUTE" protect="0"/>'
           f'<hp:pos treatAsChar="1" affectLSpacing="0" flowWithText="1" allowOverlap="0" holdAnchorAndSO="0" vertRelTo="PARA" '
           f'horzRelTo="PARA" vertAlign="TOP" horzAlign="LEFT" vertOffset="0" horzOffset="0"/>'
           f'<hp:outMargin left="141" right="141" top="141" bottom="141"/><hp:inMargin left="141" right="141" top="141" bottom="141"/>'
           f'<hp:tr>{tc}</hp:tr></hp:tbl>')
    return (f'<hp:p id="{pid()}" paraPrIDRef="57" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0">'
            f'<hp:run charPrIDRef="74">{tbl}</hp:run></hp:p>')


def footer_ctrl() -> str:
    """바닥글: 가운데 '- 쪽번호 -'."""
    inner = (f'<hp:p id="{pid()}" paraPrIDRef="57" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0">'
             f'<hp:run charPrIDRef="74"><hp:t>- </hp:t></hp:run>'
             f'<hp:run charPrIDRef="74"><hp:ctrl><hp:autoNum num="1" numType="PAGE"><hp:autoNumFormat type="DIGIT" userChar="" prefixChar="" suffixChar="" supscript="0"/></hp:autoNum></hp:ctrl></hp:run>'
             f'<hp:run charPrIDRef="74"><hp:t> -</hp:t></hp:run></hp:p>')
    return (f'<hp:ctrl><hp:footer id="{pid()}" applyPageType="BOTH"><hp:subList id="" textDirection="HORIZONTAL" lineWrap="BREAK" '
            f'vertAlign="TOP" linkListIDRef="0" linkListNextIDRef="0" textWidth="{TEXT_W}" textHeight="0" hasTextRef="0" hasNumRef="0">'
            f'{inner}</hp:subList></hp:footer></hp:ctrl>')


def build_md() -> str:
    lines = [f"# {C.TITLE}", "", f"{C.SUBTITLE[0]} {C.SUBTITLE[1]} · {C.TEAM} · {C.DATE}", ""]
    h1_no = 0
    for blk in C.T:
        kind = blk[0]
        if kind == "h1":
            h1_no += 1
            lines += [f"## {h1_no}. {blk[1]}", ""]
        elif kind == "h2":
            lines += [f"### {blk[1]}", ""]
        elif kind == "h3":
            lines += [f"#### {blk[1]}", ""]
        elif kind == "sq":
            lines += [f"- **{blk[1]}**"]
        elif kind == "circ":
            lines += [f"  - {blk[1]}", ""]
        elif kind == "note":
            lines += [blk[1], ""]
        elif kind == "table":
            _, caption, header, rows, _ = blk
            esc = lambda c: c.replace("|", "\\|").replace("\n", "<br>")
            lines += [f"**{caption}**", "", "| " + " | ".join(header) + " |", "|" + "---|" * len(header)]
            lines += ["| " + " | ".join(esc(c) for c in r) + " |" for r in rows]
            lines.append("")
        elif kind == "figure":
            lines += [f"![{blk[2]}]({blk[1]})", "", f"*{blk[2]}*", ""]
    return "\n".join(lines) + "\n"


def build(template: Path, out_dir: Path) -> Path:
    zin = zipfile.ZipFile(template)
    sec = zin.read("Contents/section0.xml").decode("utf-8")
    # 루트 여는 태그 ~ 첫 문단(secPr 포함) 추출
    root_open = sec[: sec.find("<hp:p ")]
    first_p_end = sec.find("</hp:p>") + len("</hp:p>")
    first_p = sec[sec.find("<hp:p "): first_p_end]
    first_p = re.sub(r"<hp:linesegarray>.*?</hp:linesegarray>", "", first_p, flags=re.S)
    # 첫 문단의 텍스트 run 은 제거하고 secPr·colPr ctrl 만 남긴다
    secpr = re.search(r"<hp:secPr .*?</hp:secPr>", first_p, flags=re.S).group(0)
    ctrls = "".join(re.findall(r"<hp:ctrl>.*?</hp:ctrl>", first_p, flags=re.S))
    # 표지 쪽은 쪽번호 숨김
    secpr = secpr.replace('hideFirstPageNum="0"', 'hideFirstPageNum="1"').replace('hideFirstFooter="0"', 'hideFirstFooter="1"')
    body: list[str] = []
    # ---- 표지 ----
    body.append(f'<hp:p id="{pid()}" paraPrIDRef="57" styleIDRef="0" pageBreak="0" columnBreak="0" merged="0">'
                f'<hp:run charPrIDRef="74">{secpr}{ctrls}{footer_ctrl()}</hp:run></hp:p>')
    body.append(empty())
    body.append(cover_box([C.TITLE], 51, 3, 2600))
    body.append(empty())
    body.append(cover_box(list(C.SUBTITLE), 49, 15, 9000))
    for _ in range(16):
        body.append(empty())
    body.append(para(C.DATE, 57, 50))
    body.append(empty())
    body.append(para(C.TEAM, 57, 58))
    # ---- 본문 ----
    first_h1 = True
    images: list[tuple[str, Path]] = []
    for idx, blk in enumerate(C.T):
        kind = blk[0]
        next_kind = C.T[idx + 1][0] if idx + 1 < len(C.T) else "end"
        next_is_heading = next_kind in ("h1", "h2", "h3")
        if kind == "h1":
            body.append(para(blk[1], 66, 82, page_break=first_h1))
            first_h1 = False
        elif kind == "h2":
            body.append(para(" " + blk[1], 38, 58))
        elif kind == "h3":
            body.append(para(blk[1], 54, 54))
        elif kind == "sq":
            body.append(para(blk[1], 67, 66))
        elif kind == "circ":
            body.append(para(blk[1], 52, 65))
        elif kind == "note":
            body.append(para(blk[1], 0, 74))
        elif kind == "table":
            _, caption, header, rows, widths = blk
            body.append(para(caption, 56, 78))
            body.append(table_para(header, rows, widths))
            if not next_is_heading:
                body.append(empty())
        elif kind == "figure":
            img = out_dir / blk[1]
            if img.exists():
                bid = f"image{len(images) + 1}"
                images.append((bid, img))
                body.append(pic_para(bid, img))
            body.append(para(blk[2], 57, 78))
            if not next_is_heading:
                body.append(empty())
    (out_dir / "소프트웨어공학 프로젝트 2차 산출 보고서_한벗.md").write_text(build_md(), encoding="utf-8")
    root_close = "</hs:sec>"
    section = root_open + "".join(body) + root_close

    # ---- content.hpf: 그림 항목 교체 ----
    hpf = zin.read("Contents/content.hpf").decode("utf-8")
    hpf = re.sub(r'<opf:item id="image\d+"[^>]*/>', "", hpf)
    items = "".join(f'<opf:item id="{bid}" href="BinData/{bid}.png" media-type="image/png" isEmbeded="1"/>' for bid, _ in images)
    hpf = hpf.replace("</opf:manifest>", items + "</opf:manifest>")

    out = out_dir / "소프트웨어공학 프로젝트 2차 산출 보고서_한벗.hwpx"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zout:
        # mimetype 은 압축 없이 첫 항목
        zout.writestr(zipfile.ZipInfo("mimetype"), zin.read("mimetype"), compress_type=zipfile.ZIP_STORED)
        for info in zin.infolist():
            name = info.filename
            if name == "mimetype" or name.startswith("BinData/") or name in ("Contents/section0.xml", "Contents/content.hpf", "Contents/header.xml"):
                continue
            zout.writestr(name, zin.read(name))
        header = zin.read("Contents/header.xml").decode("utf-8")
        for pp in (66, 38, 54):
            m = re.search(r'<hh:paraPr id="%d".*?</hh:paraPr>' % pp, header, flags=re.S)
            header = header.replace(m.group(0), m.group(0).replace('keepWithNext="0"', 'keepWithNext="1"'))
        zout.writestr("Contents/header.xml", header.encode("utf-8"))
        zout.writestr("Contents/section0.xml", section.encode("utf-8"))
        zout.writestr("Contents/content.hpf", hpf.encode("utf-8"))
        for bid, img in images:
            zout.writestr(f"BinData/{bid}.png", img.read_bytes())
    return out


if __name__ == "__main__":
    template = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out = build(template, out_dir)
    print("saved", out, out.stat().st_size // 1024, "KB")
