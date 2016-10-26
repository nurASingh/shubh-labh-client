'use strict';

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
      xhr.post(context.login ,selectedData.header.get(), params,successCallback, errorCallback);
    };

    this.register = function (params, successCallback, errorCallback) {
      xhr.post(context.register ,selectedData.header.get(), params,successCallback, errorCallback);
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

    this.getPayment = function (params, successCallback, errorCallback) {
      xhr.get(context.getPayment,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.postPayment = function (params, successCallback, errorCallback) {
      xhr.post(context.getPayment,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updatePayment = function (params, successCallback, errorCallback) {
      xhr.put(context.getPayment,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.getSaving = function (params, successCallback, errorCallback) {
      xhr.get(context.getSaving,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.postSaving = function (params, successCallback, errorCallback) {
      xhr.post(context.getSaving,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updateSaving = function (params, successCallback, errorCallback) {
      xhr.put(context.getSaving,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.getExpense = function (params, successCallback, errorCallback) {
      xhr.get(context.getExpense,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.postExpense = function (params, successCallback, errorCallback) {
      xhr.post(context.getExpense,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updateExpense = function (params, successCallback, errorCallback) {
      xhr.put(context.getExpense,selectedData.header.get(),params,successCallback, errorCallback);
    };

  });