(function() {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsCtrl', SettingsCtrl);

  /* @ngInject */
  function SettingsCtrl(routesService) {

    var vm = this;
    vm.addRoute = addRoute;
    vm.getRoute = getRoute;
    vm.deleteRoute = deleteRoute;

    return vm;

    function addRoute(telephone, type, value) {
      var route = {
        type: type,
        value: value
      };
      routesService.add(telephone, route);
    }

    function getRoute(telephone) {
      routesService.get(telephone);
    }

    function deleteRoute(telephone) {
      routesService.remove(telephone);
    }
  }

})();
