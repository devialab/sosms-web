(function() {
  'use strict';

  angular.module('app.core', [
    // Angular modules
    'underscore',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'angular-corbel',

    // Cross module dependencies
    'app.config'
  ]);

})();
