/* This is a jQuery function that is listening for a click event on any element with an href that
starts with a #. When the click event is triggered, it prevents the default action of the click
event, which is to follow the link. It then sets the target to the hash of the link, and then
animates the scroll to the top of the target. */

/*$('a[href^="#"]').on("click",function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $("html, body").stop().animate({
	        "scrollTop": $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	}); */

/* This is a jQuery function that is listening for a scroll event on the window. When the scroll event
is triggered, it sets the scroll variable to the scrollTop of the window. If the scroll is greater
than the innerHeight of the window minus 55, it removes the class transparent from the navbar. If
the scroll is less than the innerHeight of the window minus 55, it adds the class transparent to the
navbar. */

function openProject( event ) {
  if ( $(event.target).next(".thumbnail-overlay") ) {
    var id =  "#" + $(event.target).parent().attr("page");
    $(id).fadeIn()
  } else {
    var id =  "#" + $(event.target).attr("page");
    $(id).fadeIn()
  }
}

function closeWindow( event ) {
  $(event.target).parents(".full-screen").fadeOut();
}


