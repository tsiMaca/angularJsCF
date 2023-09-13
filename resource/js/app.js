angular.module("FinalApp", [ "ngRoute", "ngResource"])
.config(function($routeProvider){
    $routeProvider
    .when("/", {
        controller: "MainController",
        templateUrl: "templates/home.html"
    })
    .when("/post/:id", {
        controller: "PostController",
        templateUrl: "templates/post.html"
    })
    .when("/user", {
        controller: "UserController",
        templateUrl: "templates/user.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});

