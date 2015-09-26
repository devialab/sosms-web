(function() {
  'use strict';

  angular
    .module('app.routes')
    .controller('RoutesCtrl', RoutesCtrl);

  /* @ngInject */
  function RoutesCtrl(routes) {

    var vm = this;

    vm.routes = routes;

    return vm;
  }

})();
