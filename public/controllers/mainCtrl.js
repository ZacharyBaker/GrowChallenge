angular.module('app')

	.controller('mainCtrl', ['$scope', '$stateParams', '$state',
	 function($scope, $stateParams, $state){
		
		$scope.dude = "hey im a dude."
		
	}])