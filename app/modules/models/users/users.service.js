(function() {
  'use strict';

  /**
   * app.usersService Module
   *
   * usersService utils
   */
  angular.module('app').factory('usersService', usersService);

  /* @ngInject */
  function usersService(_, $sessionStorage, $localStorage, corbelDriver, corbel, config) {

    // sessionStorage by default
    var storage = $sessionStorage;

    var services = {
      login: login,
      logout: logout,
      signup: signup,
      getMe: getMe,
      isLogged: isLogged,
      isLoggedSync: isLoggedSync
    };

    return services;

    function _resetAll() {
      $localStorage.$reset();
      $sessionStorage.$reset();
      storage = $sessionStorage;
    }

    function login(username, password, persistent) {

      _resetAll();

      if (persistent) {
        storage = $localStorage;
      }
      return corbelDriver.iam.token().create({
        claims: {
          'basic_auth.username': username,
          'basic_auth.password': password
        }
      }).then(function(response) {
        storage.token = response.data;
        return getMe(true);
      });
    }

    function logout() {
      _resetAll();
      return corbelDriver.iam.user('me').signOut();
    }

    function signup(email, username, password) {
      return corbelDriver.iam.user().create({
        firstName: username,
        lastName: '',
        email: email,
        username: username,
        password: password,
        scopes: config.get('corbel.userScopes').split(' ')
      });
    }

    /**
     * returns user data
     * @param  {boolean} force Forces app to request data
     * @return {Promise}       Promise that resolves with user data
     */
    function getMe(force) {
      if (force) {
        return corbelDriver.iam.user('me').get().then(function(response) {
          storage.user = response.data;
          return response.data;
        });
      } else {
        return storage.user ? Promise.resolve(storage.user) : Promise.reject();
      }
    }

    /**
     * Returns whenever user is logged in or not
     * Checks if there is a persisted session and config corbelDriver with it
     * @param  {boolean}  force Forces backend request check
     * @return {Promise}        A promise that resolves if the user is logged. Otherwise, rejects 
     */
    function isLogged(force) {
      if ($localStorage.token) {
        storage = $localStorage;
      }
      if (storage.token) {
        corbelDriver.config.set(corbel.Iam.IAM_TOKEN, storage.token);
      }

      return getMe(force);
    }

    /**
     * Returns whenever user is logged in or not
     * @return {Boolean} true if the user is logged. Otherwise, false 
     */
    function isLoggedSync() {
      if ($localStorage.token) {
        storage = $localStorage;
      }
      if (storage.token) {
        corbelDriver.config.set(corbel.Iam.IAM_TOKEN, storage.token);
      }

      return storage.user;
    }

  }

})();
