angular.module('app')

	.controller('repCtrl', ['$scope', '$state', '$stateParams','mainService',
		function ($scope, $state, $stateParams, mainService) {

			$scope.getRepresentatives = function () {
           
		   mainService.getRepresentatives($stateParams.state).then(function(response){
			console.log('THIS IS MAIN CONTROLLER', response);
			
			 $scope.representatives = response;  
		   })
		   
       }
       
       $scope.getRepresentatives();


		}])