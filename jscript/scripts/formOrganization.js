formOrganization = function () {
    $("#save").click(function () {
	validation.check();
	var id = $('#organizationId').val();
        var sendData = $('#form').serialize();
        addorganization('addOrEdit.do', sendData, 'save', 'application/x-www-form-urlencoded');
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/organizations/list";
    });
	
	function addorganization(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='organization'){
					window.location.href = "/HU-Web/organizations"
					
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
};