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
                isedit: '='
            },
            templateUrl: '../views/metaForm.html',
            link: function ($scope, elem, attrs) {
                console.log($scope.isedit);
                $scope.add = function (i,item) {
                    item.add = !item.add;
                    var x =  _.clone($scope.metadata[0]);
                    x['id'] = i;
                    $scope.metadata.push(x);
               // $scope.payload[i+1] = {};
                };

                $scope.remove = function(item,index){
                    console.log(item + '-' + index);
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