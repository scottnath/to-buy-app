/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: toBuyTable', function () {

    // load the directive's module
    beforeEach(module('toBuyAppApp.directives.ToBuyTable'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<to-buy-table></to-buy-table>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the toBuyTable directive');
    }));
  });
});
