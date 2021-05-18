navigation.reason = function () {
    $("#new").click(function () {
		window.location.href = "/HU-Web/reasons/add";
    });
	$("#view").click(function () {
		if (list.checked().length === 0 || list.checked().length > 1) {
            $("body").modalWindow({
                action: "message",
                title: "Edit reason",
                text: list.checked().length === 0 ? "At least one reason should be selected" : "Only one reason can be selected for editing"
            });
        } else {
            window.location.href = window.location.pathname + "/" + list.checked().id[0] + "/view";
        }
    });
    $("#delete").click(function () {
		sendData = {ids : list.checked().id};
		url = "delete";
		deletereason(url, sendData, 'POST', 'application/json');
    });

	function deletereason(url, sendData, type, contentType) {
		$.ajax({
            		url : window.location.pathname + '/' + this.url,
            		data : sendData,
            		type : type,
			success: function (jsonData) {
			
			}
		});
	};
};
