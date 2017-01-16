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

  ]).run(function (){
   console.log('run');
   
  })
  .config(function ($routeProvider, $httpProvider) {
    console.log('config');
    function setUserData(selectedData,$location) {
      if (window.sessionStorage.getItem('response')) {
        var response = angular.fromJson(window.sessionStorage.getItem('response'));
        selectedData.header.set(response.token, response.user.phone);
        selectedData.userData.set(response.user);
      }else{
        $location.path('/login');
      }
    }
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
           setUserData(selectedData,$location);
          }
        }
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'about'
      })
      .when('/saving', {
        templateUrl: 'views/saving.html',
        controller: 'SavingCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
           setUserData(selectedData,$location);
          }
        }
      })
      .when('/expenses', {
        templateUrl: 'views/otherexpenses.html',
        controller: 'ExpensesCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/cash', {
        templateUrl: 'views/cash.html',
        controller: 'CashCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'SaleCtrl',
        controllerAs: 'about',
        resolve: {
          data: function (selectedData,$location) {
            setUserData(selectedData,$location);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

