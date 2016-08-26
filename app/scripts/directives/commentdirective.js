'use strict';

/**
 * @ngdoc directive
 * @name staticBlogApp.directive:CommentDirective
 * @description
 * # CommentDirective
 */
angular.module('staticBlogApp')
  .directive('commentDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the CommentDirective directive');
      }
    };
  });
