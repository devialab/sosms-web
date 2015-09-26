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
    'app.account',
    'app.landing',
    'app.login',
    'app.routes',
    'app.user-layout'

  ]).config(configure).run(init);

  /* @ngInject */
  function configure($translateProvider, corbelDriverProvider, configProvider, defaultLang) {

    /**
     * ANGULAR-TRANSLATE
     */

    $translateProvider.translations(defaultLang.name, defaultLang.values);

    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
      'prefix': 'json/lang/',
      'suffix': '.json'
    });

    /**
     * FOUC - Flash of untranslated content
     * Force default language that is inyected in build time with grunt
     * https://github.com/angular-translate/angular-translate/issues/921
     */
    $translateProvider.preferredLanguage(defaultLang.name);


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