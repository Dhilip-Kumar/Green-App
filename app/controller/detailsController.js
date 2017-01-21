myapp.controller('DetailsController', ['$scope','$location','myService',function($scope, $location,myService) {

	$scope.result=function(){
		
		$location.path('/business_filter');
	}
	
	$scope.response=myService.get_details();
	
	$scope.id=$scope.response.id;
	$scope.insuredName=$scope.response.insuredName;
	$scope.CTP=$scope.response.CTP;
	$scope.status=$scope.response.status;
	$scope.submitDate=$scope.response.SubmitDate;
	$scope.mailedDate=$scope.response.MailedDate;
	$scope.track=$scope.response.Track;
	
}]);