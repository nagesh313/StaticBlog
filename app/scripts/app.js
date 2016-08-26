'use strict';

/**
 * @ngdoc overview
 * @name staticBlogApp
 * @description
 * # staticBlogApp
 *
 * Main module of the application.
 */
angular
  .module('staticBlogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/BlogContent', {
        templateUrl: 'views/blogcontent.html',
        controller: 'BlogcontentCtrl',
        controllerAs: 'BlogContent'
      })
      .when('/blog1', {
        templateUrl: 'views/blog1.html',
        controller: 'Blog1Ctrl',
        controllerAs: 'blog1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
