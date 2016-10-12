angular.module('clientApp')
  .controller('PreviewCtrl', function ($scope,selectedData) {
  	$scope.cash = selectedData.cash.get();
  	$scope.save = selectedData.save.get();
  	$scope.payment = selectedData.payment.get();
    $scope.sale = selectedData.sales.get();
  	$scope.next = function(){
  		var sale = $scope.cash + $scope.save +$scope.payment;
      selectedData.quick.set(sale,payment,saving);
  	};

  	$scope.edit = function(){
  		$scope.cash = '';
  		$scope.save = '';
  		$scope.payment = '';
  	};
  })
  ;