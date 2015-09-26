(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.layout:DonateFormCtrl
   * @description
   * # DonateFormCtrl
   * A module to manage layout footer
   */
  angular.module('app.layout')
    .controller('DonateFormCtrl', DonateFormCtrl);

  /* @ngInject */
  function DonateFormCtrl(cfpLoadingBar, $timeout) {

    var vm = this;

    vm.amount = 5;

    vm.donate = donate;
    vm.setAmount = setAmount;

    return vm;

    function donate(amount) {
      console.log('donate', amount);

      cfpLoadingBar.start();

      $timeout(function() {
        cfpLoadingBar.complete();
        alert('Woho! Thanks!');
      }, 1000);

    }

    function setAmount(amount) {
      vm.amount = amount;
    }

  }

})();
