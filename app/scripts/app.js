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
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
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
      .when('/saving', {
        templateUrl: 'views/saving.html',
        controller: 'SavingCtrl',
        controllerAs: 'about'
      })
      .when('/expenses', {
        templateUrl: 'views/otherexpenses.html',
        controller: 'ExpensesCtrl',
        controllerAs: 'about'
      })
      .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/cash', {
        templateUrl: 'views/cash.html',
        controller: 'CashCtrl',
        controllerAs: 'about'
      })
      .when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

