(function() {
  'use strict';

  angular.module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  /* @ngInject */
  function HomeCtrl($location, $log) {
    var vm = this;

    vm.isLanding = isLanding;

    return vm;

    function isLanding() {
      return $location.path() === '/';
    }
  }

})();
