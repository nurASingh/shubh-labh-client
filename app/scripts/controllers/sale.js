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

    $scope.date = new Date();
    $('#datetimepicker1').datetimepicker({ format: "DD/MM/YYYY" })
      .on('dp.change', function (ev) {
        $scope.date = new Date(ev.date._d);
        getSalesData($scope.date);
      });

    $scope.totalSale = 0;
    $scope.totalCash = 0;
    $scope.totalSaving = 0;
    $scope.totalExpenses = 0;
    $scope.totalPayment = 0;
    $scope.totalPurchase = 0;

      var date = new Date();
      var dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
      ajaxService.postSale({
        date: dateString
      }, function (res) {
        selectedData.sales.set(res);
        if (res.payment.length > 0) {
          selectedData.payment.set(res.payment);
          for (var i = 0; i < selectedData.sales.get().payment.length; i++) {
            for (var j = 0; j < selectedData.sales.get().payment[i].payments.length; j++) {
              $scope.totalPayment += selectedData.sales.get().payment[i].payments[j].payment;
              $scope.totalPurchase += selectedData.sales.get().payment[i].payments[j].purchase;
            }
          }
        }
        if (res.expenses.length > 0) {
          selectedData.other.set(res.expenses);
          for (var i = 0; i < res.expenses.length; i++) {
            for (var j = 0; j < res.expenses[i].amount.length; j++) {
              $scope.totalExpenses += res.expenses[i].amount[j].amount;
            }
          }
        }
        if (res.saving.length > 0) {
          selectedData.save.set(res.saving);
          for (var i = 0; i < res.saving.length; i++) {
            for (var j = 0; j < res.saving[i].amount.length; j++) {
              $scope.totalSaving += res.saving[i].amount[j].amount;
            }
          }
        }
        if (res.cash.length > 0) {
          selectedData.cash.set(res.cash);
          for (var i = 0; i < res.cash.length; i++) {
            for (var j = 0; j < res.cash[i].amount.length; j++) {
              $scope.totalCash += res.cash[i].amount[j].amount;
            }
          }
        }
      }, function (err) {
        console.log('Error in getting sales data');
      });
    



    function getSalesData(newDate) {
      var date = new Date(newDate);
      var dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
      ajaxService.postSale({
        date: dateString
      }, function (res) {
        selectedData.sales.set(res);
        if (res.payment.length > 0) {
          //selectedData.payment.set(res.payment);
          for (var i = 0; i < selectedData.sales.get().payment.length; i++) {
            for (var j = 0; j < selectedData.sales.get().payment[i].payments.length; j++) {
              $scope.totalPayment += selectedData.sales.get().payment[i].payments[j].payment;
              $scope.totalPurchase += selectedData.sales.get().payment[i].payments[j].purchase;
            }
          }
        }else{
          $scope.totalPayment = 0;
          $scope.totalPurchase = 0;
        }
        if (res.expenses.length > 0) {
          //selectedData.other.set(res.expenses);
          for (var i = 0; i < res.expenses.length; i++) {
            for (var j = 0; j < res.expenses[i].amount.length; j++) {
              $scope.totalExpenses += res.expenses[i].amount[j].amount;
            }
          }
        }else{
          $scope.totalExpenses =0 ;
        }
        if (res.saving.length > 0) {
          // selectedData.save.set(res.saving);
          for (var i = 0; i < res.saving.length; i++) {
            for (var j = 0; j < res.saving[i].amount.length; j++) {
              $scope.totalSaving += res.saving[i].amount[j].amount;
            }
          }
        }else{
          $scope.totalSaving = 0;
        }
        if (res.cash.length > 0) {
          //selectedData.cash.set(res.cash);
          for (var i = 0; i < res.cash.length; i++) {
            for (var j = 0; j < res.cash[i].amount.length; j++) {
              $scope.totalCash += res.cash[i].amount[j].amount;
            }
          }
        }else{
           $scope.totalCash = 0;
        }
      }, function (err) {
        console.log('Error in getting sales data');
      });
    }



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
