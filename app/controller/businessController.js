myapp.controller('BusinessController', ['$scope','$location',function($scope, $location) {

	$scope.search=function(){
		
		$location.path('/business_filter');
	}
}]);