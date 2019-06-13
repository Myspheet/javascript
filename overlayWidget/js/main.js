$(document).ready(function(){

	function startOverlay(overlayId){

		$('.overlay-veil').fadeTo('500', 0.6, function(){
			var element = $('div[data-overlayItem="'+overlayId+'"');

			element.fadeIn('500');
			element.addClass('active');
		});

	}

	function closeOverlayAll(overlayId){ 
		$('.overlay-component').each(function(){
			if($(this).hasClass('active')){
				$('.overlay-veil').fadeOut();
				$(this).fadeOut('300', function(){
					$(this).removeClass('active');
				})
			}
		})
		if(overlayId !== false){
			startOverlay(overlayId);
		}

		
	}

	$('.closeOverlay').on('click', function(){
		closeOverlayAll(false);
	})


	$('.overlay-item-click').on('click', function(event){
		event.preventDefault();

		var overlayId = $(this).data("overlay");

		closeOverlayAll(overlayId);

		
	});
});