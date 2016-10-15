'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, $location, userDataService, ajaxService) {
    $scope.payload = {
      phone: '',
      password: '',
      email: '',
      name: '',
      address: '',
      license: ''
    };

    $scope.errorMessage = '';
    $scope.message = '';

    $scope.register = function () {

      var successCallback = function (response) {
        if (response.passed) {
           $scope.errorMessage = '';
          $scope.message = response.message;
        } else {
          $scope.errorMessage = response.message
        }
      };

      var errorCallback = function (err) {
        errorMessage = err;
      };

      ajaxService.register({
        user: $scope.payload
      },
        successCallback,
        errorCallback
      );
    };

    $scope.closeMessage = function () {
      $scope.errorMessage = '';
    };

  });