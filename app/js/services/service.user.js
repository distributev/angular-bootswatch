angular.module('bootswatchApp')
    .factory('UserService',['$http',function($http){
    	var base_url=config.service_url+'/user';
    	return {
            login:function(data){
                var url=base_url+"/login";
                return $http({
                    method:'POST',
                    url:url,
                    data:data,
                    headers:{
                        'Content-type':'application/json'
                    }
                });
            },
            updateTheme:function(data){
                var url=base_url+'/theme';
                return $http({
                    method:'PUT',
                    url:url,
                    data:data,
                    headers:{
                        'Content-type':'application/json'
                    }
                });    
            },
          

    	};
    }]);