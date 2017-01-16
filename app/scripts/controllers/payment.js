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
    $scope.submit = false;
    $scope.failed = false;
    $scope.date = new Date();
    $scope.payload = [{
      name: "",
      payment: '',
      purchase: ''
    }];
    $scope.date = new Date();
    $('#datetimepicker1').datetimepicker({format : "DD/MM/YYYY"})
      .on('dp.change', function (ev) {
        $scope.date = ev.date._d;
        getDetailsByDate($scope.date);
      });

      function getDetailsByDate(date){
        console.log(date + 'details');
      }

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
        $scope.submit = true;
        $scope.failed = false;
      }, function (err) {
        console.log(err);
        $scope.isedit = false;
        $scope.submit = true;
        $scope.failed = true;
      });
    };
  });
