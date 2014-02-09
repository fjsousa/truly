module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          "public/css/main.css": "src/less/main.less",
          "public/css/main-mobile.css": "src/less/main-mobile.less"
        }
      },
      production: {
        files: {
          "public/css/main.css": "src/less/main.less",
          "public/css/main-mobile.css": "src/less/main-mobile.less"
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/html/',
            src: '**',
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'src/assets/',
            src: '**',
            dest: 'public/'
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.html', 'src/**/*.less'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less:development', 'copy']);

};