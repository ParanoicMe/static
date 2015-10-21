$(document).ready(function () {

    $("#save").click(function () {
		var sendData = $('#protocolSpecification').serialize();
		addProtocol('addProtocol.do', sendData, 'save', 'application/x-www-form-urlencoded');
		//$("#protocolSpecification").subbmit();
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/protocols/list";
    });
	
	$("#input-data").change(function () {
		var sendFormData = new FormData($('#protocolSpecification')[0]);
		var filename = $("#input-data").val().substr($("#input-data").val().lastIndexOf('\\')+1);
		$('#open').before('');
		$('#open').before(filename);
		//console.log("file-upload "+$(".file-upload").val());
		addProtocol('uploadFile.do', sendFormData, 'save', false);
	});
	
	function addProtocol(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: false,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='file'){
					$('#fullPath').attr('value', '');
					$('#fullPath').attr('value', jsonData.result);
				}
				if(jsonData.status=='SUCCESS' && jsonData.recordName=='protocol'){
					$('body').modalWindow({
						action: "message",
						title: "Saved",
						text: "The protocol has been saved: " + jsonData.result,
						onAgree: function () {
							if (type === "save") {
								window.location.href = "/HU-Web/protocols";
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