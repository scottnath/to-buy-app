/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/to-buy-list', 'directives/to-buy-add', 'directives/to-buy-table', 'directives/to-buy-edit', 'controllers/to-buy-add', 'services/tobuy-storage']/*deps*/, function (angular, MainCtrl, ToBuyListCtrl, ToBuyAddDirective, ToBuyTableDirective, ToBuyEditDirective, ToBuyAddCtrl, TobuyStorageService, TobuyStorageFactory)/*invoke*/ {
  'use strict';

  return angular.module('toBuyAppApp', ['toBuyAppApp.controllers.MainCtrl',
'toBuyAppApp.controllers.ToBuyListCtrl',
'toBuyAppApp.directives.ToBuyAdd',
'toBuyAppApp.directives.ToBuyTable',
'toBuyAppApp.directives.ToBuyEdit',
'toBuyAppApp.controllers.ToBuyAddCtrl',
'toBuyAppApp.services.TobuyStorage',
/*angJSDeps*/
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
        .otherwise({
          redirectTo: '/'
        });
    });
});
