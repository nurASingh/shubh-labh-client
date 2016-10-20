'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CashCtrl', function ($scope,selectedData,payment) {
  		$scope.metadata = payment;
      $scope.payload = [{
        partyname : "",
        payment :'',
        parchase : ''
      }];
  });