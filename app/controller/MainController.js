
myapp.controller('MainController',['$scope','$location',function($scope,$location){
   
	$location.path("/login");
	
	$scope.ham_menu = true;
    $scope.hamburger_menu = function() {
        $scope.ham_menu = !$scope.ham_menu;
    }
	
	
	$scope.home = function() {
        $location.path("/home");
    }
	
	$scope.new_business = function() {
        $location.path("/new_business");
    }
	
	$scope.logout = function() {
        $location.path("/login");
    }

}]);




