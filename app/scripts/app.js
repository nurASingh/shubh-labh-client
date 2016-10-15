'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
       templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about'
      })
      .when('/cash', {
        templateUrl: 'views/cash.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'about'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/quick', {
        templateUrl: 'views/quick.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
