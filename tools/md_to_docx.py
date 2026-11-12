#!/usr/bin/env python3
"""보고서 Markdown → Word(.docx) 변환기 (표·그림·제목·목록 지원).

  uv run --with python-docx python3 tools/md_to_docx.py "<입력.md>" "<출력.docx>"

지원 문법: #~#### 제목, 문단, '- '/'❍ ' 불릿, '1. ' 번호 목록, | 표 |, ![alt](path) 그림, --- 구분선, **굵게**.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

BODY_FONT = "맑은 고딕"


def set_korean_font(run, size_pt: float | None = None, bold: bool | None = None) -> None:
    run.font.name = BODY_FONT
    rpr = run._element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = OxmlElement("w:rFonts")
        rpr.append(rfonts)
    rfonts.set(qn("w:eastAsia"), BODY_FONT)
    if size_pt:
        run.font.size = Pt(size_pt)
    if bold is not None:
        run.font.bold = bold


def add_inline(paragraph, text: str, size_pt: float = 10.5) -> None:
    """**굵게** 와 `코드` 를 처리해 run 으로 넣는다."""
    parts = re.split(r"(\*\*[^*]+\*\*|`[^`]+`)", text)
    for part in parts:
        if not part:
            continue
        if part.startswith("**") and part.endswith("**"):
            run = paragraph.add_run(part[2:-2])
            set_korean_font(run, size_pt, bold=True)
        elif part.startswith("`") and part.endswith("`"):
            run = paragraph.add_run(part[1:-1])
            set_korean_font(run, size_pt)
            run.font.color.rgb = RGBColor(0x33, 0x55, 0x99)
        else:
            run = paragraph.add_run(part)
            set_korean_font(run, size_pt)


def shade(cell, hex_fill: str) -> None:
    tc_pr = cell._element.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), hex_fill)
    tc_pr.append(shd)


def split_row(line: str) -> list[str]:
    return [c.strip() for c in line.strip().strip("|").split("|")]


def is_separator(line: str) -> bool:
    return bool(re.match(r"^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$", line.strip()))


def add_table(doc: Document, rows: list[list[str]]) -> None:
    ncol = max(len(r) for r in rows)
    table = doc.add_table(rows=len(rows), cols=ncol)
    table.style = "Table Grid"
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    for r_idx, row in enumerate(rows):
        for c_idx in range(ncol):
            text = row[c_idx] if c_idx < len(row) else ""
            cell = table.cell(r_idx, c_idx)
            cell.text = ""
            para = cell.paragraphs[0]
            add_inline(para, text, 9)
            para.paragraph_format.space_after = Pt(0)
            if r_idx == 0:
                shade(cell, "E8EEF7")
                for run in para.runs:
                    run.font.bold = True
    doc.add_paragraph()


def convert(md_path: Path, out_path: Path) -> None:
    doc = Document()
    for section in doc.sections:
        section.left_margin = section.right_margin = Cm(2.2)
        section.top_margin = section.bottom_margin = Cm(2.0)
    style = doc.styles["Normal"]
    style.font.name = BODY_FONT
    style.element.rPr.rFonts.set(qn("w:eastAsia"), BODY_FONT)
    style.font.size = Pt(10.5)

    lines = md_path.read_text(encoding="utf-8").splitlines()
    line_idx = 0
    table_buf: list[list[str]] = []

    def flush_table() -> None:
        nonlocal table_buf
        if table_buf:
            add_table(doc, table_buf)
            table_buf = []

    while line_idx < len(lines):
        line = lines[line_idx]
        stripped = line.strip()
        if stripped.startswith("|"):
            if not is_separator(stripped):
                table_buf.append(split_row(stripped))
            line_idx += 1
            continue
        flush_table()
        if not stripped:
            line_idx += 1
            continue
        if stripped == "---":
            doc.add_paragraph()
            line_idx += 1
            continue
        heading = re.match(r"^(#{1,4})\s+(.*)$", stripped)
        if heading:
            level = len(heading.group(1))
            text = heading.group(2).strip()
            if level == 1:
                para = doc.add_paragraph()
                para.alignment = WD_ALIGN_PARAGRAPH.CENTER
                run = para.add_run(text)
                set_korean_font(run, 20, bold=True)
            else:
                para = doc.add_heading(level=min(level - 1, 3))
                run = para.add_run(text)
                set_korean_font(run, {2: 15, 3: 12.5, 4: 11}[level], bold=True)
                run.font.color.rgb = RGBColor(0x1F, 0x2D, 0x4F)
            line_idx += 1
            continue
        image = re.match(r"^!\[(.*?)\]\((.*?)\)$", stripped)
        if image:
            img_path = (md_path.parent / image.group(2)).resolve()
            if img_path.exists():
                doc.add_picture(str(img_path), width=Cm(16))
                doc.paragraphs[-1].alignment = WD_ALIGN_PARAGRAPH.CENTER
            line_idx += 1
            continue
        if re.match(r"^그림 \d+\.", stripped) or re.match(r"^<표 [\d\-A-Z]+>", stripped):
            para = doc.add_paragraph()
            para.alignment = WD_ALIGN_PARAGRAPH.CENTER if stripped.startswith("그림") else WD_ALIGN_PARAGRAPH.LEFT
            run = para.add_run(stripped)
            set_korean_font(run, 9.5, bold=True)
            line_idx += 1
            continue
        bullet = re.match(r"^(?:-|❍|•)\s+(.*)$", stripped)
        if bullet:
            para = doc.add_paragraph(style="List Bullet")
            add_inline(para, bullet.group(1))
            line_idx += 1
            continue
        numbered = re.match(r"^(\d+)\.\s+(.*)$", stripped)
        if numbered:
            para = doc.add_paragraph()
            para.paragraph_format.left_indent = Cm(0.6)
            add_inline(para, f"{numbered.group(1)}. {numbered.group(2)}")
            line_idx += 1
            continue
        if stripped.startswith("> "):
            para = doc.add_paragraph()
            para.paragraph_format.left_indent = Cm(0.8)
            add_inline(para, stripped[2:])
            line_idx += 1
            continue
        para = doc.add_paragraph()
        add_inline(para, stripped)
        line_idx += 1
    flush_table()
    out_path.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(out_path))
    print(f"saved {out_path} ({out_path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    convert(Path(sys.argv[1]), Path(sys.argv[2]))
