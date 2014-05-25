define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings3 = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $scope.predicate = '-age';
    });
});
