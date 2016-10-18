'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .directive('metaForm', function () {
        return {
            restrict: 'E',
            scope: {
               metadata : "="
            },
            templateUrl: '../views/metaForm.html',
            link : function(scope, elem , attrs){
               
            }
            
        };

    });