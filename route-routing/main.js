var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when("/", {
      controller : "MainCtrl",
      templateUrl: "partials/main.html",
    })
    .when("/firsthwy", {
      controller: "FirstHwyCtrl",
      templateUrl: "partials/firsthwy.html",
    })
    .when("/secondhwy", {
      controller: "SecondHwyCtrl",
      templateUrl: "partials/secondhwy.html",
    })
    .otherwise({
      redirectTo: "/"
    })
})
