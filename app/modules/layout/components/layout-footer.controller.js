(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.layout:LayoutFooterCtrl
   * @description
   * # LayoutFooterCtrl
   * A module to manage layout footer
   */
  angular.module('app.layout')
    .controller('LayoutFooterCtrl', LayoutFooterCtrl);

  /* @ngInject */
  function LayoutFooterCtrl($translate) {

    var vm = this;

    vm.setLang = setLang;

    return vm;

    function setLang(lang) {
      $translate.use(lang);
    }

  }

})();
