define(['angular'], function (angular) {
  'use strict';

  angular.module('toBuyAppV3App.controllers.MainCtrl', ['restangular'])
    .controller('MainCtrl', function ($scope,$location,Restangular) {
      $scope.tobuys = Restangular.all('to-buy-items').getList().$object;

      $scope.keyPress = function ($event) {
        console.log($event);
      };
      $scope.$watch('keyCode', function() {
        console.log("controller: " + $scope.keyCode);
        //$location.path('#/add');
      });

      $scope.destroy = function(tobuys,index) {
        console.log(tobuys[index]._id.$oid);
        var tobuyId = tobuys[index]._id.$oid;
        tobuys.splice(index, 1);
        Restangular.one('to-buy-items',tobuyId).remove();
      };

    })
    .directive('keyCapture', [function() {
      return {
        link: function (scope, element, attrs, controller,location) {
            console.log("ELM: "+element);
              element.on('keydown', function(e){
                  console.log("CODE: "+e.keyCode);
                  console.log(location)
                  scope.keyCode = "YES";
              });

          }
        }
      }]
    );
});
