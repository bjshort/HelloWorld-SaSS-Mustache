HelloWorld-SaSS-Mustache
========================

Simple Hello World app that uses npm & bower to build dependencies, SaSS, Mustache and JQuery to template.

----- To build dependencies -----
- Locate repo in terminal
- ./script/init.sh

----- To configure local API server -----
- Edit /server/config.yaml with correct local PostgreSQL details
- ./scripts/migrate-db.sh 
- Go into your database and add some stuff into your members table (Will add a smarter solution to this soon).

--------- To run ---------
- Locate repo in terminal
- ./script/start.sh
- visit http://127.0.0.1:8000 in your browser




--------- Dev ---------
- Running './node_modules/grunt-cli/bin/grunt' from the repo folder will enable grunt to 'watch' SaSS files and automatically comiple on the fly.
