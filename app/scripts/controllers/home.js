'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope,selectedData) {
    $scope.name = selectedData.userData.get().name;
    $scope.address = selectedData.userData.get().address;

  });