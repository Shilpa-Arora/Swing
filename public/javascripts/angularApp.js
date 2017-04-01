// JavaScript Document
var swingApp = angular.module('swingApp', ['ui.router']);

//config block, inject services that are part of ui.router module
swingApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('welcome', {  //name of the state
		url: '/welcome', //url in address bar for app
		templateUrl: 'views/welcome.html'
		})
	.state('register', {  //name of the state
		url: '/register', //url in address bar for app
		templateUrl: 'views/register.html'
		})
	.state('login', {  //name of the state
		url: '/login', //url in address bar for app
		templateUrl: 'views/login.html'
		})
	.state('forget', {  //name of the state
		url: '/forget', //url in address bar for app
		templateUrl: 'views/forget.html'
		})
		.state('home', {  //name of the state
		url: '/home', //url in address bar for app
		templateUrl: 'views/home.html'
		})
			.state('account', {  //name of theaccount
		url: '/account', //url in address bar for app
		templateUrl: 'views/account.html'
		})
				.state('settings', {  //name of the state
		url: '/settings', //url in address bar for app
		templateUrl: 'views/settings.html'
		})
					.state('survey', {  //name of the state
		url: '/survey', //url in address bar for app
		templateUrl: 'views/survey.html'
		})
						.state('progress', {  //name of the state
		url: '/progress', //url in address bar for app
		templateUrl: 'views/progress.html'
		})
							.state('aboutus', {  //name of the state
		url: '/aboutus', //url in address bar for app
		templateUrl: 'views/aboutus.html'
		})
								.state('help', {  //name of the state
		url: '/help', //url in address bar for app
		templateUrl: 'views/help.html'
		})
									.state('gallery', {  //name of the state
		url: '/gallery', //url in address bar for app
		templateUrl: 'views/gallery.html'
		});
		
	//second state for details page, get rid of the semi colon, line 11.
	$urlRouterProvider.otherwise('/welcome');			
	}]);




//controller1
