(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.login:SignupFormCtrl
   * @description
   * # SignupFormCtrl
   * A module to manage sign up
   */
  angular.module('app.login')
    .controller('SignupFormCtrl', SignupFormCtrl);

  /* @ngInject */
  function SignupFormCtrl($state, usersService) {

    var vm = this;

    vm.signup = signup;

    return vm;

    function signup(email, username, password) {
      return usersService.signup(email ,username, password).then(function() {
        return usersService.login(username, password);
      }).then(function() {
        $state.go('user.dashboard');
      });
    }

  }

})();
