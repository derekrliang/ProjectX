$(document).ready(function() {
	
	if ($(window).width() > 1075) {
		$('body').css({
			'margin-left': '0px'
		});
		
	} else {
		$('.menu').addClass('mini-menu');
	}
						
  $('.fa-bars').click(function() {
	  if ($(this).hasClass('on')) {
		  $('.menu').removeClass('show');
		  $(this).removeClass('on');
		  
		  		$(this).css({
					'width': '50px'
				});
				
				$('body').css({
					'margin-left': '0px'
				});
	  } else {
		  $('.menu').addClass('show');
		  $(this).addClass('on');
		  
		  		$(this).css({
					'width': '130px'
				});
				
				$('body').css({
					'margin-left': '130px'
				});
	  }
  });
  
  $(window).resize(function() {
	  if ($(window).width() > 1075) {		
		$('.menu').removeClass('mini-menu');
	  } else {
		$('.menu').addClass('mini-menu');
	  }
	  });
	  
	  
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});


});