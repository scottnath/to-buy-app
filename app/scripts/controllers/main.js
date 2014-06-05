define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppV3App.controllers.MainCtrl', ['restangular'])
    .controller('MainCtrl', function ($scope,$location,Restangular) {
      $scope.tobuys = Restangular.all('to-buy-items').getList().$object;

      $scope.destroy = function(tobuy) {
        console.log(tobuy);
        tobuy.remove().then(function() {
          $location.path('/list');
        });
      };

    });
});
