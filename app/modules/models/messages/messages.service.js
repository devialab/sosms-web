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

    return services;

    function send(message) {
      return corbelDriver.resources.collection('sosms:Message').add(message);
    }

  }

})();
