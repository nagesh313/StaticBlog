'use strict';

describe('Controller: RecentblogsCtrl', function () {

  // load the controller's module
  beforeEach(module('staticBlogApp'));

  var RecentblogsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecentblogsCtrl = $controller('RecentblogsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecentblogsCtrl.awesomeThings.length).toBe(3);
  });
});
