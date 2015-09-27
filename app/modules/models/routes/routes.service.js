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
      set: set,
      remove: remove
    };

    return services;

    function get(telephone) {
      return corbelDriver.resources.resource('sosms:InternalRoute', telephone).get();
    }

    function set(telephone, route) {
      return corbelDriver.resources.resource('sosms:Route', telephone).update(route);
    }

    function remove(telephone, password) {
      return corbelDriver.resources.resource('sosms:Route', telephone).delete({
        data: {
          password: password
        }
      });
    }

  }

})();
