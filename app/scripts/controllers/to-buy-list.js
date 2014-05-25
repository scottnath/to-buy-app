define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.controllers.ToBuyListCtrl', [])
    .controller('ToBuyListCtrl', function ($scope) {
      $scope.awesomeThings2 = [
        'HTML5 Boilerplate2',
        'AngularJS2',
        'Karma2'
      ];
    });
});
