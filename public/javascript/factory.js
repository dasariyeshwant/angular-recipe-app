app.factory('mainFactory', function($http) {
	var factoryObj = {};
	factoryObj.getRecipeInformation = function(){
		return $http.get('http://localhost:3000/recipes');
	}
	factoryObj.getIndividualRecipe = function(idd) {
		return $http.get('http://localhost:3000/recipes/'+idd);
	}
	return factoryObj;
});