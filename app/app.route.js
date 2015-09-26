(function() {
  'use strict';

  angular
    .module('app')
    .config(appConfig)
    .run(appRun);


  /* @ngInject */
  function appConfig($stateProvider, $urlRouterProvider) {

    var base = 'modules/';

    // @todo: controllerAs issue: https://github.com/driftyco/ionic/issues/3058
    $stateProvider.state('layout', {
        abstract: true,
        templateUrl: base + 'layout/layout.html'
      })
      .state('layout.routes', {
        url: '/routes',
        templateUrl: base + 'routes/routes.html',
        controller: 'RoutesCtrl',
        controllerAs: 'vm',
        data: {
          requireLogin: true
        },
        resolve: {
          routes: function(routesService) {
            return routesService.getAll();
          }
        }
      })
      .state('layout.account', {
        url: '/account',
        templateUrl: base + 'account/account.html',
        data: {
          requireLogin: true
        }
      })
      .state('layout.index', {
        url: '/home',
        templateUrl: base + 'home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise(function($injector) {
      var usersService = $injector.get('usersService');
      return usersService.isLoggedSync() ? '/routes' : '/home';
    });

  }

  /* @ngInject */
  function appRun($rootScope, $state, usersService) {

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      toState.data = toState.data || {};
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && !usersService.isLoggedSync()) {
        event.preventDefault();
        return $state.go('login');
      }
    });
  }

})();
