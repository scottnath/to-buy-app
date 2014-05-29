define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppApp.services.TobuyStorage', [])
    .factory('tobuyStorage', function () {
      var STORAGE_ID = 'tobuys-angularjs';
      console.log('tobuystorage triggered '+ STORAGE_ID);
      return {
        get: function () {
          return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function (todos) {
          localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        }
      };
    });
});
