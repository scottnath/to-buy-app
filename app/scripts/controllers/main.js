define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.controllers.MainCtrl', ['restangular'])
    .controller('MainCtrl', function ($scope,Restangular) {
      $scope.sites = Restangular.all('to-buy-items').getList().$object;
      $scope.awesomeThings3 = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $scope.predicate = '-age';
    });
});
