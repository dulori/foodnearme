/**
 * 
 */
app.service('AlertService', function() {

	this.errorMessage=showErrorMessage;
	this.successMessage=showSuccessMessage;
	this.warningMessage=showWarningMessage;
	
	function showSuccessMessage(message){
	    swal("Good Job !.... ", message, "success");
	}
	
	function showErrorMessage(message){
		swal("Oops Something Goes wrong !....", message, 'error');
	}
	
	function showWarningMessage(message){
	        swal("Please check your input data !....", message, "warning");
	}
	
});