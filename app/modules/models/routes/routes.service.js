(function() {
  'use strict';

  /**
   * app.routesService Module
   *
   * routesService utils
   */
  angular.module('app').factory('routesService', routesService);

  /* @ngInject */
  function routesService(_, corbelDriver, corbel, config) {

    var services = {
      get: get,
      add: add,
      remove: remove
    };

    return services;

    function get(telephone) {
      return corbelDriver.resources.resource('sosms:Route', telephone).get();
    }
    function add(telephone, route) {
      return corbelDriver.resources.resource('sosms:Route', telephone).update(route);
    }
    function remove(telephone) {
      return corbelDriver.resources.resource('sosms:Route', telephone).delete();
    }

  }

})();
