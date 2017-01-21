myapp.controller('FilterController', ['$scope','$location','myService',function($scope, $location,myService) {


	$scope.search_back=function(){
		
		$location.path('/new_business');
	};
	
	$scope.dropdown=function(){
		
		$scope.SortIcon = 'resources/images/sort-asc.png';
		$scope.sort_type='+'+$scope.sort;
	};
	
	$scope.SortIcon = 'resources/images/sort-asc.png';
	
    $scope.toggleSort = function () {
        if ($scope.SortIcon === 'resources/images/sort-asc.png') {
            $scope.SortIcon = 'resources/images/sort-desc.png';
			$scope.sort_type='-'+$scope.sort;
        } else {
            $scope.SortIcon = 'resources/images/sort-asc.png';
			$scope.sort_type='+'+$scope.sort;
        }
    };
	
	$scope.Emp=function(x){
		
		myService.set_details(x);
		$location.path('/business_details');
	};
	
	$scope.employees= [
        {
            "insuredName": "Stephen,Fleming",
			"id":"NL25643878",
			"status":"Issued",
            "CTP":"$35,227.50",
			"SubmitDate":"07/11/2014",
			"MailedDate":"07/15/2014",
			"Track":"6025487598"
        },
        {
            "insuredName": "Virat,Kohli",
			"id":"NL5487231459",
			"status":"Issued",
            "CTP":"$252.50",
			"SubmitDate":"08/12/2014",
			"MailedDate":"03/23/2014",
			"Track":"6025487598"
        },
        {
           "insuredName": "Kumar,Sangakkara",
		   "id":"NL4578452317",
			"status":"Issued",
            "CTP":"$32,453.50",
			"SubmitDate":"07/19/2014",
			"MailedDate":"07/29/2014",
			"Track":"6025487598"
        }
        
    ];
	
}]);