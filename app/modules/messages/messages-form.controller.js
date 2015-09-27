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
  function MessagesFormCtrl($scope, $state, messagesService) {

    var vm = this;

    vm.send = send;

    return vm;

    function send(telephone, body) {
      if (telephone === undefined || body === undefined || body === '') {
        return;
      }
      var country = $('.country.active').data('dial-code');
      var messageObject = {
        to: '00' + country + telephone,
        message: body
      };
      messagesService.send(messageObject).then(function() {
        _reset();
        $scope.$digest();
        alert('Sended!');
      }).catch(function(response) {
        alert('Ops! Try it later...');
        console.error(response);
      });
    }

    function _reset() {
      vm.code = undefined;
      vm.telephone = undefined;
      vm.message = undefined;
    }

  }

})();
