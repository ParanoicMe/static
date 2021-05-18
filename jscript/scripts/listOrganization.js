navigation.organization = function () {
    $("#new").click(function () {
		window.location.href = "/HU-Web/organizations/add";
    });
	$("#view").click(function () {
		if (list.checked().length === 0 || list.checked().length > 1) {
            $("body").modalWindow({
                action: "message",
                title: "Edit organization",
                text: list.checked().length === 0 ? "At least one organization should be selected" : "Only one organization can be selected for editing"
            });
        } else {
            window.location.href = window.location.pathname + "/" + list.checked().id[0] + "/view";
        }
    });
    $("#delete").click(function () {
		sendData = {ids : list.checked().id};
		url = "delete";
		deleteorganization(url, sendData, 'POST', 'application/json');
    });

	function deleteorganization(url, sendData, type, contentType) {
		$.ajax({
            		url : window.location.pathname + '/' + this.url,
            		data : sendData,
            		type : type,
			success: function (jsonData) {
			
			}
		});
	};
};
