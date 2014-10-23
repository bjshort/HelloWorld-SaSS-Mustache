HelloWorld-SaSS-Mustache
========================

Simple Hello World app that uses npm & bower to build dependencies, SaSS, Mustache and JQuery to template.

----- To build dependencies -----
- Locate repo in terminal
- ./script/init.sh

----- To configure local API server -----
- Edit /server/config.yaml with correct local PostgreSQL details
- ./scripts/migrate-db.sh 

--------- To run ---------
- Locate repo in terminal
- ./script/start.sh
- visit http://0.0.0.0:9090 in your browser




--------- Dev ---------
- Running './node_modules/grunt-cli/bin/grunt' from the repo folder will enable grunt to 'watch' SaSS files and automatically comiple on the fly.
