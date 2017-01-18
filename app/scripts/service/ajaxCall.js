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
      xhr.post(context.postSaving,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updateSaving = function (params, successCallback, errorCallback) {
      xhr.put(context.updateSaving,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.getExpense = function (params, successCallback, errorCallback) {
      xhr.get(context.getExpense,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.postExpense = function (params, successCallback, errorCallback) {
      xhr.post(context.postExpense,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updateExpense = function (params, successCallback, errorCallback) {
      xhr.put(context.updateExpense,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.getCash = function (params, successCallback, errorCallback) {
      xhr.get(context.getCash,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.postCash = function (params, successCallback, errorCallback) {
      xhr.post(context.postCash,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updateCash = function (params, successCallback, errorCallback) {
      xhr.put(context.updateCash,selectedData.header.get(),params,successCallback, errorCallback);
    };
    this.getSale = function (params, successCallback, errorCallback) {
      xhr.get(context.getSale,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.postSale = function (params, successCallback, errorCallback) {
      xhr.post(context.postSale,selectedData.header.get(),params,successCallback, errorCallback);
    };

    this.updateSale = function (params, successCallback, errorCallback) {
      xhr.put(context.updateSale,selectedData.header.get(),params,successCallback, errorCallback);
    };

  });