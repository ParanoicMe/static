table.pagination = function() {
	var that = this;
	var countRows=10;
	
	$('#page').text(table.field.page);
	$('#previouspage a').click(function () {
		if(table.field.page>1){
			checkbox.unCheckAll(true);
			table.field.page=parseInt($('#page').text())-1;
			that.init(that.url, that.fields);
			$('#page').text(table.field.page);
		} 
    });
	$('#nextpage a').click(function () {
		var maxPage=Math.floor(table.count/countRows);
		maxPage = maxPage + ((table.count % countRows)>0 ? 1 : 0);
		if(table.field.page<maxPage){
			checkbox.unCheckAll(true);
			table.field.page=parseInt($('#page').text())+1;
			that.init(that.url, that.fields);
			$('#page').text(table.field.page);
		}
    });
}
