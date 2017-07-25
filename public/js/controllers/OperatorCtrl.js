angular.module('OperatorCtrl', []).controller('OperatorController', function($scope,$http) {

	
	
	// $scope.camera ={};
		// $http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response){
			// console.log(response.data);
			// $scope.cameras = response.data;

		// });
	
$scope.printOP = function(){

		$scope.activeOperator=camera.getOperator()

	};
});
	// 		$http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response,err){
	// 			if (err){
	// 				console.log(err)
	// 			}
	// 			console.log(response.data);
	// 			$scope.camera.Camera_Operator = response.data;
	// 		});

	// });
	
	//};
	
