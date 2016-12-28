"use strict";
angular.module('clientApp')
	.factory('xhr', function ($http) {
		var xhrObj = {};
		
		xhrObj.get = function (url, header,params, successClb, errorClb) {
			$('.load-screen').show();
			$http({
				url: url,
				method: 'GET',
				header : header,
				params: params ? params : {}
			})
			.then(function successCallback(response) {
				if (successClb) {
					$('.load-screen').hide()
					successClb(response.data);
				}
			}, function errorCallback(response) {
				$('.load-screen').hide()
				if (errorClb) { errorClb(response.data); }
			});
		};

		xhrObj.post = function (url,header, params, successClb, errorClb) {
			$('.load-screen').show();
			$http({

				url: url,
				method: 'POST',
				headers : {
					'x-access-token' : header.token
				},
				data: params ? params : {}
			})
			.then(function successCallback(response) {
				$('.load-screen').hide()
				if (successClb) {
					successClb(response.data);
				}
			}, function errorCallback(response) {
				$('.load-screen').hide()
				if (errorClb) { errorClb(response.data); }
			});
		};


		xhrObj.put = function (url, header,params, successClb, errorClb) {
			$('.load-screen').show();
			$http({
				url: url,
				method: 'PUT',
				headers : {
					'x-access-token' : header.token
				},
				data: params ? params : {}
			})
			.then(function successCallback(response) {
				$('.load-screen').hide()
				if (successClb) {
					successClb(response.data);
				}
			}, function errorCallback(response) {
				$('.load-screen').hide()
				if (errorClb) { errorClb(response.data); }
			});
		};


		xhrObj.delete = function (url, header,params, successClb, errorClb) {
			$('.load-screen').show();
			$http({
				url: url,
				method: 'DELETE',
				header : header,
				data: params ? params : {}
			})
			.then(function successCallback(response) {
				$('.load-screen').hide()
				if (successClb) {
					successClb(response.data);
				}
			}, function errorCallback(response) {
				$('.load-screen').hide()
				if (errorClb) { errorClb(response.data); }
			});
		};

		return xhrObj;
	});