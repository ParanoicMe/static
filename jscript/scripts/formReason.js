formReason = function () {
    $("#save").click(function () {
	validation.check();
	var id = $('#reasonId').val();
        var sendData = $('#form').serialize();
        addreason('addOrEdit.do', sendData, 'save', 'application/x-www-form-urlencoded');
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/reasons/list";
    });
	
	function addreason(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='reason'){
					window.location.href = "/HU-Web/reasons"
					
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
};