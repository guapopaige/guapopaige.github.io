//Scene-1 ScrollMagic Animation
$(document).ready(function() {
	// Initalize Scroll Magic
	var controller = new ScrollMagic.Controller();
	//Build a Scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement:'#scene-1'
	})
	.setClassToggle('#scene-1', 'fade-in')//add class to object ID
	.addTo(controller);
});

//Scene-2 ScrollMagic Animation
$(document).ready(function() {
	// Initalize Scroll Magic
	var controller = new ScrollMagic.Controller();
	//Build a Scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement:'#scene-2'
	})
	.setClassToggle('#scene-2', 'fade-in')//add class to object ID
	.addTo(controller);
});

//Scene-3 ScrollMagic Animation
$(document).ready(function() {
	// Initalize Scroll Magic
	var controller = new ScrollMagic.Controller();
	//Build a Scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement:'#scene-3'
	})
	.setClassToggle('#scene-3', 'fade-in')//add class to object ID
	.addTo(controller);
});

//Subheading ScrollMagic Animation
$(document).ready(function() {
	// Initalize Scroll Magic
	var controller = new ScrollMagic.Controller();
	//Build a Scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement:'.subheading'
	})
	.setClassToggle('.subheading', 'fade-in')//add class to object ID
	.addTo(controller);
});






//scroll-down indicator Header

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


//gallery filter
/*$(document).ready(function(){

    $(".myButton").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".myButton").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

*/




//navbar-transitiion
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.header-inner');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-fixed-top").addClass("fixednav");
       } else {
          $('.navbar-fixed-top').removeClass("fixednav");
       }
   });
    }
});