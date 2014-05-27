/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: mongolab', function () {

    // load the service's module
    beforeEach(module('toBuyAppApp.services.Mongolab'));

    // instantiate service
    var mongolab;
    beforeEach(inject(function (_mongolab_) {
      mongolab = _mongolab_;
    }));

    it('should do something', function () {
      expect(!!mongolab).toBe(true);
    });

  });
});
