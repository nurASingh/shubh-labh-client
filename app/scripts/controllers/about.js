'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AboutCtrl', function ($scope,$location,selectedData,userDataService) {
  	$scope.name = userDataService.name.get();
    $scope.cash = '';
  	$scope.save = '';
  	$scope.payment = '';
  	$scope.next = function(){
  		var sale = $scope.cash + $scope.save +$scope.payment;
      selectedData.quick.set($scope.cash,$scope.payment,$scope.save);
      $location.path('/preview');
  	};

  	$scope.reset = function(){
  		$scope.cash = '';
  		$scope.save = '';
  		$scope.payment = '';
  	};

  })
  ;
