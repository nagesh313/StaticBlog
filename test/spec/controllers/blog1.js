'use strict';

describe('Controller: Blog1Ctrl', function () {

  // load the controller's module
  beforeEach(module('staticBlogApp'));

  var Blog1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Blog1Ctrl = $controller('Blog1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Blog1Ctrl.awesomeThings.length).toBe(3);
  });
});
