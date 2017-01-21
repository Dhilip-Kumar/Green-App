var myapp = angular.module('myApp', ['ngRoute']);


myapp.config(['$routeProvider',function($routeProvider){


	$routeProvider.when('/login',
		{templateUrl:"app/view/Login.html",
		 controller:"LoginController"
			
		})
		.when('/home',
		{templateUrl:"app/view/Home.html",
		 controller:"HomeController"
			
		})
		.when('/new_business',
		{templateUrl:"app/view/NewBusiness.html",
		 controller:"BusinessController"
			
		})
		.when('/business_filter',
		{templateUrl:"app/view/NewBusiness_filter.html",
		  controller:"FilterController"
			
		})
		.when('/business_details',
		{templateUrl:"app/view/Business_Details.html",
		 controller:"DetailsController"
			
		})

		
	

}]);





