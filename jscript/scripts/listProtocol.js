navigation.protocol = function () {

    $("#new").click(function () {
			window.location.href = "/HU-Web/protocols/add";
    });

    $("#delete").click(function () {
			window.location.href = "/HU-Web/protocols/delete";
    });
  	$(".table-main").on('click', '.table-row', function(e){
  		var xPosition = e.pageX;
  		var positX = $(this).children(":eq(1)").position().left;
  		if(xPosition > positX){
  			window.location.href = window.location.pathname + "/specification/" + $(this).find('input').attr('id') + "/view";
  		}
  	});

  	$("#protocolAcceptInWork").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Заявить?',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolAcceptInWork', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolAcceptInWorkDown").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'В черновик',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolAcceptInWorkDown', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolAcceptPrices").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Отправить в обработку?',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolAcceptPrices', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolAcceptPricesDown").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Отменить обработку?',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolAcceptPricesDown', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolAccept").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Протокол бработан.',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolAccept', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolAcceptDown").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Отменить принятие',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolAcceptDown', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolReject").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Отклонить протокол?',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolReject', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolPaused").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Приостановить протокол?',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolStop', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });

	$("#protocolStart").click(function () {
      var sendData = {id : table.checked().id[0]};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Снять паузу?',
				onAgree : function(){
					changeStatus('/HU-Web/protocols/protocolStart', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		$('.footer').modalWindow(options);
    });
    $("#protocolAcceptInWorkDown").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'В черновик?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolAcceptInWorkDown', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });
    $("#protocolAcceptPricesDown").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Отменить? Цены не проверены',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolAcceptPricesDown', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });
    $("#protocolAcceptDown").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Отменить принятие протокола?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolAcceptDown', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });
    function changeStatus(url, sendData, type, contentType) {
      $.ajax({
  			type: type,
  			url: url,
  			data: sendData,
  			contentType: contentType,
  			async: false,
  			success: function (jsonResponse) {
  				window.location.href = "/HU-Web/protocols";
  			},
  			error: function (xhr, message) {
				var options = {
    				title: 'Внимание',
    				action : 'message',
    				text : 'Не достаточно прав доступа',
    				onAgree : function(){},
    				onDisagree : function(){}
    			}
    			$('.footer').modalWindow(options);
  			}
		});
	};
}
