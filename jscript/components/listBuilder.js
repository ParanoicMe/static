var list = {
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
					if (list.checked().length == 1) {
						$("#view, #edit, #delete, #print, #assign, #specification, #protocolAcceptInWork").prop('disabled', false);
					} else if(list.checked().length != 0) {
						$("#edit, #assign, #specification").prop('disabled', false);
						$("#view, #delete, #print, #edit, #assign, #protocolAcceptInWork").prop('disabled', true);
					} else {
						$("#view, #delete, #print, #edit, #assign").prop('disabled', true);
                    }
                });
            }
        })
    },
    build : function(data) {
        var that = this;
        this.table = "";
        var listBody = $('.list-cell');
        var classValues = [];
        $.each(listBody, function(m, val){
			var attrebutes = $(val).attr('class');
			var classValue;
			var objClass = " object";
			if(attrebutes.indexOf(objClass) == -1){
				classValue = attrebutes;
			}else{
				classValue = attrebutes.substring(0, attrebutes.indexOf(objClass)) + attrebutes.substring(attrebutes.indexOf(objClass)+objClass.length,);
			}
			classValues[m] = classValue;
		});
        $.each(this.data, function(key, val) {
			that.table += "<div class='list-row'>"
			if(!!val.id){
				that.table += "<div class='" + classValues[0] + "'><input type='checkbox' id='" + ([key === "id"] ? val.id : "") + "'><label for='" + ([key === "id"] ? val.id : "") + "'></label></div>";
			}
			for (var j = 0; j < data.length; j++) {
				$.each(val, function(key, val) {
					if (key === data[j]) {
						if(key==='fileName'){
							that.table += "<div class='" + classValues[j+1] + "'> <a href=http://localhost/HU-Web/protocolsFiles/"+val+">" + "ПСЦ от "+val.substr(0,10) + "</a></div>";
						}else{
							that.table += "<div class='" + classValues[j+1] + "'>" + val + "</div>";
						}
					}
				});
			}
			that.table += "</div> <hr>";
		});
        if (this.table === "") {
            this.table = '<tr><td colspan="'+ (this.fields.length + 1) +'"><div id="message" style="width:100%;text-align: center;" class="alert"><strong>' + (this.field.filter.length > 1 ? 'No matches found' : 'No matches found') +'</strong></div><td><tr>';
        }
        $('.list-body').empty().append(this.table);
        //if(that.pagination) that.pagination();
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
