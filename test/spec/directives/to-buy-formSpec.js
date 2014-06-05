/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: toBuyForm', function () {

    // load the directive's module
    beforeEach(module('toBuyAppV3App.directives.ToBuyForm'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<to-buy-form></to-buy-form>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the toBuyForm directive');
    }));
  });
});
