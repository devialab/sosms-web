(function() {

  /**
   * app.layout Module
   *
   * layout-header directive
   */
  angular.module('app.layout').directive('layoutHeader', LayoutHeader);

  function LayoutHeader() {

    var directive = {
      templateUrl: '/modules/layout/components/layout-header.html',
      restrict: 'E',
      scope: {},
      controller: 'LayoutHeaderCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
