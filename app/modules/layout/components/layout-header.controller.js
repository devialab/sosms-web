(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.layout:LayoutHeaderCtrl
   * @description
   * # LayoutHeaderCtrl
   * A module to manage layout header
   */
  angular.module('app.layout')
    .controller('LayoutHeaderCtrl', LayoutHeaderCtrl);

  /* @ngInject */
  function LayoutHeaderCtrl($state, _, usersService) {

    var vm = this;

    vm.logout = logout;

    return vm;

    function logout() {
      return usersService.logout().then(function() {
        return $state.go('login');
      });
    }

  }

})();
