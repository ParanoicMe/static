formRole = function () {
    $("#save").click(function () {
	validation.check();
	var id = $('#roleId').val();
        var sendData = $('#form').serialize();
        addRole('addOrEdit.do', sendData, 'save', 'application/x-www-form-urlencoded');
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/roles/list";
    });
	
	function addRole(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='role'){
					window.location.href = "/HU-Web/roles"
					
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
};
