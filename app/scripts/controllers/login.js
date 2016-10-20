/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $location,selectedData, userDataService, ajaxService) {
    $scope.payload = {
        username :null,
        password :null
    };

    $scope.errorMessage = '';
    $scope.submitted = false;
    $scope.login = function (valid) {
      if(!valid){
        $scope.submitted = true;
        return;
      }
    
      var successCallback = function (response) {
        console.log(response);
        if(response.success){
          selectedData.header.set(response.token ,response.user.phone);
          selectedData.userData.set(response.user);
          $location.path('/home');
        }else{
          $scope.errorMessage = 'phone number OR password'
        }
      };

      var errorCallback = function (err) {
        errorMessage = err;
      };

      ajaxService.login(
          $scope.payload
        ,
        successCallback,
        errorCallback
      );
    };

    $scope.close = function(){
      $scope.errorMessage = '';
    };

    $scope.isDisable = function(){
      if(payload.phone && payload.password){
        return true;
      }else{
        return false;
      }
    };


  });