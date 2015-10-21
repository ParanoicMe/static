$(document).ready(function () {
	if(page!='protocols'){
		$("#dropdownmenu").css('display', 'none');
	}else{
		$("#dropdownmenu").css('display', 'block');
	}
	$("#protocols").click(function () {
		window.location.href = "/HU-Web/protocols";
	});
	$("#users").click(function () {
		window.location.href = "/HU-Web/users";
	});
	$("#roles").click(function () {
		window.location.href = "/HU-Web/roles";
	});
});	
