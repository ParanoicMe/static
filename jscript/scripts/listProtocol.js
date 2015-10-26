$(document).ready(function () {

    $("#new").click(function () {
			window.location.href = "/HU-Web/protocols/add";
    });


    $("#edit").click(function () {
			window.location.href = "/HU-Web/protocols/edit";
    });
	
    $("#view").click(function () {
			window.location.href = "/HU-Web/protocols/view";
    });
	
    $("#delete").click(function () {
			window.location.href = "/HU-Web/protocols/delete";
    });
    $("#specification").click(function () {
		if (list.checked().length === 0 || list.checked().length > 1) {
        $("body").modalWindow({
            action: "message",
            title: "specification",
            text: list.checked().length === 0 ? "At least one role should be selected" : "Only one role can be selected for open"
        });
        } else {
            window.location.href = window.location.pathname + "/specification/" + list.checked().id[0] + "/view";
        }
    });
});