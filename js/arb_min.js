jQuery(document).ready(function(){

	var n = '.nav-menu';
	
	$('#collapse').click(function(){
		if($(n).hasClass('show_nav')){
			$(n).removeClass('show_nav')
		} else {
			$(n).addClass('show_nav')
		}
	});

});