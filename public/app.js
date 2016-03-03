angular.module('app', ['ui.router'])

	.config(function ($urlRouterProvider, $stateProvider) {

		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: './templates/mainTmpl.html',
				controller: 'mainCtrl'
			})



		$urlRouterProvider
			.otherwise('/login');
	})

