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
    function setUserData(selectedData) {
      if (window.localStorage.response) {
        var response = angular.fromJson(window.localStorage.response);
        selectedData.header.set(response.token, response.user.phone);
        selectedData.userData.set(response.user);
      }
    }
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
           setUserData(selectedData);
          }
        }
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/saving', {
        templateUrl: 'views/saving.html',
        controller: 'SavingCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
           setUserData(selectedData);
          }
        }
      })
      .when('/expenses', {
        templateUrl: 'views/otherexpenses.html',
        controller: 'ExpensesCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/cash', {
        templateUrl: 'views/cash.html',
        controller: 'CashCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData) {
            setUserData(selectedData);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

