angular.module('app')

	.service('mainService', function($http){
		
		this.getSenators = function (state) {
           return $http.get('http://localhost:5000/senators/' + state)
		   
		   	.then(function (response) {
               console.log('MAINSERVICE', response);
			   return response.data.results;
           })
       }
		
		
	})