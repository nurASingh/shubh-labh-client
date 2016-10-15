angular.module('clientApp')
  .service('ajaxService', function (xhr, context,userDataService, selectedData) {
    this.getSales = function (params, successCallback, errorCallback) {
      console.log('getSales');
    };

    this.postSales = function (params, successCallback, errorCallback) {
      console.log('postSales');
    };

    this.updateSales = function (params, successCallback, errorCallback) {
      console.log('updateSales');
    };

    this.deleteSales = function (params, successCallback, errorCallback) {
      console.log('deleteSales');
    };

    this.login = function (params, successCallback, errorCallback) {
      xhr.post(context.login , params,successCallback, errorCallback);
    };

    this.register = function (params, successCallback, errorCallback) {
      xhr.post(context.register , params,successCallback, errorCallback);
    };

    this.updateUser = function (params, successCallback, errorCallback) {
      console.log('updateUser');
    };

    this.deleteUser = function (params, successCallback, errorCallback) {
      console.log('deleteUser');
    };

    this.getUser = function (params, successCallback, errorCallback) {
      console.log('getUser');
    };
  });