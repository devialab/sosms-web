(function() {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsCtrl', SettingsCtrl);

  /* @ngInject */
  function SettingsCtrl($scope, routesService) {

    var vm = this;
    vm.type = 'phone';
    vm.addRoute = addRoute;
    vm.getRoute = getRoute;
    vm.deleteRoute = deleteRoute;

    return vm;

    function addRoute() {
      var sourceCountry = $('.source-phone-input .country.active').data('dial-code');
      var targetCountry = $('.target-phone-input .country.active').data('dial-code');
      var targetCountryString = $('.target-phone-input .country.active').data('country-code');
      var phone = '00' + sourceCountry + vm.phone;
      if (vm.type === 'phone') {
        vm.value = '00' + targetCountry + vm.targetPhone;
      } else {
        vm.value = vm.targetEmail;
      }
      if (!vm.phone || !vm.password || !vm.value) {
        return;
      }
      var route = {
        type: vm.type,
        value: vm.value,
        countryCode: targetCountry,
        country: targetCountryString,
        password: vm.password
      };
      routesService.set(phone, route).then(function() {
        vm.route = route;
        $scope.$digest();
      }).catch(function(response) {
        if (response.status === 404) {
          alert('Sorry, Phone not registered');
        }
      });
    }

    function getRoute() {
      if (!vm.phone) {
        return;
      }
      var sourceCountry = $('.source-phone-input .country.active').data('dial-code');
      routesService.get('00' + sourceCountry + vm.phone).then(function(response) {
        vm.route = response.data;
        vm.type = vm.route.type;
        if (vm.type === 'phone') {
          vm.targetPhone = vm.route.value.replace('00' + vm.route.countryCode, '');
          $('.target-phone-input input').intlTelInput('selectCountry', vm.route.country);
        } else {
          vm.targetEmail = vm.route.value;
        }
        $scope.$digest();
      });
    }

    function deleteRoute(phone) {
      var sourceCountry = $('.source-phone-input .country.active').data('dial-code');
      routesService.remove('00' + sourceCountry + phone).then(function() {
        vm.route = undefined;
        $scope.$digest();
      });
    }
  }

})();
