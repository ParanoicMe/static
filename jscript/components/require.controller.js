var page = window.location.pathname;
var page = page.substr(8, page.length).split('/');
require(['jquery', 'bootstrap', 'modal']);
switch(page[0]) {

    case 'protocols' :
        if (!page[1]) {
            require(['jquery', 'bootstrap', 'listProtocol', 'list', 'checkbox', 'list-filter-status', 'navigation', 'navigationProtocol'], function() {
                list.field.field = 'date';
                list.init("list.do", ["supplierName", "date", "startDate", "endDate", "fileName", "contractSM", "comment"]);
                list.filterstatus();
            });
        } else {
            require(['jquery', 'bootstrap', 'formProtocol', 'navigation'], function() {
            });
        }
        break;
	case 'roles' :
        if (!page[1]) {
            require(['jquery', 'bootstrap', 'listRole', 'list', 'checkbox', 'navigation'], function() {
                list.field.field = 'name';
                list.init("list.do", ["name"]);
            });
        } else {
            require(['jquery', 'bootstrap', 'formRole', 'navigation'], function() {
            });
        }
        break;
	case 'users' :
        if (!page[1]) {
            require(['jquery', 'bootstrap', 'listUser', 'list', 'checkbox', 'navigation', 'pagination'], function() {
                list.field.field = 'name';
                list.init("list.do", ["name"]);
				list.pagination();
            });
        } else {
            require(['jquery', 'bootstrap', 'formUser', 'navigation'], function() {
            });
        }
        break;
}

require.config({
    baseUrl : '/HU-Web/static/jscript/',
    paths : {
        /*libs*/
        'jquery' : ['libs/jquery.min'],
		'bootstrap' : ['libs/bootstrap.min'],
        /*moduls*/
		'list' : ['components/listBuilder'],
		'checkbox' : ['components/checkbox'],
		'navigation' : ['components/navigation'],
		'navigationProtocol' : ['components/navigationProtocol'],
		'modal' : ['plugins/multiModal'],
		'list-filter-status' : ['components/filterstatus'],
		'pagination' : ['components/pagination'],
        /*protocol*/
        'listProtocol' : ['scripts/listProtocol'],
        'formProtocol' : ['scripts/formProtocol'],
		/*role*/
        'listRole' : ['scripts/listRole'],
        'formRole' : ['scripts/formRole'],
		/*user*/
        'listUser' : ['scripts/listUser'],
        'formUser' : ['scripts/formUser']
    },
    shim : {
        /*'showProtocols' : {
            deps : ['jquery']
        },*/
		'modal' : {
            deps : ['jquery', 'bootstrap']
        },
		'list-filter-status' : {
            deps : ['list']
        }
    }
}); 