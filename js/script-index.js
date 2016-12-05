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
	for(var i =0 ; i<recipesArray.length; i++){
		if(recipesArray[i].highlighted === true){
			renderRecipe(i);
		}
	}
	// var highTrue = _.where(recipesArray, {highlighted: true});
	// renderRecipe(highTrue);
}




/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	// var template =
	// '<a class="item-recipe" href="#">' +
 //        '<span class="attribution">' +
	//     	'<span class="title-recipe"><%= "title" %></span>' +
	//     	'<span class="metadata-recipe">'+
 //      			'<span class="author-recipe"><%= source.name %></span>'+
 //      			'<span class="bookmarks-recipe">'+
 //        			'<span class="icon-bookmark"></span>'+ 
 //      			'</span>'+
 //    		'</span>'+
 //  		'</span>'+
 //  		'<img src="<%= source.url %>" />'+
 //    '</a>';

 //    var compiled = _.template(template);
 //    var li = compiled(recipe);
 //    console.log(li);

 //    var receta = $(li);
 //     $('.list-recipes').append(template);
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



