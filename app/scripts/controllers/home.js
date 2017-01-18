'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, selectedData,ajaxService) {
    $scope.name = selectedData.userData.get().name;
    $scope.address = selectedData.userData.get().address;
    $scope.selectedData = selectedData;

    if (!selectedData.sales.get()) {
      var date = new Date();
      var dateString = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
      ajaxService.postSale({
        date: dateString
      }, function (res) {
        selectedData.sales.set(res);
        if (res.payment.length > 0) {
          $scope.selectedData.payment.set(res.payment);
        }
        if (res.expenses.length > 0) {
          $scope.selectedData.other.set(res.expenses);
        }
        if (res.saving.length > 0) {
          $scope.selectedData.save.set(res.saving);
        }
        if (res.cash.length > 0) {
          $scope.selectedData.cash.set(res.cash);
        }
      }, function (err) {

      });
    }
  });