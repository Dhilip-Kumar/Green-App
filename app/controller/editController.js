/**
 * controller for View/Edit
     * @argument {$scope} application scope. 
     * @argument {$location} current location for view navigations. 
     * @argument {utilService} service for navigate views. 
     * @argument {httpService} for http service requests. 
     */



app.controller('editController', ['$scope', '$location', 'utilService', 'httpService', function($scope, $location, utilService, httpService) {
    $scope.editData = {};

//updating $scope object "editData" from http service and thats is given as model for inputs elements
    if (httpService && httpService.getSelected) {
        $scope.editData = httpService.getSelected();
    }
    /*
     * @event ng-click
     * calls when save button clicks
     * @Obj {$scope.editData} edited data
     */
    $scope.saveData = function() {
        //updating employee list with edited values
        httpService.updateData($scope.editData);
    };
    /*
     * @event ng-click
     * calls when back button clicks
     */
    $scope.goHome = function() {
        //navigating back to home screen
        utilService.safeApply($scope, function() {
            $location.path("/home");
        });
    };

}]);