angular.module('bootswatchApp')
    .factory('bootswatchAuth',['$rootScope','$window',
        function($rootScope,$window){
    	var user={};
        var bootswatchAuth={
            getUser:function(){
                return user;
            },
            setLocalAuth:function(data){
                if(!data||!data.user){
                    bootswatchAuth.deleteUser();
                    return;
                }
                bootswatchAuth.setUser(data.user);
            },
            setUser:function(aUser){
                if(!aUser){ 
                    bootswatchAuth.deleteUser();
                    return;
                }
                user=aUser;
                $window.localStorage.user = JSON.stringify(user);
            },
            isLogin:function(){
                if ($window.localStorage.user){
                    if(!bootswatchAuth.isAuthenticated){
                        bootswatchAuth.isAuthenticated = true;
                        bootswatchAuth.setUser(JSON.parse($window.localStorage.user));
                    }
                }else{
                    bootswatchAuth.setUser(null);
                }
            },
            deleteUser:function(){
                delete $window.localStorage.user; 
                user = {};
                bootswatchAuth.isAuthenticated = false;
            },         
            isAuthenticated: false,

        };
    	return bootswatchAuth;
    }]);