define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppV3App.decorators.Restangular', ['restangular'])
    .constant('apiKey', 'jCPIfbyVT_J_vdsMkm6Nb87OzRouF6mq')
    .config(function(RestangularProvider, apiKey){
      RestangularProvider.setBaseUrl(
        'https://api.mongolab.com/api/1/databases/scottnath-tobuy/collections');
      RestangularProvider.setDefaultRequestParams({
        apiKey: apiKey
      });
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });

      RestangularProvider.setRequestInterceptor(
        function(elem, operation){
          console.log(elem);
          if(operation === 'put'){
            elem._id = undefined;
            return elem;
          }
          return elem;
        }
      );
    });
});
