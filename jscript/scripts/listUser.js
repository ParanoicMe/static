navigation.user = function () {
	$("#view").click(function () {
		if (table.checked().length === 0 || table.checked().length > 1) {
			$("body").modalWindow({
	                	action: "message",
	                	title: "Edit User",
		                text: table.checked().length === 0 ? "At least one role should be selected" : "Only one role can be selected for editing"
			});
        	} else {
			window.location.href = window.location.pathname + "/" + table.checked().id[0] + "/view";
		}
	});
	$("#search-user").on('keypress', function (e) {
		if(e.which===13 && $("#search-user").val().trim().length >0){
			table.field.filter =  $("#search-user").val().toUpperCase();
			table.init('list.do', ["name"]);
		}else if($("#search-user").val().trim().length >= 2){
			table.field.filter =  $("#search-user").val().toUpperCase()+String.fromCharCode(e.which).toUpperCase();
			table.init('list.do', ["name"]);
		}	
	});

	$(".table-main").on('click', '.table-row', function(e){
		var xPosition = e.pageX;
		var positX = $(this).children(":eq(1)").position().left;
		if(xPosition > positX){
			window.location.href = window.location.pathname + "/" + $(this).find('input').attr('id') + "/view";
		}
	});

};
