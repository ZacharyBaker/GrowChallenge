angular.module('app')

	.controller('senatorCtrl', ['$scope', '$state', '$stateParams', 'mainService',
		function ($scope, $state, $stateParams, mainService) {

			
			$scope.getSenators = function () {
           
		   mainService.getSenators($stateParams.state).then(function(response){
			console.log('THIS IS MAIN CONTROLLER', response);
			
			 $scope.senators = response;  
		   })
		   
       }
       
       $scope.getSenators();
			

		}])