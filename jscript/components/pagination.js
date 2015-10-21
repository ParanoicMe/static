list.pagination = function() {
	var that = this;
	$('#page').text(list.field.page);
	$('#previouspage a').click(function () {
		if(list.field.page>1){
			checkbox.unCheckAll(true);
			list.field.page=parseInt($('#page').text())-1;
			that.init(that.url, that.fields);
			$('#page').text(list.field.page);
		} 
    });
	$('#nextpage a').click(function () {
		checkbox.unCheckAll(true);
		list.field.page=parseInt($('#page').text())+1;
		that.init(that.url, that.fields);
		$('#page').text(list.field.page);
    });
}