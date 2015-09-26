(function() {
  'use strict';

  /**
   * app.routesService Module
   *
   * routesService utils
   */
  angular.module('app').factory('registerService', registerService);

  /* @ngInject */
  function registerService(_, corbelDriver, corbel, config) {

    var services = {
      register: register,
      verify: verify
    };

    return services;

    function register(registration) {
      return corbelDriver.resources.collection('sosms:PhoneNumber').add(registration);
    }

    function verify(telephone, verification) {
      return corbelDriver.resources.resource('sosms:PhoneNumber', telephone).update(verification);
    }

  }

})();
