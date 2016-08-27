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
                templateUrl: 'views/Home/landingpagehead.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/blog1', {
                templateUrl: 'views/blog1.html',
                controller: 'BlogContentCtrl',
                controllerAs: 'BlogContentCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });