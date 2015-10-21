list.filterstatus = function() {
	var that = this;
	$("li").click(function () {
		checkbox.unCheckAll(true);
		list.field.filter=this.id;
		that.init(that.url, that.fields); 
    });
	
}