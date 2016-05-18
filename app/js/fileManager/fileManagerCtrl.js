angular.module('bootswatchApp').controller('FileCtrl',
	['$scope','$location','$window','bootswatchAuth','UserService',function($scope,$location,$window,bootswatchAuth,UserService){
		$scope.folder = '/nginx-1.9.14/html';

		$scope.theme = bootswatchAuth.getUser().theme;

}]);