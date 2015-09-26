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

    function send(message) {
      //corbel
      corbelDriver.resources.collection('sosms:message').update(message);
      return Promise.resolve(routeMock);
    }

  }

})();
