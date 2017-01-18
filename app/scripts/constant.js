var flag = true,
    server = 'https://shubhlabh.herokuapp.com/',
    local = 'http://localhost:3000/';

angular.module('clientApp')
    .constant('context', {
        login: flag ? local + 'users/login' : server + 'users/login',
        register: flag ? local + 'users/register' : server + 'users/register',
        getPayment : flag ? local + 'payments' : server + 'payments',
        postPayment : flag ? local + 'payments' : server + 'payments',
        updatePayment : flag ? local + 'payments' : server + 'payments',
        getSaving : flag ? local + 'saving' : server + 'saving',
        postSaving : flag ? local + 'saving' : server + 'saving',
        updateSaving : flag ? local + 'saving' : server + 'saving',
        getExpense : flag ? local + 'expense' : server + 'expense',
        postExpense : flag ? local + 'expense' : server + 'expense',
        updateExpense : flag ? local + 'expense' : server + 'expense',
        getCash : flag ? local + 'cash' : server + 'cash',
        postCash : flag ? local + 'cash' : server + 'cash',
        updateCash : flag ? local + 'cash' : server + 'cash',
        getSale : flag ? local + 'sales' : server + 'sales',
        postSale : flag ? local + 'sales' : server + 'sales',
    });