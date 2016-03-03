angular.module('app', ['ui.router'])

	.config(function ($urlRouterProvider, $stateProvider) {

		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: './templates/mainTmpl.html',
				controller: 'mainCtrl'
			})

			.state('senators', {
				url: '/senators/:state',
				templateUrl: './templates/senatorTmpl.html',
				controller: 'senatorCtrl'
			})
			
			.state('representatives', {
				url: '/representatives/:state',
				templateUrl: './templates/representativesTmpl.html',
				controller: 'repCtrl'
			})


		$urlRouterProvider
			.otherwise('/main');
	})

