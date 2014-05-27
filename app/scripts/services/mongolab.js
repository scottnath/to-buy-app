define(['angular','restangular'], function (angular,restangular) {
  'use strict';

  angular.module('toBuyAppApp.services.Mongolab', [])
    config(function(RestangularProvider, apiKey){
      RestangularProvider.setBaseUrl(
        'https://api.mongolab.com/api/1/databases/nbcuots-sites/collections');
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
