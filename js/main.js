var hostname = window.location.hostname;
var inHost = new RegExp('^(\/|\#)',"gi");
var inReferance = /^(\/|#)$/;
$(function(){
	$('a').each(function(){
		var currentHref = $(this).attr('href');

		// if ( inReferance.test($(this).attr('href').charAt(0)) ){
		// 	$(this).addClass('internal');
		// }
		if ( inHost.test($(this).attr('href')) ){
			$(this).addClass('internal');
		}
	});
});