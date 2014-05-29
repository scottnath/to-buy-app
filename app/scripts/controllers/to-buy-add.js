define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.controllers.ToBuyAddCtrl', [])
    .controller('ToBuyAddCtrl', function ($scope,tobuyStorage, $filter) {

      var tobuys = $scope.tobuys = tobuyStorage.get();
      console.log('tobuys');
      console.log(tobuys);
      $scope.newTobuy = '';
      $scope.addTobuy = function () {
        var newTobuy = $scope.newTobuy.trim();
        var newTobuyCat = $scope.newTobuyCat;
        var newTobuyPrice = $scope.newTobuyPrice;
        var newTobuyImportance = $scope.newTobuyImportance;
        if (!newTobuy.length) {
          return;
        }

        tobuys.push({
          title: newTobuy,
          category: newTobuyCat,
          price: newTobuyPrice,
          importance: newTobuyImportance,
          completed: false
        });

        $scope.newTobuy = '';
        $scope.newTobuyCat = '';
        $scope.newTobuyPrice = '';
        $scope.newTobuyImportance = '';
      };

      $scope.$watch('tobuys', function (newValue, oldValue) {
        console.log('watch');
        $scope.remainingCount = $filter('filter')(tobuys, { completed: false }).length;
        $scope.completedCount = tobuys.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount;
        if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
          tobuyStorage.put(tobuys);
        }
      }, true);
    });
});
