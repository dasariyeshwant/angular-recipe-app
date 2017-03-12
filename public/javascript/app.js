var app = angular.module('RecipeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './public/views/home.html',
			controller: 'homeCtrl'
		})
		.state('followingRecipes', {
			url: '/followingRecipes',
			templateUrl: './public/views/followingRecipes.html'
		})
		.state('profile', {
			url:'/profile',
			templateUrl: './public/views/profile.html'
		});
	$urlRouterProvider.otherwise('/home');
});