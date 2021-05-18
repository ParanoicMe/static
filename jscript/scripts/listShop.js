navigation.shop = function () {
    $("#new").click(function () {
		window.location.href = "/HU-Web/shops/add";
    });
	$("#view").click(function () {
		if (list.checked().length === 0 || list.checked().length > 1) {
            $("body").modalWindow({
                action: "message",
                title: "Edit shop",
                text: list.checked().length === 0 ? "At least one shop should be selected" : "Only one shop can be selected for editing"
            });
        } else {
            window.location.href = window.location.pathname + "/" + list.checked().id[0] + "/view";
        }
    });
    $("#delete").click(function () {
		sendData = {ids : list.checked().id};
		url = "delete";
		deleteshop(url, sendData, 'POST', 'application/json');
    });

	function deleteshop(url, sendData, type, contentType) {
		$.ajax({
            		url : window.location.pathname + '/' + this.url,
            		data : sendData,
            		type : type,
			success: function (jsonData) {
			
			}
		});
	};
};
