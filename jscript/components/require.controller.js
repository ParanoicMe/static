var page = window.location.pathname;
var page = page.substr(8, page.length).split('/');
require(['jquery', 'bootstrap']);
switch(page[0]) {

    case 'protocols' :
        if (!page[1]) {
			require(['jquery', 'bootstrap', 'multiModal', 'listProtocol', 'table', 'checkbox', 'list-filter-status', 'navigation', 'pagination'], function() {
				table.field.field = 'date';
				table.field.order = 'desc';
				table.init("list.do", ["supplierName", "contractSM", "date", "startDate", "endDate", "comment", "userOwner", "fileName"]);
				table.pagination();
				navigation.protocol();
				navigation.left();
				table.pagination();
			});
        } else if (page[3]==='view') {
			require(['jquery', 'bootstrap', 'multiModal', 'formProtocol', 'tableSpec', 'checkbox',  'pagination', 'navigation'], function() {
				tableSpec.field.field = 'name';
				tableSpec.init("listSpecification.do", ["article", "name", "brand", "country", "priceNonNDS", "priceNonNDSSale", "percentPriceChange",
				"sizeWidth", "sizeHeight", "kindPack", "sizeTransportWidth", "sizeTransportHeight", "barcode", "manufacturer", "expirationDate",
				"percentSale", "manufacturerNDS", "sizeDeep", "countPack", "minDelivery", "sizeTransportDeep", "countPallet"]);
				navigation.left();
				table.pagination();
        formProtocol();
			});
		} else {
            require(['jquery', 'bootstrap', 'multiModal', 'formProtocol', 'navigation'], function() {
				navigation.left();
				formProtocol();
            });
        }
    break;
	case 'roles' :
        if (!page[1]) {
            require(['jquery', 'bootstrap', 'multiModal', 'listRole', 'list', 'checkbox', 'navigation', 'pagination'], function() {
				navigation.left();
				navigation.role();
				table.pagination();
				list.field.field = 'name';
				list.init("list.do", ["name"]);
            });
        } else {
            require(['jquery', 'bootstrap', 'multiModal', 'checkbox', 'formRole', 'navigation', 'validation'], function() {
		navigation.left();
		checkbox.init(true);
		formRole();
		//validation.init();
            });
        }
        break;
	case 'users' :
        if (!page[1]) {
            require(['jquery', 'bootstrap', 'multiModal', 'listUser', 'table', 'checkbox', 'navigation', 'pagination'], function() {
                navigation.left();
                table.field.field = 'name';
                table.init("list.do", ["name"]);
                navigation.user();
		table.pagination();
            });
        } else {
            require(['jquery', 'bootstrap', 'multiModal', 'formUser', 'navigation'], function() {
		navigation.left();
		formUser();
            });
        }
        break;
	case 'requests' :
        if (!page[1]) {
            require(['jquery', 'bootstrap', 'multiModal', 'table', 'checkbox', 'navigation', 'pagination', 'listRequest'], function() {
                navigation.left();
                table.field.field = 'date';
                table.field.order = 'desc';
                table.init("list.do", ["nameId", "shopName", "date", "description", "userOwner"]);
                navigation.req();
				table.pagination();
            });
        }else if (page[1]==='specification') {
			require(['jquery', 'bootstrap', 'multiModal', 'tableSpec', 'checkbox', 'navigation', 'pagination', 'formRequest'], function() {
                navigation.left();
                tableSpec.field.field = 'article';
                tableSpec.init("listSpecification.do", ["article", "nameGood", "supplier", "numberInvoice", "countInvoice", "supplierPriceInvoice",
							"priceInvoice", "extracharge", "actualPrice", "countWish", "priceWish", "measure","dateInvoice",
							"ndsInvoice", "actualRemnant"]);
				table.pagination();
				formRequest();
			});
        } else if(page[1]==='print'){
            require(['jquery', 'bootstrap', 'multiModal', 'checkbox', 'tableSpec'], function() {
			tableSpec.field.field = '';
            tableSpec.field.order = 'desc';
            tableSpec.init("table.do", ["article", "nameGood", "supplier", "numberInvoice", "countInvoice", "supplierPriceInvoice",
							"priceInvoice", "extracharge", "actualPrice", "countWish", "priceWish", "measure","dateInvoice",
							"ndsInvoice", "actualRemnant"]);
            });
        }else {
            require(['jquery', 'bootstrap', 'multiModal', 'checkbox', 'formRequest', 'navigation'], function() {
			navigation.left();
			formRequest();
			checkbox.init(true);
            });
        }
        break;
	case 'login' :
		require(['jquery', 'bootstrap', 'loginPage'], function() {
		login.page();
            });
	break;
	case 'dashboard' :
		require(['jquery', 'bootstrap', 'navigation'], function() {
		navigation.left();
            });
	break;

	case 'history' :
        require(['jquery', 'bootstrap', 'checkbox', 'navigation', 'pagination'], function() {
		navigation.left();
		table.pagination();
		list.init("list.do", ["userName", "countClaimed", "countPriceAccept", "countProcessed", "countRejected", "countPaused"]);
        });
        break;
}

require.config({
    baseUrl : '/HU-Web/resources/jscript/',
    paths : {
        /*libs*/
        	'jquery' : ['libs/jquery-3.2.1.min'],
		'bootstrap' : ['libs/bootstrap.min'],
	/*plugins*/
        	'multiModal' : ['plugins/multiModal'],
        /*moduls*/
		'list' : ['components/listBuilder'],
		'table' : ['components/tableBuilder'],
		'tableSpec' : ['components/tableBuilderSpec'],
		'checkbox' : ['components/checkbox'],
		'navigation' : ['components/navigation'],
		'navigationProtocol' : ['components/navigationProtocol'],
		'list-filter-status' : ['components/filterStatus'],
		'pagination' : ['components/pagination'],
		'loginPage' : ['components/loginPage'],
		'validation' : ['components/validation'],
        /*protocol*/
        	'listProtocol' : ['scripts/listProtocol'],
        	'formProtocol' : ['scripts/formProtocol'],
	/*role*/
        	'listRole' : ['scripts/listRole'],
        	'formRole' : ['scripts/formRole'],
	/*user*/
        	'listUser' : ['scripts/listUser'],
        	'formUser' : ['scripts/formUser'],
	/*request*/
        	'listRequest' : ['scripts/listRequest'],
        	'formRequest' : ['scripts/formRequest']
    },
    shim : {
        	'bootstrap' : {
            deps : ['jquery']
        },
		'list-filter-status' : {
            deps : ['list']
        },
		'navigation' : {
            deps : ['table']
        },
		'pagination' : {
            deps : ['table']
        },
		'multiModal' : {
            deps : ['bootstrap']
        }
    }
});
