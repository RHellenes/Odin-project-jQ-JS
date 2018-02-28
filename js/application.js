$(document).ready(function(){
		


		$('#settings').on('click', function(){
			$('.hidden_settings').toggleClass('visible-hidden_settings');

		})

		// Default verdi på grid.
		$('.grid16').addClass('checked');

		/*if($('.radio_circle').hasClass('grid16') && $('.radio_circle').hasClass('checked')){
				const res = 16 * 16;
				return res;
				console.log('16');

			}*/
			/*else if($('.radio_circle').hasClass('grid32') && $('.radio_circle').hasClass('checked')){
				const res = 32 * 32;
				return res;
				console.log('32');
			}
			else if($('.radio_circle').hasClass('grid64') && $('.radio_circle').hasClass('checked')){
				const res = 64 * 64;
				return res;
				console.log('64');
			}*/


		$('.radio_circle').on('click', function(){
			$('.checked').removeClass('checked');
			$(this).toggleClass('checked');
/*
			if($('.radio_circle').hasClass('grid16') && $('.radio_circle').hasClass('checked')){
				const res = 16 * 16;
				return res;
				console.log('16');

			}
			return res;
			console.log(res);*/
			console.log('seperator');	
		})	

		


		

		// legger til div'er 
		/*for (let i = 1; i < res; i++){
		$('main').append('<div class="square"></div>');
		}


		$('#updateRes').on('click', function(){
			$("div.square").remove();

			for (let i = 1; i < res; i++){
			$('main').append('<div class="square"></div>');
			}
		})*/



		
		$('#reset').on('click', function(){
			$(".square").removeClass('color');
		})
		







			



		// definerer høyden til .square til den samme som vidden.
		const square = $('.square').width();
		$('.square').height(square);


		// tegne funksjonen
		$('main').on('mouseover', '.square', function(){
			$(this).toggleClass('color');

		});

		

		
});