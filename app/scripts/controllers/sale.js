'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SaleCtrl', function ($scope, selectedData, cash, ajaxService) {
    $scope.metadata = cash;
    $scope.payload = [{
      sale: $scope.totalSale
    }];

    $scope.totalSale = 0;
    $scope.totalCash = 1200;
    $scope.totalSaving = 100;
    $scope.totalExpenses = 200;
    $scope.totalPayment = 5000;
    $scope.totalPurchase = 5000;

    $scope.save = function () {
      // http call
      var date = new Date();
      var dataTosend = {
        date: date,
        comment: 'this is comment',
        sale: $scope.totalCash + $scope.totalSaving + $scope.totalExpenses + $scope.totalPayment
      };
      ajaxService.postCash({
        sale: dataTosend
      }, function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    };
  });
