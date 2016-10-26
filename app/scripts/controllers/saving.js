'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SavingCtrl', function ($scope, selectedData, saving) {
    $scope.metadata = saving;
    $scope.payload = [{
      type: "",
      amount: '',
    }];
    $scope.clear = function () {
      console.log($scope.metadata);
    };

    $scope.save = function () {
      // http call
      console.log($scope.payload);
    };
  });