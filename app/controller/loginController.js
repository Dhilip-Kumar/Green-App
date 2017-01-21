myapp.controller('LoginController', ['$scope','$location','myService',function($scope, $location,myService) {
    $scope.username = "Dhilip";
    $scope.password="hello";

/*
     * @event ng-change
     * calls onchange of value of any input in Login view
     * @Obj {$scope.errorMsg} set error message when input is empty or invalid
     * @var {$scope.isVisibile} hide error message when form data is valid
     */
    $scope.FormDataCheck = function() {

        $scope.isVisibile = false;
        $scope.errorMsg = "";

        if (!$scope.username && !$scope.password) {
            $scope.errorMsg = "UserName and Password are required.";
            $scope.isVisibile = true;
        } else {
            if (!$scope.username) {
                $scope.errorMsg = "UserName is required.";
                $scope.isVisibile = true;
            } else if (!$scope.password) {
                $scope.errorMsg = "Password is required.";
                $scope.isVisibile = true;
            }
        }
    };
	
	$scope.RememberMeImgUrl = 'resources/images/login/switch-icon.png';
	$scope.AcceptTerms = 'resources/images/login/switch-icon.png';

    $scope.toggleImage1 = function () {
        if ($scope.RememberMeImgUrl === 'resources/images/login/switch-icon.png') {
            $scope.RememberMeImgUrl = 'resources/images/login/switch-icon-2.png';
        } else {
            $scope.RememberMeImgUrl = 'resources/images/login/switch-icon.png';
        }
    }
	
	$scope.toggleImage2 = function () {
        if ($scope.AcceptTerms === 'resources/images/login/switch-icon.png') {
            $scope.AcceptTerms = 'resources/images/login/switch-icon-2.png';
        } else {
            $scope.AcceptTerms = 'resources/images/login/switch-icon.png';
        }
    }
	
	$scope.validateUser=function(){
		
		if($scope.username=="Dhilip" && $scope.password=="hello"){
			
			$location.path("/home");
		}
		
		else{
			 $scope.errorMsg = "Invalid User";
             $scope.isVisibile = true;
		}
		myService.set($scope.username);
			
	}

}]);