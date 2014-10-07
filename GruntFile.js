module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'assets/production/application.css' : 'assets/application.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);

};