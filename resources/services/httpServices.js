 /**
 * services for http request
     * @argument {$http}. 
     */
 
 app.service("httpService",
     function($http, $q) {

   /*
     * @var {EmpList} contains Employee List Data
     * @var {selectedItem} contains edit emp data
     */
         var EmpList = {};
         var selectedItem = {};
         
         //registering API calls
         return ({
             getUsers: callUserList,
             updateEmpList: callEmployeeList,
             setEmpList: setEmpListData,
             getEmpList: getEmpListData,
             setSelected: setSelectedData,
             getSelected: getSelectedData,
             updateData: mergeEditedData
         });

   /*
     * @function callUserList
     */
         function callUserList() {

             var request = $http({
                 method: "GET",
                 url: "resources/stubs/Login.json"
             });

             return (request.then(handleSuccess, handleError));

         }



  /*
     * @function callEmployeeList
     * call http request and set the employee list data
     */
         function callEmployeeList() {

             var request = $http({
                 method: "GET",
                 url: "resources/stubs/Employees.json"
             });

             return (request.then(handleSuccess, handleError));

         }
  /*
     * @function handleError
     * Error callback function for http request
     */
         function handleError(response) {

             if (!angular.isObject(response.data) ||
                 !response.data.message
             ) {

                 return ($q.reject("An unknown error occurred."));

             }

             // Otherwise, use expected error message.
             //return( $q.reject( response.data.message ) );
             alert("Unable to get data from file.");

         }

  /*
     * @function handleSuccess
     * success callback function for http request
     * return responds data
     */

         function handleSuccess(response) {

             return response.data;

         }
   /*
     * @function setEmpListData
     * setting Employee list from http response data
     * @var {EmpList} employee list
     */
         function setEmpListData(data) {

             EmpList = data;

         }
  /*
     * @function getEmpListData
     * return employee list
     * @var {EmpList} employee list
     */
         function getEmpListData() {
             return EmpList;
         }
   /*
     * @function setSelectedData
     * setting Selected rowdata
     * @var {selectedItem} selected employee rowdata
     */
         function setSelectedData(selected) {
             selectedItem = selected;
         }
   /*
     * @function getSelectedData
     * return selected emp rowdata
     * @var {selectedItem} selected employee rowdata
     */
         function getSelectedData() {
             return selectedItem;
         }

   /*
     * @function mergeEditedData
     * merging the edited employee data with employee list
     * @var {selectedItem} selected employee rowdata
     */
         function mergeEditedData(editData) {
             if (editData && EmpList.employees) {
                 angular.extend({}, [editData], EmpList.employees);
             }

         }

     }
 );