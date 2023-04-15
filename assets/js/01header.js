function stickyHeader() {
	if ($(window).scrollTop() >= 50) {
		$('body').addClass('sticky');
	}else {
		$('body').removeClass('sticky');
	}
}

jQuery(document).ready(function($) {
	stickyHeader();
});

jQuery(window).on('scroll', function() {
  stickyHeader();
});
