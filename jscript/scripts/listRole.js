navigation.role = function () {
    $("#new").click(function () {
		window.location.href = "/HU-Web/roles/add";
    });
	$("#view").click(function () {
		if (list.checked().length === 0 || list.checked().length > 1) {
            $("body").modalWindow({
                action: "message",
                title: "Edit Role",
                text: list.checked().length === 0 ? "At least one role should be selected" : "Only one role can be selected for editing"
            });
        } else {
            window.location.href = window.location.pathname + "/" + list.checked().id[0] + "/view";
        }
    });
    $("#delete").click(function () {
		sendData = {ids : list.checked().id};
		url = "delete";
		deleteRole(url, sendData, 'POST', 'application/json');
    });

	function deleteRole(url, sendData, type, contentType) {
		$.ajax({
            		url : window.location.pathname + '/' + this.url,
            		data : sendData,
            		type : type,
			success: function (jsonData) {
			
			}
		});
	};
};
