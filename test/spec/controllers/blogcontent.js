'use strict';

describe('Controller: BlogcontentCtrl', function () {

  // load the controller's module
  beforeEach(module('staticBlogApp'));

  var BlogcontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogcontentCtrl = $controller('BlogcontentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogcontentCtrl.awesomeThings.length).toBe(3);
  });
});
