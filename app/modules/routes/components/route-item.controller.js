(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.landing:RouterItemCtrl
   * @description
   * # RouterItemCtrl
   * A module to manage landing footer
   */
  angular.module('app.routes')
    .controller('RouterItemCtrl', RouterItemCtrl);

  /* @ngInject */
  function RouterItemCtrl($scope) {

    var vm = this;

    vm.sendForm = sendForm;

    return vm;

    function sendForm() {
      alert('lol');
      // performa action
    }

  }

})();
