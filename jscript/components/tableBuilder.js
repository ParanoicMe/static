var table = {
    field : {
        page : 1,
        field : "name",
        order : "asc",
        filter : ""
    },
    step : 20,
    init : function(url, fields) {
        var that = this;
        this.url = url;
	//alert(window.location.pathname + '/' + this.url);
	$.ajax({
            url : window.location.pathname + '/' + this.url,
            data : that.field,
            type : 'POST',
            success : function(data) {
                that.data = data.items;
                that.count = data.amount;
                that.build(that.fields = fields);
                checkbox.init(true);
                $('input[type=checkbox]').click(function() {
					if (table.checked().length == 1) {
						$("#delete, #print, #view, #upStatus, #protocolAcceptInWork, #protocolAcceptInWorkDown, #protocolAcceptPrices, #protocolAcceptPricesDown, #protocolAccept, #protocolAcceptDown, #protocolReject, #protocolPaused, #protocolStart").prop('disabled', false);
					} else if(table.checked().length != 0) {
						$("#delete, #print, #view, #upStatus, #protocolAcceptInWork, #protocolAcceptInWorkDown, #protocolAcceptPrices, #protocolAcceptPricesDown, #protocolAccept, #protocolAcceptDown, #protocolReject, #protocolPaused, #protocolStart").prop('disabled', true);
                    }else {
						$("#delete, #view, #protocolAcceptInWork, #protocolAcceptInWorkDown, #protocolAcceptPrices, #protocolAcceptPricesDown, #protocolAccept, #protocolAcceptDown, #protocolReject, #protocolPaused, #protocolStart").prop('disabled', true);
                    }
                });
            }
        })
    },
    build : function(data) {
		var that = this;
        this.table = "";
        var tablePrintBody = $('.table-head th');
        var classValues = [];
        $.each(tablePrintBody, function(m, val){
			var attrebutes = $(val).attr('class');
			var classValue;
			var objClass = " object";
			if(attrebutes.indexOf(objClass) == -1){
				classValue = attrebutes;
			}else{
				classValue = attrebutes.substring(0, attrebutes.indexOf(objClass)) + attrebutes.substring(attrebutes.indexOf(objClass)+objClass.length);
			}
			classValues[m] = classValue;
		});
        $.each(this.data, function(key, val) {
			that.table += "<tr class='table-row " + (("status" in val) ? val.status : "") + "'>"
			if(!!val.id && !($('#table-print').length > 0)){
				that.table += "<td class='" + classValues[0] + "'><input type='checkbox' id='" + ([key === "id"] ? val.id : "") + "'><label for='" + ([key === "id"] ? val.id : "") + "'></label></td>";
			}
			for (var j = 0; j < data.length; j++) {
				$.each(val, function(key, val) {
					if (key === data[j]) {
						if(key==='fileName'){
							that.table += "<td class='" +  classValues[$('#table-print').length > 0 ? j : j+1] +
							"'> <a href='http://192.168.1.77/HU-Web/protocolsFiles/" + val + "'>" + (val==null ? "" : val) + "</a></td>";
						}else{
							that.table += "<td class='" +  classValues[$('#table-print').length > 0 ? j : j+1] + "'>" + val + "</td>";
						}
					}
				});
			}
			that.table += "</td>";
		});
		$('.table-row').remove();
        if (this.table === "") {
            this.table = '<tr class = "table-row"><th colspan="'+ (this.fields.length + 1) +'"><div id="message" style="width:100%;text-align: center;" class="alert"><strong>' + (this.field.filter.length > 1 ? 'No matches found' : 'No matches found') +'</strong></div><th><tr>';
        }
        $('table .table-head').after(this.table);
    },
    checked : function() {
        var items = "<ul class='items-list'>", id = [], length = 0;
        $('input[type=checkbox]:checked:not(#check-all)').each(function() {
            items += "<li>" + $(this).parent().next().text() + "</li>";
            id.push(parseInt($(this).attr("id")));
            length++;
        });
        return {
            id : id,
            length : length,
            items : items + "</ul>"
        };
    }
};
