/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: toBuyRow', function () {

    // load the directive's module
    beforeEach(module('toBuyAppV3App.directives.ToBuyRow'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<to-buy-row></to-buy-row>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the toBuyRow directive');
    }));
  });
});
