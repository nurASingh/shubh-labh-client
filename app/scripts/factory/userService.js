'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */

 angular.module('clientApp')
  .factory('userDataService', function() {

  	var data = {};
  	this.name = ''; this.isValid = false;
  	this.phoneNo = ''; this.email ='';
  	this.address = ''; this.licence ='';
	this.password = '';

  	data.userData = {
  		set : function(name,password, phone, email,address,licence){
  			this.name = name;
			this.password = password;
  			this.phone = phone;
  			this.email = email;
  			this.address = address;
  			this.licence = licence;
  			this.isValid = true;
  		}.bind(this) 
  	};

  	data.name = {
  		get : function(){
  			return this.username;
  		}.bind(this)
  	};


  	data.phone = {
  		get : function(){
  			return this.phone;
  		}.bind(this)
  	};


  	data.email = {
  		get : function(){
  			return this.email;
  		}.bind(this)
  	};

  	data.address = {
  		get : function(){
  			return this.address;
  		}.bind(this)
  	};

  	data.licence = {
  		get : function(){
  			return this.licence;
  		}.bind(this)
  	};

	data.user = {
		get : function(){
			return { name : this.name,
					email : this.email, 
					phone : this.phone ,
					address : this.address , 
					licence : this.licence,
					password : this.password
					}
		}.bind(this)
	};
  	return data;
});