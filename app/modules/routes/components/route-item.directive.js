(function() {

  /**
   * app.landing Module
   *
   * routeItem directive
   */
  angular.module('app.routes').directive('routeItem', RouteItem);

  function RouteItem() {

    var directive = {
      templateUrl: '/modules/routes/components/route-item.html',
      restrict: 'E',
      scope: {},
      controller: 'RouteItemCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
