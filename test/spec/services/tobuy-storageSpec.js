/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: tobuyStorage', function () {

    // load the service's module
    beforeEach(module('toBuyAppApp.services.TobuyStorage'));

    // instantiate service
    var tobuyStorage;
    beforeEach(inject(function (_tobuyStorage_) {
      tobuyStorage = _tobuyStorage_;
    }));

    it('should do something', function () {
      expect(!!tobuyStorage).toBe(true);
    });

  });
});
