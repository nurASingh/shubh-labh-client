'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .directive('metaForm', function (payment) {
        return {
            restrict: 'E',
            scope: {
                metadata: "=",
                payload: '=',
                isedit: '=',
                submit: '=',
                failed:'='
            },
            templateUrl: '../views/metaForm.html',
            link: function ($scope, elem, attrs) {
                console.log($scope.isedit);
                $scope.add = function (i,item) {
                    item.add = !item.add;
                    var next =  _.clone($scope.metadata[0]);
                    next['id'] = i;
                    $scope.metadata.push(next);
               // $scope.payload[i+1] = {};
                };

                $scope.remove = function(index){
                    $scope.metadata.splice(index,1)
                     $scope.payload.splice(index,1)
                    $scope.isEdit = true;
                };

                $scope.initPayLoad = function(i,fields){
                   for(var field in fields){
                       console.log(field);
                   }
                   // this.payload[index] = {};
                }.bind($scope);
            }

        };

    });