angular.module('OperatorCtrl', []).controller('OperatorController', function($scope,$http) {

	$scope.activeOperator='{{activeOpertaor}}';
	
	// $scope.camera ={};
		$http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response){
			console.log(response.data);
			$scope.cameras = response.data;
		});
	
$scope.activeOperator. = function(){
		

			$http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response,err){
				if (err){
					console.log(err)
				}
				console.log(response.data);
				$scope.camera.Camera_Operator = response.data;
			});

		});
	
	};
});	
