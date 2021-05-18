formRequest = function () {
	$(".formRequestSpec").hide();
	var commentInit=$('#label-comment').val();
	$("#save").click(function () {
        var sendData = $('#form').serialize();
		var options = {
			title: 'Внимание',
			action : 'cancel',
			text : 'Сохранить и перейти к редактированию?',
			onAgree : function(){
				var someID = setRequest('addOrEdit.do', sendData, 'POST', 'application/x-www-form-urlencoded');
			},
			onDisagree : function(){}
		};
		$('.footer').modalWindow(options);
	});

	$("#close").click(function () {
		if(commentInit === $('#label-comment').val()){
			window.location.href = "/HU-Web/requests";
		}else{
			var sendDataUpdate = $('#formInfo').serialize();
			updateRequest('/HU-Web/requests/addOrEdit.do', sendDataUpdate, 'POST', 'application/x-www-form-urlencoded');
		}
	});

	$("#delete").click(function () {
		if(table.checked().id[0]>0){
			var sendDataDelete = {requestSpecId : table.checked().id[0],
				requestId : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
			deleteSpecItem('/HU-Web/requests/cardDeleteSpec', sendDataDelete, 'POST', 'application/x-www-form-urlencoded');
			var stop = 0;
		}else{
			var options = {
				title: 'Внимание',
				action : 'message',
				text : 'Нет позиций для удаления',
				onAgree : function(){},
				onDisagree : function(){}
			}
		}
	});

	$("#add").click(function () {
		var seltext = $('#select-docs option:selected').text();
		var doccount = seltext.slice(seltext.indexOf("Кол-во:")+7, seltext.indexOf(" Дата"));
		if ($("#count").val() == 0 || $("#count").val() > +doccount){
			var options = {
				title: 'Внимание',
				action : 'message',
				text : 'Количество не заполнено или больше выбранного прихода',
				onAgree : function(){},
				onDisagree : function(){}
			}
			$('.footer').modalWindow(options);
		} else{
			var sendDataAdd = $('#form').serialize();
			addArticle('/HU-Web/requests/cardAddSpec', sendDataAdd, 'POST', 'application/x-www-form-urlencoded');
			$("#form").hide(500);
			$("#add").prop('disabled', true);
		};
    });

	$("#search").click(function () {
		var sendArticle = {article: $("#search-article").val()};
		searhByArticle('/HU-Web/requests/cardPick', sendArticle, 'POST', 'application/x-www-form-urlencoded');
	});

	$("#up").click(function () {
		if(!$("#message").length){
			var sendData = {
				requestId : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])
			};
			var options = {
				title: 'Внимание',
				action : 'cancel',
				text : 'Отправить и закрыть?',
				onAgree : function(){
					changeStatusRequest('/HU-Web/requests/requestStatusUp', sendData, 'POST', 'application/x-www-form-urlencoded');
				},
				onDisagree : function(){}
			};
		}else{
			var options = {
				title: 'Внимание',
				action : 'message',
				text : 'Спецификация пуста',
				onAgree : function(){}
			};
		}
		$('.footer').modalWindow(options);
	});
	$("#down").click(function () {
		var sendData = {
			requestId : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])
			};
		var options = {
			title: 'Внимание',
			action : 'cancel',
			text : 'Отменить и закрыть?',
			onAgree : function(){
				changeStatusRequest('/HU-Web/requests/requestStatusDown', sendData, 'POST', 'application/x-www-form-urlencoded');
			},
			onDisagree : function(){}
		};
		$('.footer').modalWindow(options);
	});

	$("#block").click(function () {
		var sendData = {
			requestId : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])
			};
		var options = {
			title: 'Внимание',
			action : 'cancel',
			text : 'Заблокировать и закрыть?',
			onAgree : function(){
				changeStatusRequest('/HU-Web/requests/requestStatusBlock', sendData, 'POST', 'application/x-www-form-urlencoded');
			},
			onDisagree : function(){}
		};
		$('.footer').modalWindow(options);
	});

	$("#acceptR").click(function () {
		var sendDataItems = [];
		var options = {
			title: 'Внимание',
			action : 'cancel',
			text : 'Принять и закрыть?',
			onAgree : function(){
				var specitems = getUpdateItems();
				items = JSON.stringify({
					'items' : specitems,
					'requestId' : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])
				});
				updateRequest('/HU-Web/requests/requestStatusAccept', items, "POST", 'application/json; charset=utf-8');
			},
			onDisagree : function(){}
		};
		$('.footer').modalWindow(options);
	});

	$("#saveSpecification").click(function () {
		var sendDataItems = [];
		var options = {
			title: 'Внимание',
			action : 'cancel',
			text : 'Сохранить?',
			onAgree : function(){
				var specitems = getUpdateItems();
				items = JSON.stringify({
					'items' : specitems,
					'requestId' : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])
				});
				updateRequest('/HU-Web/requests/requestSave', items, "POST", 'application/json; charset=utf-8');
			},
			onDisagree : function(){}
		};
		$('.footer').modalWindow(options);
	});

	$("#reject").click(function () {

		var options = {
			title: 'Внимание',
			action : 'comment',
			text : 'Отклонить и закрыть?',
			onAgree : function(){
				var testvar = $("#modalText").val();
				var sendData = {
						requestId : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2]),
						commentReject : $("#modalText").val()
					};
				changeStatusRequest('/HU-Web/requests/requestStatusReject', sendData, "POST", 'application/x-www-form-urlencoded');
			},
			onDisagree : function(){}
		};
		$('.footer').modalWindow(options);
	});

	$("#print").click(function () {
		var id = parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2]);
		var sendData = {'id' : id};
		window.open("/HU-Web/requests/print/" + id, '_blank');
	});

	function setRequest(url, sendData, type, contentType) {
		$.ajax({
			type: type,
			url: url,
			data: sendData,
			contentType: contentType,
			async: true,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='STATUSSUCCESS' && jsonData.recordName=='request'){
					//var fields = ["article", "nameGood", "measure", "supplier", "numberInvoice", "dateInvoice", "countInvoice",
					//"supplierPriceInvoice", "ndsInvoice", "extrachargeInvoice", "priceInvoice", "actualPrice", "actualRemnant"
					//];
					//table.init("/tableSpecification.do", fields);


					//tableSpec.field.field = 'article';
					//tableSpec.data = jsonResponse.items;
					//this.data = jsonResponse.result;
					//tableSpec.build(fields);
					$('input[type=checkbox]').click(function() {
						if (table.checked().length == 1) {
							$("#view, #edit, #delete, #assign, #specification").prop('disabled', false);
						} else if(table.checked().length != 0) {
							$("#edit, #assign, #specification").prop('disabled', false);
						} else {
							$("#view, #edit, #delete, #assign").prop('disabled', true);
						};
					});
					window.location.href = "/HU-Web/requests/specification/" + jsonData.result + "/view/";
				}
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	};

	function searhByArticle(url, sendData, type, contentType) {
		$.ajax({
            url : url,
            data : sendData,
            type : 'POST',
            async: true,
			success: function (jsonResponse) {
				if(jsonResponse.status=='STATUSSUCCESS'){
					$("#form").show(500);
					$("#label-article").text(jsonResponse.result.article);
					$("#label-name").text(jsonResponse.result.name);
					$("#requestId").val(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2]);
					$("#article").val(jsonResponse.result.article);
					$("#count").val(0);
					var docs = jsonResponse.result.jsonDocumentsInfos;
					if(docs.length > 0){
						var select = $('#select-docs');
						select.children().remove();
						$.each(docs, function(val, text) {
						    select.append(new Option("Номер:" + text.docName+" Кол-во:"+text.quantity + " Дата документа:" + text.docDate +
						    " Розничная цена:" + text.retailPrice, text.docId));
						});
						$("#add").prop('disabled', false);
					}
				}
			},
			error: function (xhr, message) {
				alert("Артикул не найден");
			}
		});
	};
//021097121
	function addArticle(url, sendData, type, contentType) {
		$.ajax({
			url : url,
            data : sendData,
            type : 'POST',
            async: false,
			success: function (jsonResponse) {
				if(jsonResponse.items!=0){
					var fields = ["article", "nameGood", "supplier", "numberInvoice", "countInvoice", "supplierPriceInvoice",
							"priceInvoice", "extracharge", "actualPrice", "countWish", "priceWish", "measure","dateInvoice",
							"ndsInvoice", "actualRemnant"];

					tableSpec.init("listSpecification.do", fields);
				}
			},
			error: function (xhr, message) {
				alert("Артикул не добавлен");
			}
		});
	};

	function deleteSpecItem(url, sendData, type, contentType) {
		$.ajax({
			type: type,
			url: url,
			data: sendData,
			contentType: contentType,
			async: false,
			success: function (jsonResponse) {
				var fields = ["article", "nameGood", "supplier", "numberInvoice", "countInvoice", "supplierPriceInvoice",
							"priceInvoice", "extracharge", "actualPrice", "countWish", "priceWish", "measure","dateInvoice",
							"ndsInvoice", "actualRemnant"];
				tableSpec.init("listSpecification.do", fields);
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	};

	function changeStatusRequest(url, sendData, type, contentType) {
		$.ajax({
			type: type,
			url: url,
			data: sendData,
			contentType: contentType,
			async: false,
			success: function (jsonResponse) {
				window.location.href = "/HU-Web/requests";
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	};
	function updateRequest(url, sendData, type, contentType) {
		$.ajax({
			url : url,
			type: type,
			dataType: 'json',
			contentType: contentType,
			mimeType: 'application/json',
			data : sendData,
			cache: false,
			success: function (jsonResponse) {
				window.location.href = "/HU-Web/requests/";
			},
			error: function (xhr, message) {
				alert("Ajax error" + message);
			}
		});
	};
	function getUpdateItems() {
		var specitems = [];
		var somevar = $('.table-row:not(.table-row.end)').each(function() {
			var idSpec = $(this).children().children('input').attr('id');
			var priceWish = $(this).children().children('input.priceWish').val();
			specitem = {"id":idSpec,"priceWish":priceWish};
			specitems.push(specitem);
		});
		return specitems;
    	};
};
