angular.module("MyFirstApp", [])
  .controller("FirstController", function($scope, $http) {
    $scope.posts = [];
    $scope.newPost ={};

    $http.get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        console.log(response.data);
        $scope.posts = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    $scope.addPost = function(){
      $http.post("https://jsonplaceholder.typicode.com/posts", {
        title: $scope.newPost.title,
        body: $scope.newPost.body,
        userId: 1     
      })
      .then(function(response, status, headers, config) {
        $scope.posts.push(response.data);
        $scope.newPost ={};
      })
      .catch(function( error, status, headers, config) {
        console.log(error);
      });
    }
  });
