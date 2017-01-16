'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ExpensesCtrl', function ($scope, selectedData, saving,ajaxService) {
    $scope.metadata = [saving[0]];
    $scope.payload = [{
      type: "",
      amount: '',
    }];
  $scope.date = new Date();
    $('#datetimepicker1').datetimepicker({format : "DD/MM/YYYY"})
      .on('dp.change', function (ev) {
        $scope.date = ev.date._d;
      });

     $scope.clear = function () {
      delete $scope.metadata;
      $scope.metadata = [saving[0]];
      $scope.payload = [{
      type: "",
      amount: '',
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
      ajaxService.postSaving({saving : dataTosend}, function(res){
        console.log(res);
        selectedData.other.set( $scope.payload);
        $scope.submit = true;
        $scope.failed = false;
      }, function(err){
        console.log(err);
        $scope.submit = true;
        $scope.failed = true;
      });
    };
  });