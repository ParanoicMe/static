$(document).ready(function () {
    $("#save").click(function () {
	var id = $('#roleId').val();
        var sendData = $('#formRole').serialize();
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
			async: false,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='role'){
					$('body').modalWindow({
						action: "message",
						title: "Saved",
						text: "The protocol has been saved: " + jsonData.result,
						onAgree: function () {
							if (type === "save") {
								window.location.href = "/HU-Web/roles";
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