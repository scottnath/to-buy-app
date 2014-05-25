define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.directives.ToBuyAdd', [])
  	.directive('toBuyAdd', function (tobuyStorage) {
      return {
      	templateUrl: 'views/to-buy-add-form.html',
      	restrict: 'E',
        controller: 'ToBuyAddCtrl'
      };
  	});
});
