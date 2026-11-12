#!/usr/bin/env bash
# 한컴 오피스(COM)로 HWPX 를 열어 쪽수를 출력하고 PDF 로 저장한다. 열기 실패 시 3회 재시도.
#   tools/hwpx_to_pdf.sh "<file.hwpx>" "<out.pdf>"
set -u
H=$(wslpath -w "$1"); P=$(wslpath -w "$2"); rm -f "$2"
for attempt in 1 2 3; do
  out=$(timeout 180 powershell.exe -NoProfile -Command "
\$h = New-Object -ComObject HWPFrame.HwpObject
\$h.RegisterModule('FilePathCheckDLL','FilePathCheckerModuleExample') | Out-Null
\$ok = \$h.Open('$H','HWPX','')
if (\$ok) { Write-Output ('pages=' + \$h.PageCount); Write-Output ('pdf=' + \$h.SaveAs('$P','PDF','')) } else { Write-Output 'open=False' }
\$h.Clear(1); \$h.Quit()" 2>&1 | tr -d '\r')
  echo "$out" | grep -q '^pages=' && { echo "$out"; exit 0; }
  echo "attempt $attempt failed: $out" >&2; sleep 3
done
exit 1
