'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CashCtrl', function ($scope,selectedData,cash,ajaxService) {
  		$scope.metadata = cash;
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
      ajaxService.postCash({cash : dataTosend}, function(res){
        console.log(res);
      }, function(err){
        console.log(err);
      });
    };
  });