list.navigation = function() {
	var that = this;
	$("#claimed").click(function () {
		that.field.filter = "claimed";
		that.init("/HU-Web/protocols/list.do", that.fields);
	});
	$("#accept").click(function () {
		that.field.filter = "accept";
		that.init("/HU-Web/protocols/list.do", that.fields);
	});
	$("#processing").click(function () {
		that.field.filter = "processing";
		that.init("/HU-Web/protocols/list.do", that.fields);
	});
	$("#rejected").click(function () {
		that.field.filter = "rejected";
		that.init("/HU-Web/protocols/list.do", that.fields);
	});
	$("#processed").click(function () {
		that.field.filter = "processed";
		that.init("/HU-Web/protocols/list.do", that.fields);
	});
	$("#paused").click(function () {
		that.field.filter = "paused";
		that.init("/HU-Web/protocols/list.do", that.fields);
	});
}	
