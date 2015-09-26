// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-10-22 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // PhantomJS Promise polifyll
      // http://stackoverflow.com/questions/29391111/karma-phantomjs-and-es6-promises
      'node_modules/babel-core/browser-polyfill.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/corbel-js/dist/corbel.js',
      'bower_components/underscore/underscore.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-corbel/dist/angular-corbel.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-underscore-module/angular-underscore-module.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/ngstorage/ngStorage.js',
      'app/modules/**/*.module.js',
      'app/modules/**/*.js',
      'app/*.module.js',
      'app/*.js',
      '.tmp/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    preprocessors: {
      'app/**/*.js': 'coverage'
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
      // 'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    reporters: ['spec', 'coverage']
  });
};
