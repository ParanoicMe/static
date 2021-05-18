formShop = function () {
    $("#save").click(function () {
	validation.check();
	var id = $('#shopId').val();
        var sendData = $('#form').serialize();
        addshop('addOrEdit.do', sendData, 'save', 'application/x-www-form-urlencoded');
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/shops/list";
    });
	
	function addshop(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='shop'){
					window.location.href = "/HU-Web/shops"
					
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
};