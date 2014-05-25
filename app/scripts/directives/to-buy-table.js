define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.directives.ToBuyTable', [])
  	.directive('toBuyTable', function () {
      return {
      	templateUrl: 'views/to-buy-table.html',
      	restrict: 'E'
      };
  	});
});
