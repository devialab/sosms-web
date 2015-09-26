(function() {

  /**
   * app.layout Module
   *
   * donateForm directive
   */
  angular.module('app.layout').directive('donateForm', DonateForm);

  function DonateForm() {

    var directive = {
      templateUrl: '/modules/layout/components/donate-form.html',
      restrict: 'E',
      scope: {},
      controller: 'DonateFormCtrl',
      controllerAs: 'vm',
      bindToController: true

    };
    return directive;

  }

})();
