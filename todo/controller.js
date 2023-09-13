angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function($scope,localStorageService){
    if (localStorageService.get("angular-todolist")){
    $scope.todo = [];
    } 
    else {
        $scope.todo =[];

    }
    /* 
    {
        actividad: 'Terminar el curso Angular
        fecha: 07-17-23 2:00pm'

    } 
    */
   $scope.$watchCollection('todo',function(){
        localStorageService.set("angular-todolist", $scope.todo)

   },function(newValue, oldValue){
    console.log(newValue);
    console.log(oldValue)
   })

    $scope.addAct = function() {
        $scope.todo.push($scope.newAct);
        $scope.newAct = {};
        
    }

})