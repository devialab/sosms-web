(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.login:LoginFormCtrl
   * @description
   * # LoginFormCtrl
   * A module to manage login form
   */
  angular.module('app.login')
    .controller('LoginFormCtrl', LoginFormCtrl);

  /* @ngInject */
  function LoginFormCtrl($state, usersService) {

    var vm = this;

    vm.login = login;

    return vm;

    function login(username, password, persistent) {
      return usersService.login(username, password, persistent).then(function() {
        return $state.go('user.portfolio');
      });
    }

  }

})();
