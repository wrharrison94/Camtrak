angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider


		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/lenses', {
			templateUrl: 'views/lenses.html',
			controller: 'LensesController'
		})

		.when('/operator', {
			templateUrl: 'views/operator.html',
			controller: 'OperatorController'	
		});

	$locationProvider.html5Mode(true);

}]);