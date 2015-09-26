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
  function DonateFormCtrl() {

    var vm = this;

    vm.donate = donate;

    return vm;

    function donate(amount) {
      console.log('donate', amount);
      alert('Woho! Thanks!');
    }

  }

})();