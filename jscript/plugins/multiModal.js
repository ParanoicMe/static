(function($){
	"use strict"
	$.fn.modalWindow = function(options){
		options = $.extend({
            title:"Caution!",
            text:"You want to confirm the action on the element",
            action: "confirm",
            onAgree: function(){},
            onDisagree: function(){}
		}, options);
	    var modalObject =  '<div id="multiModal" class="modal fade">' +
  					'<div class="modal-dialog">' +
    						'<div class="modal-content">' +
      							'<div class="modal-header">' +
        							//options.action == "cancel" || !"message" ?
                                     //       			'<button type="button" class="close is-modalBtn1" data-dismiss="modal" aria-hidden="true">×</button>' :
                                     //       			'<button type="button" class="close is-modalBtn2" data-dismiss="modal" aria-hidden="true">×</button>') +
        							'<h3 class="modal-title">'+options.title+'</h3>' +
      							'</div>' +
						      	'<div class="modal-body ht2">' +
								'<p>' + options.text + '</p>' +
								(options.action == "comment" ?
								'<p>Причина:</p>' +
								'<textarea type="text" id="modalText" value=""/>' : "") +
						      	'</div>' +
					      		'<div class="modal-footer">' +
								(options.action == "cancel" || "comment" && options.action != "message" ? 
								'<button class="btn btn-success is-modalBtn2" data-dismiss="modal">Yes</button>'+
								'<button class="btn is-modalBtn1" data-dismiss="modal" aria-hidden="true">No</button>'
                       						: "") +
								(options.action == "message" ?
                     						'<button class="btn btn-success is-modalBtn2" data-dismiss="modal">Ok</button>'
                						: "") +
					      		'</div>' +
					    	'</div>' +
					'</div>' +
				'</div>'
	this.prepend(modalObject);
        var $modal= $("#multiModal");
            $modal.one("click",".is-modalBtn1", function(){options.onDisagree()})
                    .one("click",".is-modalBtn2", function(){options.onAgree()})
                    .modal()
                    .on('show', function(){$modal.remove();});
	return this.modalObject;		
	};	
})(jQuery);
