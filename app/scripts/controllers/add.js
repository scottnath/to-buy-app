define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppV3App.controllers.AddCtrl', ['restangular'])
    .controller('AddCtrl', function ($scope,$location,Restangular) {
      $scope.save = function() {
        console.log('test');
        Restangular.all('to-buy-items').post($scope.tobuy).then(function(tobuy) {
          $location.path('/');
        });
      }
    });
});
