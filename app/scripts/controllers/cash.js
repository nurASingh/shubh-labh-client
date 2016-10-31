'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CashCtrl', function ($scope,selectedData,payment,ajaxService) {
  		$scope.metadata = payment;
      $scope.payload = [{
        partyname : "",
        payment :''
      }];

      $scope.save = function () {
      // http call
      var date = new Date();
      var dataTosend = {
        date : date,
        comment :'this is comment',
        payments :  $scope.payload

      };
      ajaxService.postPayment({payment : dataTosend}, function(res){
        console.log(res);
      }, function(err){
        console.log(err);
      });
    };
  });