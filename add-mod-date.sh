# #!/bin/bash

# 현재 시간을 YYYY-MM-DDTHH:MM:SS+09:00 형식으로 얻기
current_time=$(date +"%Y-%m-%dT%H:%M:%S+09:00")

# Git stage에 있는 md 파일들 찾기
staged_files=$(git diff --name-only --cached | grep '.md$')

# 각 md 파일에 대해 lastmod 문자열이 포함된 줄을 현재 시간으로 업데이트
for file in $staged_files; do
  if grep -q 'lastmod' "$file"; then
    # lastmod 문자열이 포함된 줄을 현재 시간으로 업데이트
    sed -i '' -e "s/lastmod: .*/lastmod: $current_time/" "$file"
    sed -i '' -e "s/lastmod = .*/lastmod = $current_time/" "$file"
  else
    # date 문자열이 포함된 줄 바로 아래에 lastmod 추가
    if grep -q 'date =' "$file"; then
      # date 문자열이 포함된 줄 바로 아래에 lastmod 추가
      sed -i '' -e "/date = /a\\
lastmod = $current_time
" "$file"
    elif grep -q 'date:' "$file"; then
      # date 문자열이 포함된 줄 바로 아래에 lastmod 추가
      sed -i '' -e "/date: /a\\
lastmod: $current_time
" "$file"
    fi
  fi
done