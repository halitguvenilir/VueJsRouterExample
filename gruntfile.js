module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        // Sass
        sass: {
            dist: {
                files: {
                    'assets/css/style.min.css' : 'assets/_scss/main.scss'
                },
                options: {
                    compass: true,
                    sourceMap: false,
                    style: 'compressed'
                }
            }
        },

        // Uglify
        uglify: {
            build: {
                src: 'assets/js/scripts.js',
                dest: 'assets/js/scripts.min.js'
            }
        },

        jshint: {
            options: {
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            all: ['assets/js/scripts.js']
        },

        // AutoPrefixer
        autoprefixer: {
            options: {
                browsers: ['last 20 versions'],
                map: false,
            },
            dist: {
                files:{
                  'assets/css/style.min.css':'assets/css/style.min.css'
                }
            }
        },

        // Newer
        newer: {
            options: {
                override: function(details, include) {
                    if (details.task == 'sass') {
                        include(true); // Newer Sass Import Problem Fixer
                    }
                }
            }
        },

        // Watch files
        watch: {
            css: {
                files: 'assets/_scss/**/*.scss',
                tasks: ['newer:sass:dist:', 'autoprefixer:dist']
            },
            js: {
                files: 'assets/js/scripts.js',
                tasks: ['newer:uglify:build', 'newer:jshint']
            }
        },

        // Browser Sync
        browserSync: {
            files: [
                'assets/js/*.js',
                'assets/css/*.css',
                '*.php',
                '*/*.php',
                '*/*/*.php',
            ],
            options: {
                watchTask: true,
                proxy: 'hillsidebeachclub-accommodation.test'
            }
        }
    });

    // Load Task
    require('load-grunt-tasks')(grunt);

    // Register Task
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('deploy', ['sass:dist', 'autoprefixer:dist', 'uglify:build']);
}
