'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CashCtrl', function ($scope, selectedData, cash, ajaxService) {
    $scope.metadata = [cash[0]];
    $scope.payload = [{
      partyname: "",
      payment: ''
    }];

    $scope.date = new Date();
    $('#datetimepicker1').datetimepicker({format : "DD/MM/YYYY"})
      .on('dp.change', function (ev) {
        $scope.date = ev.date._d;
      });

      $scope.clear = function () {
        console.log($scope.metadata);
        delete $scope.metadata;
        console.log($scope.metadata);
        $scope.metadata = [cash[0]];
        $scope.payload = [{
          partyname: "",
          payment: ''
        }];
      };

    $scope.save = function () {
      // http call
      var date = new Date($scope.date);
       var dateString = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
      var dataTosend = {
        date: dateString,
        comment: 'this is comment',
        amount: $scope.payload
      };

    

      ajaxService.postCash({ cash: dataTosend }, function (res) {
        console.log(res);
        selectedData.cash.set($scope.payload);
        $scope.submit = true;
        $scope.failed = false;
      }, function (err) {
        console.log(err);
        $scope.submit = true;
        $scope.failed = true;
      });
    };
  });