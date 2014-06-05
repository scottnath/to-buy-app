define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppV3App.directives.ToBuyForm', [])
    .directive('toBuyForm', function () {
      return {
        templateUrl: 'views/to-buy-form.html',
        restrict: 'E'
      };
    });
});
