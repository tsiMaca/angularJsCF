angular.module("CustomDirective")
.controller("ReposController", function($scope, $http) {
    $scope.repos = []
    $http.get("https://api.github.com/users/twitter/repos")
      .then(function(response) {
        $scope.posts = response.data;
        for (var i = response.data.length -1; i >=0; i--){
            var repo = response.data[i];
            $scope.repos.push(repo.name)
        };  
       
      })
      .catch(function(error) {
        console.log(error);
      });
      $scope.optionSelected = function(data) {
        $scope.$apply(function(){
            $scope.main_repo = data})
      }
  })
  .controller("RepoController", function($scope, $http, $routeParams){
    $scope.repo ={};
    $http.get("https://api.github.com/repos/twitter/"+$routeParams.name)
    .then(function(response) {
      $scope.posts = response.data;
      $scope.repo = response.data
     
    })
    .catch(function(error) {
      console.log(error);
    });
  })
