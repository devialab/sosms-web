(function() {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsCtrl', SettingsCtrl);

  /* @ngInject */
  function SettingsCtrl() {

    var vm = this;

    vm.type = 'phone';

    return vm;
  }

})();
