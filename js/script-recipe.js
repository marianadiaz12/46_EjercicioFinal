$(document).ready( function() {
	//Etapa1
	$(".js-menu").hide();
	//Etapa 7
	console.log("Documento listo");
});

//Etapa 8
$('.js-show-make').click(function() {
	$('.page').addClass("make");
	//Etapa 9
	$(this).addClass('active');
	$('.js-show-recipe ').removeClass('active');
});

//Etapa 8
$('.js-show-recipe ').click(function() {
	$('.page').removeClass("make");
	//Etapa 9
	$(this).addClass('active');
	$('.js-show-make').removeClass('active');
	
});

//Etapa 10
	$('.js-back').click(function() {
	window.location = 'index.html';
	});

