#!/usr/bin/env bash
set -euo pipefail

SESSION_NAME="jointhegrid-dev"
PORT=43123
ROOT="/workspace"

if tmux -f /exec-daemon/tmux.portal.conf has-session -t "=$SESSION_NAME" 2>/dev/null; then
  exit 0
fi

tmux -f /exec-daemon/tmux.portal.conf new-session -d -s "$SESSION_NAME" -c "$ROOT" -- "${SHELL:-bash}" -l -c "npm run dev -- --hostname 127.0.0.1 --port ${PORT}"

for _ in $(seq 1 60); do
  if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
    exit 0
  fi
  sleep 1
done

exit 0
