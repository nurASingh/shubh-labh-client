var flag = true,
    server = 'https://shubhlabh.herokuapp.com/',
    local = 'http://localhost:3000/';

angular.module('clientApp')
    .constant('context', {
        login: flag ? local + 'users/login' : server + 'users/login',
        register: flag ? local + 'users/register' : server + 'users/register'
    });