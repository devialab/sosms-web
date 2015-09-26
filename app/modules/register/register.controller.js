(function() {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterCtrl', RegisterCtrl);

  /* @ngInject */
  function RegisterCtrl($state, registerService) {

    var vm = this;
    vm.register = register;
    vm.verify = verify;

    return vm;

    function register(telephone) {
      var registration = {
        number: '00' + telephone
      };
      return registerService.register(registration);
    }

    function verify(telephone, password) {
      var verification  = {
        password: password
      };
      return registerService.verify('00' + telephone, verification).then(function() {
        $state.go('layout.index');
      });
    }
  }

})();
