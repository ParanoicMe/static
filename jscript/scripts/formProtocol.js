formProtocol = function () {
    var tableSpec = this.tableSpec;
    $("#save").click(function () {
		var id = $("#protocolId").val();
		var startDate = $("#startDate").val();
		var endDate = $("#endDate").val();
		var supId = $("#supplierId").val();
		var fileName = $("#fileName").val();
		var comment = $("#comment").val();
		var protocolStatus=$("#protocolStatus").val();
		var file = $('input[type=file]')[0].files[0];
		var sendData = new FormData();
		sendData.append("id", id);
		sendData.append("startDate", startDate);
		sendData.append("endDate", endDate);
		sendData.append("supplierId", supId);
		sendData.append("file", file);
		sendData.append("comment", comment);
		addProtocol('addProtocol.do', sendData, 'save', false);
    });

    $("#cancel").click(function () {
		window.location.href = "/HU-Web/protocols/list";
    });

    $("#input-data").change(function () {
      var filename = $("#input-data").val().substr($("#input-data").val().lastIndexOf('\\')+1);
      $('#open').before('');
      $('#open').before(filename);
    });
    jQuery.fn.filterByText = function(textbox, selectSingleMatch) {
      return this.each(function() {
        var select = this;
        var options = [];
        $(select).find('option').each(function() {
          options.push({value: $(this).val(), text: $(this).text()});
        });
        $(select).data('options', options);
        $(textbox).bind('change keyup', function() {
          var options = $(select).empty().scrollTop(0).data('options');
          var search = $.trim($(this).val());
          var regex = new RegExp(search,'gi');

          $.each(options, function(i) {
            var option = options[i];
            if(option.text.match(regex) !== null) {
              $(select).append(
                 $('<option>').text(option.text).val(option.value)
              );
            }
          });
          if (selectSingleMatch === true &&
              $(select).children().length === 1) {
            $(select).children().get(0).selected = true;
          }
        });
      });
    };
    $("#supplierId").filterByText($("#search-supplier"), true);

	$("#protocolAcceptInWork").click(function () {
        var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
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
  $("#protocolAcceptPrices").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'В обработку?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolAcceptPrices', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });
    $("#protocolAccept").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Принять?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolAccept', sendData, 'POST', 'application/x-www-form-urlencoded');
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
    $("#protocolReject").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Отменить протокол?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolReject', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });
    $("#protocolPaused").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Приостановить протокол?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolPaused', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });
    $("#protocolStart").click(function () {
      var sendData = {id : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])};
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Возобновить протокол?',
        onAgree : function(){
          changeStatus('/HU-Web/protocols/protocolStart', sendData, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });

    $("#saveSpec").click(function () {
      var specitems = getUpdateItems();
      var options = {
        title: 'Внимание',
        action : 'cancel',
        text : 'Сохранить спецификацию?',
        onAgree : function(){
			       items = JSON.stringify({
               'items' : specitems,
               'protocolId' : parseInt(window.location.pathname.substr(8, window.location.pathname.length).split('/')[2])
               });
               saveSpec(window.location.href + '/saveSpecification.do', items, 'POST', 'application/x-www-form-urlencoded');
        },
        onDisagree : function(){}
      };
      $('.footer').modalWindow(options);
    });

    $("#editSpec").click(function () {
       tableSpec.build(["article", "name", "brand", "country", "priceNonNDS", "priceNonNDSSale", "percentPriceChange",
      "sizeWidth", "sizeHeight", "kindPack", "sizeTransportWidth", "sizeTransportHeight", "barcode", "manufacturer", "expirationDate",
      "percentSale", "manufacturerNDS", "sizeDeep", "countPack", "minDelivery", "sizeTransportDeep", "countPallet"]);
    });

	$("#specMode").on("change", function() {
		var selectMode = $("#specMode option:selected").val();
		if(selectMode == 'core'){
      tableSpec.build(["article", "name", "brand", "country", "priceNonNDS", "priceNonNDSSale", "percentPriceChange",
      "sizeWidth", "sizeHeight", "kindPack", "sizeTransportWidth", "sizeTransportHeight", "barcode", "manufacturer", "expirationDate",
      "percentSale", "manufacturerNDS", "sizeDeep", "countPack", "minDelivery", "sizeTransportDeep", "countPallet"]);
      $('.analytics').children().hide();
			$('.price').children().hide();
      $('.core').children().show();
		}
		if(selectMode == "analytics"){
      tableSpec.build(["article", "name", "priceNonNDS", "priceNonNDSSale", "percentPriceChange",
      "priceContract", "oldPricePSC", "lastPriceSM", "barcode", "percentSale", "manufacturerNDS"
    , "numContract", "dateOldPSC", "lastLocationSM"]);
			$('.core').children().hide();
			$('.price').children().hide();
      $('.analytics').children().show();
		}
		if(selectMode == "price"){
      tableSpec.build(["article", "name", "priceNonNDS", "priceNonNDSSale", "percentPriceChange",
      "percentSale", "manufacturerNDS", "barcode"]);
			$('.analytics').children().hide();
			$('.core').children().hide();
      $('.price').children().show();
		}
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
	function addProtocol(url, sendData, type, contentType) {
		$.ajax({
			type: 'POST',
			url: url,
			data: sendData,
			contentType: contentType,
			async: false,
			processData: false,
			success: function (jsonData) {
				if(jsonData.status=='STATUSSUCCESS' && jsonData.recordName=='file'){
					$('#fileName').attr('value', '');
					$('#fileName').attr('value', jsonData.result);
				}
				if(jsonData.status=='STATUSSUCCESS' && jsonData.recordName=='protocol'){
          var options = {
      			title: 'Сообщение',
      			action : 'message',
      			text : 'Протокол загружен',
      			onAgree : function(){
      				window.location.href = "/HU-Web/protocols";
      			}
      		}
      		$('.footer').modalWindow(options);
				}
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
			var article = $(this).children().children('input.article').val();
			specitem = {"id":idSpec,"article":article};
			specitems.push(specitem);
		});
		return specitems;
    };
    function saveSpec(url, sendData, type, contentType) {
      $.ajax({
        type: type,
        url: url,
        data: sendData,
        contentType: contentType,
        async: false,
        success: function (jsonResponse) {
          var options = {
            title: 'Внимание',
            action : 'message',
            text : 'Спецификация сохранена',
            onAgree : function(){},
            onDisagree : function(){}
          }
          $('.footer').modalWindow(options);
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
};
