navigation.req = function () {
	$("#new").click(function () {
		window.location.href = "/HU-Web/requests/add";
    });

    $("#delete").click(function () {
		var sendData = {ids : table.checked().id};
		url = "/HU-Web/requests/delete";
		deleteRequests(url, sendData, 'POST', 'application/x-www-form-urlencoded');
	});

	$("#print").click(function () {
		var sendData = {id : table.checked().id[0]};
		if(table.checked().id[0] > 0){
			window.open(window.location.pathname + "/print/" + table.checked().id[0], '_blank');
		}
	});

	$(".table-main").on('click', '.table-row', function(e){
		var xPosition = e.pageX;
		var positX = $(this).children(":eq(1)").position().left;
		if(xPosition > positX){
			window.location.href = window.location.pathname + "/specification/" + $(this).find('input').attr('id') + "/view";
		}
	});

	function deleteRequests(url, sendData, type, contentType) {
		$.ajax({
			url: url,
			data: sendData,
            type : type,
			success: function () {
				window.location.href = "/HU-Web/requests"
			},
			error: function (xhr, message) {
				alert("Ajax error" + xhr.body);
				window.location.href = "/HU-Web/requests";
			}
		});
	};
};
