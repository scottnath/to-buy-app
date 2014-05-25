/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ToBuyAddCtrl', function () {

    // load the controller's module
    beforeEach(module('toBuyAppApp.controllers.ToBuyAddCtrl'));

    var ToBuyAddCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ToBuyAddCtrl = $controller('ToBuyAddCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
