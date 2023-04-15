var $ = jQuery;

jQuery(document).ready(function($) {
  if($('.btn-no').length > 0) {
    $('.btn-no').click(function(e){
      e.preventDefault();
      $('.no-info').fadeIn();
    });
  }
});

