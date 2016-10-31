'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ExpensesCtrl', function ($scope, selectedData, saving,ajaxService) {
    $scope.metadata = saving;
    $scope.payload = [{
      type: "",
      amount: '',
    }];
     $scope.clear = function () {
      console.log($scope.metadata);
      delete $scope.metadata;
      $scope.metadata = payment;
      console.log($scope.metadata);
      $scope.payload = [{
        name: "",
        payment: '',
        purchase: ''
      }];
    };

    $scope.save = function () {
      // http call
      var date = new Date();
      var dataTosend = {
        date : date,
        comment :'this is comment',
        payments :  $scope.payload

      };
      ajaxService.postSaving({saving : dataTosend}, function(res){
        console.log(res);
      }, function(err){
        console.log(err);
      });
    };
  });