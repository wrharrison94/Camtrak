angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/lenses.html', {
			templateUrl: 'views/lenses.html',
			controller: 'LensesController'
		})

		.when('/euqipment.html', {
			templateUrl: 'views/euqipment.html',
			controller: 'EquipmentController'	
		});

	$locationProvider.html5Mode(true);

}]);