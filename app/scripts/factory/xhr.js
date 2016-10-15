"use strict";
angular.module('clientApp')
	.factory('xhr', function ($http) {
		var xhrObj = {};

		xhrObj.get = function (url, params, successClb, errorClb) {
			$http({
				url: url,
				method: 'GET',
				params: params ? params : {}
			})
				.then(function successCallback(response) {
					if (successClb) {
						successClb(response.data);
					}
				}, function errorCallback(response) {
					if (errorClb) { errorClb(response.data); }
				});
		};

		xhrObj.post = function (url, params, successClb, errorClb) {
			$http({
				url: url,
				method: 'POST',
				data: params ? params : {},
				'Content-Type' : 'application/json' 
			})
				.then(function successCallback(response) {
					if (successClb) {
						successClb(response.data);
					}
				}, function errorCallback(response) {
					if (errorClb) { errorClb(response.data); }
				});
		};


		xhrObj.put = function (url, params, successClb, errorClb) {
			$http({
				url: url,
				method: 'PUT',
				data: params ? params : {}
			})
				.then(function successCallback(response) {
					if (successClb) {
						successClb(response.data);
					}
				}, function errorCallback(response) {
					if (errorClb) { errorClb(response.data); }
				});
		};


		xhrObj.delete = function (url, params, successClb, errorClb) {
			$http({
				url: url,
				method: 'DELETE',
				data: params ? params : {}
			})
				.then(function successCallback(response) {
					if (successClb) {
						successClb(response.data);
					}
				}, function errorCallback(response) {
					if (errorClb) { errorClb(response.data); }
				});
		};

		return xhrObj;
	});