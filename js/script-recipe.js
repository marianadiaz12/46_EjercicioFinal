$(document).ready( function() {
	//Etapa1
	$(".js-menu").hide();
	//Etapa 7
	console.log("Documento listo");
	//Etapa 10
	$('.js-back').click(function(){
	window.location = 'index.html';
	});
});

function make(){

}

//Etapa 9
$('.js-show-recipe ').click(function(){
	$(this).addClass('active');
	$('.js-show-make').removeClass('active');
});

$('.js-show-make').click(function(){
	$(this).addClass('active');
	$('.js-show-recipe ').removeClass('active');
});


