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

    $scope.$watch('vm.sourcePhoneCode', function() {
      if (vm.sourcePhoneCode && vm.sourcePhone) {
        vm.phone = '00' + vm.sourcePhoneCode + vm.sourcePhone;
        getRoute();
      }
    });

    $scope.$watch('vm.sourcePhone', function() {
      if (vm.sourcePhoneCode && vm.sourcePhone) {
        vm.phone = '00' + vm.sourcePhoneCode + vm.sourcePhone;
        getRoute();
      }
    });

    return vm;

    function addRoute() {
      if (vm.type === 'phone') {
        vm.value = '00' + vm.targetPhoneCode + vm.targetPhone;
      } else {
        vm.value = vm.targetEmail;
      }
      if (!vm.phone || !vm.password || !vm.value) {
        return;
      }
      var route = {
        type: vm.type,
        value: vm.value,
        password: vm.password
      };
      routesService.set(vm.phone, route).then(function() {
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
      routesService.get(vm.phone).then(function(response) {
        vm.route = response.data;
        vm.type = vm.route.type;
        vm.targetPhone = vm.route.value;
        vm.targetEmail = vm.route.value;
        $scope.$digest();
      });
    }

    function deleteRoute(phone) {
      routesService.remove(phone).then(function() {
        vm.route = undefined;
        $scope.$digest();
      });
    }
  }

})();
