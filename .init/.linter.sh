#!/bin/bash
cd /home/kavia/workspace/code-generation/minimalist-to-do-list-243862-243876/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

