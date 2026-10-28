#!/usr/bin/env python3
"""Wiki 뷰어 화면을 캡처한다. usage: python3 tools/wiki_shot.py [base_url] [out_dir]"""
import sys, os, time
from playwright.sync_api import sync_playwright
base = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8791"
out = sys.argv[2] if len(sys.argv) > 2 else ".omc/orchestra/screens"
os.makedirs(out, exist_ok=True)
views = ["status", "pages", "graph", "page/overview-market-demand"]
with sync_playwright() as p:
    b = p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    pg = b.new_page(viewport={"width": 1280, "height": 900})
    errors = []
    pg.on("pageerror", lambda e: errors.append(str(e)))
    pg.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
    for v in views:
        if v == views[0]:
            pg.goto(f"{base}/#{v}", wait_until="networkidle")
        else:
            pg.evaluate(f"location.hash = '#{v}'")
        time.sleep(12 if v == "graph" else 2.0)
        pg.screenshot(path=f"{out}/{v.replace('/', '_')}.png", full_page=(v not in ("graph", "status")))
        print("shot", v, pg.inner_text("#app")[:120].replace("\n", " | "))
    b.close()
    print("console/page errors:", errors or "none")
