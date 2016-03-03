angular.module('app')

	.controller('mainCtrl', ['$scope', '$stateParams', '$state', 'mainService', 
	 function($scope, $stateParams, $state, mainService){
		
		$scope.dude = "hey im a dude."
		
		
		$scope.getSenators = function () {
           
		   mainService.getSenators($scope.state).then(function(response){
			console.log('THIS IS MAIN CONTROLLER', response);
			
			 $scope.senators = response;  
		   })
		   
       }
       
       $scope.getSenators();
		
		
	}])