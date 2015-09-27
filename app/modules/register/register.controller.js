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
      var country = $('.country.active').data('dial-code');
      var registration = {
        number: '00' + country + telephone
      };
      return registerService.register(registration);
    }

    function verify(telephone, password) {
      var country = $('.country.active').data('dial-code');
      var verification = {
        password: password
      };
      return registerService.verify('00' + country + telephone, verification).then(function() {
        $state.go('layout.index');
      });
    }
  }

})();
