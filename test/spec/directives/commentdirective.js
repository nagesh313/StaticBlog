'use strict';

describe('Directive: CommentDirective', function () {

  // load the directive's module
  beforeEach(module('staticBlogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-comment-directive></-comment-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the CommentDirective directive');
  }));
});
