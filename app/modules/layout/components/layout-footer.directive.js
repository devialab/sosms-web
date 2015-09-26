(function() {

  /**
   * app.layout Module
   *
   * layoutFooter directive
   */
  angular.module('app.layout').directive('layoutFooter', LayoutFooter);

  function LayoutFooter() {

    var directive = {
      templateUrl: '/modules/layout/components/layout-footer.html',
      restrict: 'E',
      scope: {},
      controller: 'LayoutFooterCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
