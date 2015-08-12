jQuery(document).ready(function(){

	// smoth scrolling
	$('.nav-menu a[href^=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length && target || $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                var targetOffset = target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                setTimeout('window.location = window.location + "' + this.hash + '";', 1000);
                return false;
            }
        }
    });
	
	// responsive menu systems
	var n = '.nav-menu';
	
	$('#collapse').click(function(){
		if($(n).hasClass('show_nav')){
			$(n).removeClass('show_nav')
		} else {
			$(n).addClass('show_nav')
		}
	});
	
	// Create the dropdown base
	$("<select />").appendTo(".nav-menu");

	// Create default option "Menu"
	$("<option />", {
	 "selected": "selected",
	 "value"   : "#",
	 "text"    : "Menu"
	}).appendTo(".nav-menu select");

	// Populate dropdown with menu items
	$(".nav-menu a").each(function() {
	var el = $(this);
	$("<option />", {
	   "value"   : el.attr("href"),
	   "text"    : el.text()
	}).appendTo(".nav-menu select");
	});

	// To make dropdown actually work
	$(".nav-menu select").change(function() {
	window.location = $(this).find("option:selected").val();
	});

});