'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */

 angular.module('clientApp')
  .factory('selectedData', function() {
        var data = {};
        this.sale = 0; this.save = 0 ; this.cash = 0 ; this.payment=0 , this.other=0;
        data.sales =  {
                set : function(data){
                    this.sale = data;
                }.bind(this),
                get : function(){
                    return this.sale;
                }.bind(this)
        };

        data.save =  { 
                set : function(data){
                    this.save = data;
                }.bind(this),
                get : function(){
                    return this.save;
                }.bind(this)
           
        };
        data.payment = {
                set : function(data){
                    this.payment = data;
                }.bind(this),
                get : function(){
                    return this.payment;
                }.bind(this)
            
        };

        data.cash = {
            
                set : function(data){
                    this.cash = data;
                }.bind(this),
                get : function(){
                    return this.cash;
                }.bind(this)
            };
        
        data.other = {
            
                set : function(data){
                    this.other = data;
                }.bind(this),
                get : function(){
                    return this.other;
                }.bind(this)
            };

        data.quick = {
                set : function(cash, payment, save){
                    this.payment = payment;
                    this.sale = cash + payment + save;
                    this.save = save;
                    this.cash = cash;
                }.bind(this)
            };

        data.userData = {
            set : function(user){
                this.user = user;
            },
            get : function(){
                return this.user;
            },
            user :{}
        };

        data.header = {
            set : function(data , user){
                this.header = data;
                this.username = user;
            },
            get : function(){
                return {'token' : this.header ,'username' : this.username};
            },
            header : {},
            username : {}
        }    
        

        return data;
});