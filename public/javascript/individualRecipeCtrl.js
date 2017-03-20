app.controller('individualRecipeCtrl', function($scope, $stateParams, mainFactory) {
	$scope.selectedRecipe = $stateParams.id;
	mainFactory.getIndividualRecipe($scope.selectedRecipe).then(function(result) {
		$scope.recipeInformation = result.data;
		console.log("the selected Recipe is: ",$scope.recipeInformation);
	});

	
});