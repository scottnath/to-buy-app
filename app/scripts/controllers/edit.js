define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppV3App.controllers.EditCtrl', [])
    .controller('EditCtrl', function ($scope,$location,Restangular,tobuy) {
      var original = tobuy;
      $scope.tobuy = Restangular.copy(original);

      $scope.isClean = function() {
        return angular.equals(original, $scope.tobuy);
      }

      $scope.destroy = function() {
        original.remove().then(function() {
          $location.path('/');
        });
      };

      $scope.save = function() {
        $scope.tobuy.put().then(function() {
          $location.path('/');
        });
      };

    });
});
