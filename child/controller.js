angular.module("MyFirstApp", [])
.run(function($rootScope){
    $rootScope.nombre = "Codigo facilito";
})
.controller("FirstController",function($scope){
    $scope.nombre = "Macarena"

})
.controller("ChildController",function($scope){
    $scope.nombre = "Macarena Hija"

})