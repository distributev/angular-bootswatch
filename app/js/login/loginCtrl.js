angular.module('bootswatchApp').controller('LoginCtrl',
	['$scope','$location','$window','bootswatchAuth','UserService',function($scope,$location,$window,bootswatchAuth,UserService){
	$scope.user={};

	$scope.currentPage = 1;

	$scope.login = function(){
		var username = $scope.user.username;
        var password = $scope.user.password;
	    UserService.login({"username":username,"password":password}).success(function(data){
	      		bootswatchAuth.isAuthenticated = true;
	      		bootswatchAuth.setLocalAuth(data);
	      		$location.path('/main').search({});
	      	}).error(function(status, data) {
	      		bootswatchAuth.isAuthenticated = false;
	      		$scope.authorizeFail = true;
	    });
		
		
	};

}]);