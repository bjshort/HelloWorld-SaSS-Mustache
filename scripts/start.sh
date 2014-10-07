#!/bin/bash
./node_modules/grunt-cli/bin/grunt buildcss

python -m SimpleHTTPServer 9090

printf "Done - go to http://0.0.0.0:9090/"