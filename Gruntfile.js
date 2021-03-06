// Generated on 2014-10-22 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    hostname: 'localhost',
    defaultLang: 'en',
    ports: {
      server: grunt.option('serverPort') || 9000,
      test: grunt.option('testPort') || 9001,
      liveReload: grunt.option('liveReloadPort') || 35729
    }
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/{,**/}*.js'],
        tasks: ['newer:jshint:all', 'includeSource:server'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'karma:ci']
      },
      config: {
        files: ['<%= yeoman.app %>/json/config.json'],
        tasks: ['ngconstant']
      },
      compass: {
        files: [
          '<%= yeoman.app %>/styles/**/*.{scss,sass}',
          '<%= yeoman.app %>/modules/*/styles/**/*.{scss,sass}'
        ],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: ['<%= yeoman.app %>/*.html'],
        tasks: ['includeSource:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/*.html',
          '<%= yeoman.app %>/**/*.html',
          '<%= yeoman.app %>/**/*.json',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: appConfig.ports.server,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: appConfig.hostname,
        livereload: appConfig.ports.liveReload
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),

              connect.static(appConfig.app)
            ];
          }
        }
      },
      server: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),

              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: appConfig.ports.test,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),

              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('dist')
            ];
          }
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/{,**/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.sass-cache',
            '.tmp',
            'coverage',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      test: ['.tmp', 'coverage']
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
        //cwd: '<%= yeoman.app %>'
      },
      app: {
        src: [
          '<%= yeoman.app %>/index.html',
          '<%= yeoman.app %>/statics/*.html'
        ],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    includeSource: {
      options: {
        basePath: '<%= yeoman.app %>',
        baseUrl: '',
      },
      server: {
        files: {
          '.tmp/index.html': '<%= yeoman.app %>/index.html'
        }
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/index.html': '<%= yeoman.app %>/index.html'
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    ngconstant: {
      options: {
        name: 'app.const',
        dest: '.tmp/app.const.js',
        constants: {
          CONFIG: grunt.file.readJSON('app/json/config.json')
        }
      },
      build: {}
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/{,**/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.dist %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,**/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    concat: {
      // Only one 'use strict'
      useStrict: {
        options: {
          banner: '\'use strict\';\n',
          process: function(src, filepath) {
            return '// Source: ' +
              filepath + '\n' +
              src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        src: ['.tmp/concat/scripts/scripts.js'],
        dest: '.tmp/concat/scripts/scripts.js'
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html', 'modules/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'statics/{,*/}*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'img/{,*/}*',
            'fonts/*',
            'json/lang/*',
            'modules/**',
            '!modules/*/*.js'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '.',
          src: 'bower.json',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: 'bower_components/fontawesome/fonts',
          src: '*',
          dest: '<%= yeoman.dist %>/fonts'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      ci: {
        singleRun: true
      },
      coverage: {
        singleRun: true,
        reporters: ['spec', 'coverage'],
        preprocessors: {
          'app/**/*.js': 'coverage'
        }
      },
      serve: {
        browsers: [
          'Chrome'
        ]
      }
    }

  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'ngconstant',
      'includeSource:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('_test', [
    'clean:test',
    'ngconstant',
    'concurrent:test',
    'autoprefixer',
    'connect:test'
  ]);

  grunt.registerTask('serve:test', [
    'clean:server',
    '_test',
    'karma:serve'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    '_test',
    'karma:ci'
  ]);

  grunt.registerTask('test:coverage', [
    'clean:server',
    '_test',
    'karma:coverage'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'ngconstant',
    'includeSource:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat:generated',
    'concat:useStrict',
    'ngAnnotate',
    'copy:dist',
    // 'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
