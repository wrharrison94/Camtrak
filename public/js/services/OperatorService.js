angular.module('OperatorService', []).factory('Operator', ['$http', function($http) {

	// $scope.activeOperator='{{activeOperator}}';

	var operator;
	return{ 

	addOperator: function(activeOperator){

		operator=activeOperator;

	}

}


}]);