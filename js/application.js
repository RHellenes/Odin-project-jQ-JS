$(document).ready(function(){
		
		
		for (var i = 1; i < 257; i++){
			$('main').append('<div class="draw"></div>')
		}

		var square = $('.draw').width();
		$('.draw').height(square);

		
	
});