'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SavingCtrl', function ($scope, selectedData, saving, ajaxService) {
    $scope.metadata = saving;
    $scope.isedit = { val: false };
    $scope.payload = [{
      type: "",
      amount: '',
    }];

    $scope.date = new Date();
    $('#datetimepicker1').datetimepicker({format : "DD/MM/YYYY"})
      .on('dp.change', function (ev) {
        $scope.date = new Date(ev.date._d);
        console.log($scope.date);
        console.log(new Date($scope.date));
      });
    $scope.clear = function () {
      console.log($scope.metadata);
      delete $scope.metadata;
      $scope.metadata = saving;
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
        date: date,
        comment: 'this is comment',
        payments: $scope.payload

      };
      ajaxService.postSaving({ saving: dataTosend }, function (res) {
        console.log(res);
        $scope.isedit.val = true;
        selectedData.save.set($scope.payload);
        $scope.submit = true;
        $scope.failed = false;
      }, function (err) {
        $scope.isedit.val = false;
        console.log(err);
        $scope.submit = true;
        $scope.failed = true;
      });
    };
  });