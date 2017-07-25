angular.module('MainCtrl', []).controller('MainController', function($scope,$http) {

	// $scope.tagline = 'To the moon and back!';
	$scope.activeOperator='{{activeOperator}}';

	// $scope.camera ={};
		$http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response){
			console.log(response.data);
			$scope.cameras = response.data;
		});
	
$scope.save = function(){
		
		$http.post("http://camtrak-demo-app.herokuapp.com/CameraData", $scope.camera).then(function (response){
		console.log($scope.camera);
		console.log("hello");

			$http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response,err){
				if (err){
					console.log(err)
				}else{
					// alert("Your camera is being trakked!")
				}
				console.log(response.data);
				$scope.cameras = response.data;
			});

		});
	
	};
});	
