/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ToBuyEditCtrl', function () {

    // load the controller's module
    beforeEach(module('toBuyAppV3App.controllers.ToBuyEditCtrl'));

    var ToBuyEditCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ToBuyEditCtrl = $controller('ToBuyEditCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
