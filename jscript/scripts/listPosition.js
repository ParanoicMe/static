navigation.position = function () {
    $("#new").click(function () {
		window.location.href = "/HU-Web/positions/add";
    });
	$("#view").click(function () {
		if (list.checked().length === 0 || list.checked().length > 1) {
            $("body").modalWindow({
                action: "message",
                title: "Edit position",
                text: list.checked().length === 0 ? "At least one position should be selected" : "Only one position can be selected for editing"
            });
        } else {
            window.location.href = window.location.pathname + "/" + list.checked().id[0] + "/view";
        }
    });
    $("#delete").click(function () {
		sendData = {ids : list.checked().id};
		url = "delete";
		deleteposition(url, sendData, 'POST', 'application/json');
    });

	function deleteposition(url, sendData, type, contentType) {
		$.ajax({
            		url : window.location.pathname + '/' + this.url,
            		data : sendData,
            		type : type,
			success: function (jsonData) {
			
			}
		});
	};
};
