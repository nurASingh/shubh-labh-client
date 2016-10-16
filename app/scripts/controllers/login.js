/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $location, userDataService, ajaxService) {
    $scope.payload = {
        phone :'',
        password :''
    };

    $scope.errorMessage = '';

    $scope.login = function () {
    
      var successCallback = function (response) {
        console.log(response);
        if(response.passed){
          $location.path('/home');
        }else{
          $scope.errorMessage = 'phone number OR password'
        }
      };

      var errorCallback = function (err) {
        errorMessage = err;
      };

      ajaxService.login({
          user: $scope.payload
        },
        successCallback,
        errorCallback
      );
    };

    $scope.close = function(){
      $scope.errorMessage = '';
    };


  });