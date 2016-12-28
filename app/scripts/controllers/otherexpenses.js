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
    $scope.metadata = [saving[0]];
    $scope.payload = [{
      type: "",
      amount: '',
    }];
     $scope.clear = function () {
      delete $scope.metadata;
      $scope.metadata = [saving[0]];
      $scope.payload = [{
      type: "",
      amount: '',
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
        selectedData.other.set( $scope.payload);
      }, function(err){
        console.log(err);
      });
    };
  });