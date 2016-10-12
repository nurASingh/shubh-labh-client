'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope,$location,userDataService) {
    $scope.username = '';
    $scope.password ='';
    $scope.login = function(){
      userDataService.userData.set('Ram Saroj Singh','9936363647','RamSaroj@gmail.com','New Singh Medical Stores CHC Pipraich','UPGKP0987M');
      $location.path('/quick');
    };
  });
