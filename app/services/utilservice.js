myapp.service('myService', function() {
	
	var username ="sdf";
	var det={};
	
	return ({
		set: set,
		get: get,
		set_details:set_details,
		get_details:get_details
	});

	function set(usrn) {
		username  = usrn;
	}
 
	function get() {
		return username;
	}
	
	function set_details(x) {
		det=x;
	}
	
	function get_details() {
		return det;
	}
});