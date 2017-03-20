var app = angular.module('RecipeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './public/views/home.html',
			controller: 'homeCtrl'
		})
		.state('individualRecipe', {
			url:'/individualRecipe/:id',
			templateUrl: './public/views/individualRecipe.html',
			controller: 'individualRecipeCtrl'
		})
		.state('followingRecipes', {
			url: '/followingRecipes',
			templateUrl: './public/views/followingRecipes.html'
		})
		.state('profile', {
			url:'/profile',
			templateUrl: './public/views/profile.html',
		})
		.state('profile.personalInformation', {
			url:'/personalInformation',
			templateUrl: './public/views/personalInformation.html'
		})
		.state('profile.educationalInformation', {
			url: '/educationalInformation',
			templateUrl: './public/views/educationalInformation.html'
		})
		.state('profile.financialInformation', {
			url: '/financialInformation',
			templateUrl: './public/views/financialInformation.html'
		});
	$urlRouterProvider.otherwise('/home');
});
