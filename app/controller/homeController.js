myapp.controller('HomeController',['$scope', '$location', 'myService',function($scope,$location,myService){
   

	$scope.date=new Date();
	$scope.user=myService.get();
	
	$scope.business=function(){
		$location.path("/new_business");
	}
}]); 