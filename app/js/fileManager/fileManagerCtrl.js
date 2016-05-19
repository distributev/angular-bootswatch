angular.module('bootswatchApp').controller('FileCtrl',
	['$scope','$location','$window','bootswatchAuth','UserService',function($scope,$location,$window,bootswatchAuth,UserService){
		$scope.folder = '/home/ubuntu/workspace';

		$scope.theme = bootswatchAuth.getUser().theme;

}]);