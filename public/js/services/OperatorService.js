angular.module('OperatorService', []).factory('Operator', ['$http', function($http, $scope, Operator) {

	// $scope.activeOperator='{{activeOperator}}';

		var operator;
		return{ 

			addOperator: function(data){

			operator=data;

			console.log(operator);

		},
			getOperator: function(){

			return operator;
		}
		
	}
		

}]);