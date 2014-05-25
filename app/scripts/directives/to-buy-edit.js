define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.directives.ToBuyEdit', [])
  	.directive('toBuyEdit', function () {
      return {
      	templateUrl: 'views/to-buy-edit.html',
      	restrict: 'E'
      };
  	});
});
