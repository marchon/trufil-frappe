// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

frappe.provide("frappe.help");

frappe.help.youtube_id = {};

frappe.help.has_help = function(doctype) {
	return frappe.help.youtube_id[doctype];
}

frappe.help.show_link = function() {

}

frappe.help.show = function(doctype) {
	if(frappe.help.youtube_id[doctype]) {
		frappe.help.show_video(frappe.help.youtube_id[doctype]);
	}
}

frappe.help.show_video = function(youtube_id, title) {
	frappe.msgprint('<iframe width="560" height="315" \
		src="https://www.youtube.com/embed/'+ youtube_id +'" \
		frameborder="0" allowfullscreen></iframe>', title || __("Help"));
}

$("body").on("click", "a.help-link", function() {
	var doctype = $(this).attr("data-doctype");
	doctype && frappe.help.show(doctype);
});
