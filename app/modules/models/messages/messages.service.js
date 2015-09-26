(function() {
  'use strict';

  /**
   * app.routesService Module
   *
   * routesService utils
   */
  angular.module('app').factory('messagesService', messagesService);

  /* @ngInject */
  function messagesService(_, corbelDriver, corbel, config) {

    var services = {
      send: send
    };

    var routeMock = 'OK';

    return services;

    function send(telephone, message) {
      return Promise.resolve(routeMock);
    }

  }

})();
