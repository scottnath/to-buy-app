/*jshint unused: vars */
define(['angular', 'restangular', 'controllers/main', 'directives/to-buy-form', 'controllers/to-buy-add', 'controllers/to-buy-edit', 'controllers/add', 'controllers/edit', 'decorators/restangulardecorator']/*deps*/, function (angular, MainCtrl, ToBuyFormDirective, ToBuyAddCtrl, ToBuyEditCtrl, AddCtrl, EditCtrl, RestangularDecorator)/*invoke*/ {
  'use strict';

  return angular.module('toBuyAppV3App', ['toBuyAppV3App.controllers.MainCtrl',
  'toBuyAppV3App.directives.ToBuyForm',
  'toBuyAppV3App.controllers.ToBuyAddCtrl',
  'toBuyAppV3App.controllers.ToBuyEditCtrl',
  'toBuyAppV3App.controllers.AddCtrl',
  'toBuyAppV3App.controllers.EditCtrl',
  'toBuyAppV3App.decorators.Restangular',

/*angJSDeps*/
    'restangular',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/edit/:tobuyId', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        resolve: {
          tobuy: function(Restangular, $route){
            return Restangular.one('to-buy-items', $route.current.params.tobuyId).get();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
});
