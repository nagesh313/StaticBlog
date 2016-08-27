'use strict';

describe('Controller: MostreadCtrl', function () {

  // load the controller's module
  beforeEach(module('staticBlogApp'));

  var MostreadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MostreadCtrl = $controller('MostreadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MostreadCtrl.awesomeThings.length).toBe(3);
  });
});
