/**
 * @file
 *
 * Provide event nodes/pages with ticket info from Place2book
 */
jQuery(document).ready(function($) {
	$('.place2book-ticketinfo').each(function() { 
	    var obj = this;
            $(obj).parent().append("<div class='p2b_preloader'><a href='https://place2book.com/da/14540/list/EM3892'>Henter billetstatus – gå evt. til arrangementsoversigt hos billetudbyder</a><i class='fa fa-cog fa-spin fa-2x fa-fw'></i><div>");
		$.getJSON(Drupal.settings.basePath + 'ding/place2book/ticketinfo/' + this.value + "?time=" + new Date().getTime(), function(data) {
		  $(obj).replaceWith(data['markup']);
                  $('.p2b_preloader').remove();
		});		
    });
});