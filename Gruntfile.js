/*
 * Gruntfile to compile front sources
 */

module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/css/styles.min.css": "less/app.less"
        }
      }
    },

    uglify: {
      options: {
        mangle: false,
        beautify: true // unmin for debug easly
      },
      my_target: {
        files: {
          'public/js/script.min.js': [
            'angularjs/lib.js',
            'angularjs/config.js',
            'angularjs/services/*.js',
            'angularjs/directives/*.js',
            'angularjs/controllers/*.js'
          ]
        }
      }
    },

    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },

      scripts: {
        files: [
          'angularjs/*.js',
          'angularjs/controllers/*.js',
          'angularjs/directives/*.js',
          'angularjs/services/*.js'
        ],
        tasks: ['uglify'],
        options: {
          nospawn: false,
        },
      }

    }
  });

  grunt.registerTask('default', ['less', 'uglify']);
  grunt.registerTask('build', ['less', 'uglify']);
  grunt.registerTask('live', ['less', 'uglify', 'watch']);

};