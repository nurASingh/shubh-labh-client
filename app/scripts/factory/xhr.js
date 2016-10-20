"use strict";
angular.module('clientApp')
	.factory('xhr', function ($http) {
		var xhrObj = {};

		xhrObj.get = function (url, header,params, successClb, errorClb) {
			$http({
				url: url,
				method: 'GET',
				header : header,
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

		xhrObj.post = function (url,header, params, successClb, errorClb) {
			$http({
				url: url,
				method: 'POST',
				header : header,
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


		xhrObj.put = function (url, header,params, successClb, errorClb) {
			$http({
				url: url,
				method: 'PUT',
				header : header,
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


		xhrObj.delete = function (url, header,params, successClb, errorClb) {
			$http({
				url: url,
				method: 'DELETE',
				header : header,
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