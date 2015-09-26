(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name app
   * @description
   * # sosms application
   *
   * Main module of the application.
   */
  angular.module('app', [
    'app.core',

    //features
    'app.home',
    'app.account',
    'app.layout',
    'app.login',
    'app.routes'

  ]).config(configure).run(init);

  /* @ngInject */
  function configure(corbelDriverProvider, configProvider) {

    /**
     * ANGULAR-CORBEL
     */

    corbelDriverProvider.setConfig({
      urlBase: configProvider.get('corbel.urlBase'),
      clientId: configProvider.get('corbel.clientId'),
      clientSecret: configProvider.get('corbel.clientSecret'),
      resourcesEndpoint: configProvider.get('resourcesEndpoint'),
      iamEndpoint: configProvider.get('iamEndpoint'),
      scopes: configProvider.get('corbel.scopes'),
      audience: configProvider.get('corbel.audience')
    });

  }

  /* @ngInject */
  function init(corbelDriver) {
    corbelDriver.iam.token().create();
  }

})();
