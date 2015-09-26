(function() {

  /**
   * app.messages Module
   *
   * mesages-form directive
   */
  angular.module('app.messages').directive('messagesForm', MessagesForm);

  function MessagesForm() {

    var directive = {
      templateUrl: '/modules/messages/messages-form.html',
      restrict: 'E',
      scope: {},
      controller: 'MessagesFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
