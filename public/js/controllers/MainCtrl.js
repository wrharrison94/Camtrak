angular.module('MainCtrl', []).controller('MainController', function($scope,$http,Operator,$location) {


	// $scope.tagline = 'To the moon and back!';
	$scope.activeOperator='{{activeOperator}}';
		var config= {
			headers: {'Access-Control-Allow-Origin': '*'}
		}
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
	
	}
	$scope.printOP = function(){
		// console.log('hello');
		// console.log($scope.activeOperator);
		Operator.addOperator($scope.activeOperator);
		$location.path("/operator");

	}
$scope.deleteCamera = function(data){
		console.log(data);
	$http.post("http://camtrak-demo-app.herokuapp.com/deleteCamera", {'id': data}).then(function (response,data){
		
		$http.get("http://camtrak-demo-app.herokuapp.com/CameraData").then(function (response){
				console.log(response.data);
				$scope.cameras = response.data;
			});
	
		});

	};	
});



	// $http.get("http://camtrak-demo-app.herokuapp.com/CameraData", $scope.camera).then(function (response){
	// console.log('ouch');
	// console.log(data);

	// $http.post("http://camtrak-demo-app.herokuapp.com/deleteCamera", $scope.delete).then(function (response){

	// $scope.cameras=response.data;
	// console.log(response.data);


				

			
		
