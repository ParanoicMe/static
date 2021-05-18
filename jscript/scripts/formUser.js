formUser = function () {
    $("#save").click(function () {
	var id = $('#userId').attr('value');
        var sendData = $('#form').serialize();
        if (id != "") {
			saveUser('edit.do', sendData, 'save', 'application/x-www-form-urlencoded');
        }
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/users";
    });
	
	function saveUser(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: false,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='STATUSSUCCESS'){
					var options = {
						title: 'Внимание',
						action : 'message',
						text : 'Пользователь' + jsonData.result + ' успешно сохранен.',
						onAgree : function(){
							window.location.href = "/HU-Web/users";
						},
						onDisagree : function(){}
					};
					$('.footer').modalWindow(options);
				}
			},
			error: function (xhr, message) {
				var options = {
						title: 'Внимание',
						action : 'message',
						text : 'Ошибка' + message,
						onAgree : function(){
						},
						onDisagree : function(){}
					};
					$('.footer').modalWindow(options);
				//alert("Ajax error" + message);
			}
		});
	}
	
};
