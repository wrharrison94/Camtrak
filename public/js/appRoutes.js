angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider



		// home page
			.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/lenses', {
			templateUrl: 'views/lenses.html',
			controller: 'LensesController'
		})

		.when('/equipment', {
			templateUrl: 'views/equipment.html',
			controller: 'EquipmentController'	
		});

	$locationProvider.html5Mode(true);

}]);