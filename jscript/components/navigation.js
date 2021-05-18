navigation.left = function() {
	var that = table;
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
	$("#statistic").click(function () {
        	window.location.href = "/HU-Web/history";
    	});
	$("#requests").click(function () {
        	window.location.href = "/HU-Web/requests";
    	});
	$("#claimed").click(function () {
		that.field.filter = "claimed";
		that.init("list.do", that.fields);
	});
	$("#priceAccept").click(function () {
		that.field.filter = "priceAccept";
		that.init("list.do", that.fields);
	});
	$("#processing").click(function () {
		that.field.filter = "processing";
		that.init("list.do", that.fields);
	});
	$("#processed").click(function () {
		that.field.filter = "processed";
		that.init("list.do", that.fields);
	});
	$("#rejected").click(function () {
		that.field.filter = "rejected";
		that.init("list.do", that.fields);
	});
	$("#paused").click(function () {
		that.field.filter = "paused";
		that.init("list.do", that.fields);
	});
}
