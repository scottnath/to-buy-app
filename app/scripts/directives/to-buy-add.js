define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.directives.ToBuyAdd', [])
    .directive('toBuyAdd', function () {
      return {
        templateUrl: 'views/to-buy-add-form.html',
        restrict: 'E',
        controller: 'ToBuyAddCtrl'
      };
    });
});
