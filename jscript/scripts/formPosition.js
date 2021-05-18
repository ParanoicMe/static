formPosition = function () {
    $("#save").click(function () {
	validation.check();
	var id = $('#positionId').val();
        var sendData = $('#form').serialize();
        addposition('addOrEdit.do', sendData, 'save', 'application/x-www-form-urlencoded');
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/positions/list";
    });
	
	function addposition(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='position'){
					window.location.href = "/HU-Web/positions"
					
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
};