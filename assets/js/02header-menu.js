// -----------------------
// Menu
// -----------------------
var $ = jQuery;
function burgerMenu($) {
  jQuery('.nav-opener').click(function(e) {
    e.preventDefault();
    jQuery('body').toggleClass('nav-active');
    // $('.drop').slideToggle();
  });

  jQuery('.nav-close').click(function(e) {
    e.preventDefault();
    jQuery('body').removeClass('nav-active');
  });

  jQuery('#nav .menu-item-has-children ul').before('<span class="arrow">arrow</span>');

  // $('#nav #primary-menu > .menu-item:not(.menu-item-has-children) > a').after('<ul></ul>');

  if(jQuery('#nav #primary-menu > .menu-item.current-menu-item').hasClass('menu-item-has-children')) {
    jQuery('body').addClass('has-sub-menu');
  }

  jQuery('.arrow').click(function(){
      $(this).next('ul').slideToggle();
      $(this).parent('li').toggleClass('submenu-active');
  });
}
jQuery(document).ready(function($) {
    burgerMenu();
});

jQuery(window).on('resize', function($) {
  if (jQuery(window).width() > 1023) {
    jQuery('body').removeClass('nav-active');
    jQuery('.drop .menu-item-has-children').removeClass('submenu-active');
    jQuery('.drop .menu-item-has-children > ul ').removeAttr('style');
  }
});

