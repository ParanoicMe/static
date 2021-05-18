formOperation = function () {
    $("#save").click(function () {
	validation.check();
	var id = $('#operationId').val();
        var sendData = $('#form').serialize();
        addoperation('addOrEdit.do', sendData, 'save', 'application/x-www-form-urlencoded');
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/operations/list";
    });
	
	function addoperation(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='operation'){
					window.location.href = "/HU-Web/operations"
					
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
};
