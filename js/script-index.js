var srcArray = 'data/recipes.js';
$(document).ready( function(){
	//Etapa 1
	$(".js-back").hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
	// renderActivities(activitiesArray);
});
//Etapa2
function printNews(){
	var noticia = $('.callout-news').children('p');
	noticia.text('NUEVAS RECETAS');
	console.log('Funciona');
}


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//Etapa 3
	// for(var i =0 ; i<recipesArray.length; i++){
	// 	if(recipesArray[i].highlighted === true){
	// 		renderRecipe(i);
	// 	} con este me salia un error en la etapa 4
	// }
	// var highTrue = _.where(recipesArray, {highlighted: true});
	// renderRecipe(highTrue);
	$.each( recipesArray, function( key, value ) {
        if(value.highlighted==true){
            renderRecipe(value);
        }
    });
}


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	
   	var item = $('<a class="item-recipe" href="#"></a>');
   	var spanAttri = $('<span class="attribution"></span>');
   	var spanTitle = $('<span class="title-recipe"></span>');
   	spanTitle.text(recipe.title);
   	var spanMeta = $('<span class="metadata-recipe"></span>');
   	var spanName = $('<span class="author-recipe"></span>');
   	spanName.text(recipe.source.name);
   	var spanBook = $('<span class="bookmarks-recipe"></span>');
	var spanIcon = $('<span class="icon-bookmark"></span>'); 	
   	var img = $('<img/>');
	img.attr('src', "img/recipes/320x350/"+recipe.name+".jpg");

	item.append(spanAttri);
	spanAttri.append(spanTitle);
	spanTitle.append(spanMeta);
	spanMeta.append(spanName);
	spanMeta.append(spanBook);
	spanBook.append(spanIcon);
	item.append(img);

	$('.list-recipes').append(item);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}



