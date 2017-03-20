app.controller('homeCtrl', ['$scope', 'mainFactory', '$location', function($scope, mainFactory, $location){
 	
	$scope.getRecipes = function() {
		mainFactory.getRecipeInformation().then(function(result) {
			$scope.recipesList = result.data;
			console.log("recipes from controller are: ",result);
		});
		
	}
	$scope.getRecipes();

	$scope.openIndividualRecipePage = function(id) {
		$location.path('individualRecipe/'+id);
	}
}]);