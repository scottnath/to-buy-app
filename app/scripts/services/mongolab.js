define(['angular','restangular','angular-route'], function (angular,restangular,ngRoute) {
  'use strict';

  angular.module('toBuyAppApp.services.Mongolab', ['restangular','ngRoute'])
    .constant('apiKey', 'jCPIfbyVT_J_vdsMkm6Nb87OzRouF6mq')
    .config(function(RestangularProvider, apiKey){
      RestangularProvider.setBaseUrl(
        'https://api.mongolab.com/api/1/databases/scottnath-tobuy/collections');
      RestangularProvider.setDefaultRequestParams({
        apiKey: apiKey
      })
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });

      RestangularProvider.setRequestInterceptor(
        function(elem, operation, what){
          if(operation === 'put'){
            elem._id = undefined;
            return elem;
          }
          return elem;
        }
      )
    });
});
