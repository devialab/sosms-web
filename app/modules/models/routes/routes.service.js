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
      getAll: getAll,
      add: add,
      remove: remove
    };

    var routeMock = [{
      id: '1',
      form: '+34 123 123 123',
      to: {
        value: 'email@domain.com',
        type: 'email'
      }
    }, {
      id: '2',
      form: '+34 123 123 123',
      to: {
        value: '+33 123 123 123',
        type: 'phone'
      }
    }, {
      id: '3',
      form: '+34 123 123 123',
      to: {
        value: '+33 123 123 123',
        type: 'email2@domain.com'
      }
    }];

    return services;

    function getAll() {
      return Promise.resolve(routeMock);
    }
    function add(route) {
      return Promise.resolve();
    }
    function remove(routeId) {
      return Promise.resolve();
    }

  }

})();
