angular.module('FileManagerApp').factory('SocketService',['$rootScope','fileManagerConfig','fileNavigator',function($rootScope,fileManagerConfig,FileNavigator){
	 var socket = null;
	 var newData = null;
	 
	 var socketService = {
	 	connect:function(profile,token){
	 		if(!socket){
	 			console.log(fileManagerConfig.socketUrl)
		 		socket = io.connect(fileManagerConfig.socketUrl);
		 		socket.on('connect', function (data) {		
		 			socket.on('change detected',function(data){
		 				newData = data;
		 				console.log(data)
		 				// new FileNavigator().refresh();
		 				$rootScope.$apply();
					});	   
			
			    });

		    }
	 	},
	 	getSocket:function(){
	 		return socket;
	 	},
	 	getData:function(){
	 		return newData;
	 	}
	 };

	 return socketService;
}]);
