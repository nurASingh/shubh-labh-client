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
                payload: '='
            },
            templateUrl: '../views/metaForm.html',
            link: function ($scope, elem, attrs) {

                $scope.add = function () {
                    console.log('adding');
                    var x = {
                        'type': '3item',
                        'fields':
                        [
                            {
                                'label': 'Party Name',
                                'type': 'text',
                                'placeholder': 'Ashoka Pharma Bhalotia'
                            },
                            {
                                'label': 'Purchase',
                                'type': 'number',
                                'placeholder': '12000'
                            },
                            {
                                'label': 'Payment',
                                'type': 'number',
                                'placeholder': '6000'
                            }
                        ]
                    }

                    $scope.metadata.push(x);
                }
            }

        };

    });