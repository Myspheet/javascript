
$(document).ready(function(){


	$('.tab_header .item').on('click', function(){

		var number = $(this).data('option');

		// remove all actives.
		$('.tab_header .item').removeClass('active');

		// add active
		$(this).addClass('active');

		$('.tab_container .container_item').removeClass('active');

		$('div[data-item="'+number+'"]').addClass('active');
	})


});