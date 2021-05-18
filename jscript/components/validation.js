var validation = {
	init : function(){
		var that = this;
		//var validationForm=document.getElementById('form').parentElement;
		var validationInput = document.getElementById('validationInput');
		validationInput.keydown= function() {
			that.check();
		};
		validationInput.onchange= function() {
			that.check();
		};
	},
	check : function(){
		var div = document.getElementById('form');
		var elems_child = div.childNodes;
		for (var i=0; elems_child.length>i; i++){
			var val = elems_child[i];
			if(val.className == 'form-row validation'){
				//alert(validationInput.value);
				var reg = new RegExp(val.lastElementChild.getAttribute('value'))
				if(reg.test(validationInput.value)){
					validationInput.removeAttribute('class');
					val.lastElementChild.classList.remove('active');
				}else{
					validationInput.setAttribute('class', 'active');
					val.lastElementChild.classList.add('active');
				}
			}
		}
	}
};
