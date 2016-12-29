'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PaymentCtrl', function ($scope, selectedData, payment, ajaxService) {
    delete $scope.metadata;
    $scope.metadata = [payment[0]];
    $scope.isedit = {
      val: false
    };
    $scope.date = new Date();
    $scope.payload = [{
      name: "",
      payment: '',
      purchase: ''
    }];
    $('#datetimepicker1').datetimepicker()
      .on('dp.change', function (ev) {
        $scope.date = ev.date._d;
      });


    $scope.clear = function () {
      console.log($scope.metadata);
      delete $scope.metadata;
      //$scope.metadata = payment;
      console.log($scope.metadata);
      $scope.metadata = [payment[0]];
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
        date: $scope.date,
        comment: 'this is comment',
        payments: $scope.payload
      };

      ajaxService.postPayment({
        payment: dataTosend
      }, function (res) {
        console.log(res);
        $scope.isedit.val = true;
        selectedData.payment.set($scope.payload);
      }, function (err) {
        console.log(err);
        $scope.isedit = false;
      });
    };
  });
