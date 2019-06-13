
$(document).ready(function(){
	
	var itemCount = $('.cards_container .item').length
	var current = 1;

	$('.total_slide').text(itemCount);
	$('.current_slide').text(current);

	$('.cardSlider .btn_prev').on('click', function(){
		current -= 1;
		if(current < 1){
			current = itemCount;
		}
		showSlider(current);
		
	});

	$('.cardSlider .btn_next').on('click', function(){
		current = current + 1;
		if(current > itemCount){
			current = 1;
		}
		showSlider(current);
		

	});


	function showSlider(current){

		$('.cards_container .item').removeClass('active');

		$('div[data-id="'+current+'"').addClass('active');
		$('.current_slide').text(current);

	}


});

