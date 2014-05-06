module.exports = function(grunt) {

    var path = require('path');

    var config = require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/options'), //path to task.js files, defaults to grunt dir
        init: false, // don't auto load grunt config
        loadGruntTasks: { //can optionally pass options to load-grunt-tasks.
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });

    // add some path variables for use in task options
    config.distDir = 'dist/';

    // init config
    grunt.initConfig(config);

    grunt.registerTask('build', [
        'uglify',
        'copy'
    ]);

    // Default task(s).
    grunt.registerTask('default', ['build']);

};