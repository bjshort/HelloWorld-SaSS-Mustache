#!/bin/bash
./node_modules/grunt-cli/bin/grunt buildcss

python ./scripts/server.py localhost & ./scripts/start-server.sh && fg
