angular.module('app')

	.service('mainService', function($http){
		
		///////////
		//SENATORS//
		///////////
		this.getSenators = function (state) {
           return $http.get('http://localhost:5000/senators/' + state)
		   
		   	.then(function (response) {
               console.log('MAINSERVICE', response);
			   return response.data.results;
           })
       }
	   
	   ///////////////////
	   //REPRESENTATIVES//
	   ///////////////////
	   this.getRepresentatives = function (state) {
           return $http.get('http://localhost:5000/representatives/' + state)
		   
		   	.then(function (response) {
               console.log('MAINSERVICE', response);
			   return response.data.results;
           })
       }
		
		
	})