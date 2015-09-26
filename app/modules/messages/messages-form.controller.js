(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name  app.login:MessagesFormCtrl
   * @description
   * # MessagesFormCtrl
   * A module to manage messages sending
   */
  angular.module('app.messages')
    .controller('MessagesFormCtrl', MessagesFormCtrl);

  /* @ngInject */
  function MessagesFormCtrl($state, messagesService) {

    var vm = this;

    vm.send = send;

    return vm;

    function send(telephone, body) {
      var messageObject = {
        to: '00' + telephone,
        message: body
      };
      messagesService.send(messageObject);
    }

  }

})();
