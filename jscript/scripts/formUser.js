$(document).ready(function () {
    $("#save").click(function () {
	var id = $('#userid').attr('value');
        var sendData = $('#formUser').serialize();
        if (id != "") {
			setRoles('edit.do', sendData, 'save', 'application/x-www-form-urlencoded');
        }
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/users";
    });
	
	function setRoles(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: false,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='userRole'){
					$('body').modalWindow({
						action: "message",
						title: "Saved",
						text: "The user has been saved: " + jsonData.result,
						onAgree: function () {
							if (type === "save") {
								window.location.href = "/HU-Web/users";
							}
						}
					});
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	}
	
});