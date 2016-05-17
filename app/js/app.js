var bootswatchApp=angular.module('bootswatchApp',
  ['ngRoute'
  ]);
bootswatchApp.config(['$routeProvider','$httpProvider',
  function($routeProvider, $httpProvider) {
  
  $routeProvider.
  	  when('/main',{
  	  	controller: 'DashboardCtrl',
        templateUrl:'js/dashboard/dashboardView.html',
        requiresLogin: true
      }).
      when( '/login', {
        controller:'LoginCtrl',
        templateUrl: 'js/login/loginView.html',
        pageTitle: 'Login',
      }).
      otherwise({
        redirectTo: '/main'
      });
}]);

bootswatchApp.run(['$rootScope', '$location','$window','bootswatchAuth',
  function ($rootScope, $location,$window,bootswatchAuth) {
	$rootScope.location=$location;
  bootswatchAuth.isLogin();

	$rootScope.$on('$routeChangeStart', function(event, next, current) {
    if(!!next.$$route&&next.$$route.requiresLogin){
      if(!bootswatchAuth.isAuthenticated)
        $location.path('/login').search({});
    }
  });
}]);

