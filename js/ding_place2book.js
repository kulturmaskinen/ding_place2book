/**
 * @file
 *
 * Provide event nodes/pages with ticket info from Place2book
 */
jQuery(document).ready(function($) {
	$('.place2book-ticketinfo').each(function() { 
	    var obj = this;
            $(obj).parent().append("<div class='p2b_preloader'><i class='fa fa-cog fa-spin fa-2x fa-fw'></i><div>");
		$.getJSON(Drupal.settings.basePath + 'ding/place2book/ticketinfo/' + this.value, function(data) {
		  $(obj).replaceWith(data['markup']);
                  $('.p2b_preloader').remove();
		});		
    });
});