'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PaymentCtrl', function ($scope, selectedData, payment,ajaxService) {
    $scope.metadata = payment;
    $scope.payload = [{
      partyname: "",
      payment: '',
      purchase: ''
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
      ajaxService.postPayment({saving : dataTosend}, function(res){
        console.log(res);
      }, function(err){
        console.log(err);
      });
    };
  });