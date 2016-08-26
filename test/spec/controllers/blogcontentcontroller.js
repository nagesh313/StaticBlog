'use strict';

describe('Controller: BlogcontentcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('staticBlogApp'));

  var BlogcontentcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogcontentcontrollerCtrl = $controller('BlogcontentcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogcontentcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
