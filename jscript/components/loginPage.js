login.page = function() {
	$("#login").click(function () {
		var password = $("#j_password").val();
		var username = $("#j_username").val().toUpperCase();
		$("#j_password").val(username+" "+password);
	});	
}
