angular.module("FinalApp")
.controller("MainController", function($scope,$resource) {
  Post = $resource("https://jsonplaceholder.typicode.com/posts/:id", {id:"@id"})
  User = $resource("https://jsonplaceholder.typicode.com/users/:id", {id:"@id"})
  $scope.posts = Post.query();
  $scope.users = User.query();
  $scope.removePost=function(post){
    Post.delete({id:post.id}, function(data){
      console.log(data);
    })
    $scope.posts = $scope.posts.filter(function(element){
      return element.id !== post.id
    })
  }
  console.log( $scope.posts)
  //query() posts -> Un arreglo de posts 
 
})
.controller("PostController", function($scope) {
 Post =$resource("https://jsonplaceholder.typicode.com/posts/:id", {id:"@id"})
 $scope.posts = Post.get({id: routeParams.id});
})
.controller("UserController", function($scope) {
 
});







