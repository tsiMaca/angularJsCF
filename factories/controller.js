angular.module("ToDoList", ["LocalStorageModule"])
.factory('ToDoService', function(localStorageService){
    var toDoService = {};
    toDoService.key = "angular-todolist";
    if(localStorageService.get(toDoService.key)){
        toDoService.activities = localStorageService.get(toDoService.key);
    }
    else {
        toDoService.activities = [];
    }
    toDoService.add = function(newAct){
        toDoService.activities.push(newAct);
        toDoService.updaLocalStorage();
    };
    toDoService.updaLocalStorage = function(){
        localStorageService.set(toDoService.key, toDoService.activities);
    };
    toDoService.clean = function() {
        toDoService.activities = [];
        toDoService.updaLocalStorage();
    };
    toDoService.getAll = function(){
        return toDoService.activities;
    };
    toDoService.removeItem = function (item) {
        toDoService.activities = toDoService.activities.filter(function(activity){
            return activity !== item;
        });
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    };
    return toDoService;
})

.controller("ToDoController", function($scope, ToDoService) {
    $scope.todo = ToDoService.getAll();
    $scope.newAct = {};
    $scope.addAct = function() {
        ToDoService.add($scope.newAct);
        $scope.newAct = {};
    };
    $scope.removeAct = function(item) {
        $scope.todo = ToDoService.removeItem(item);
    };
    $scope.clean = function() {
        ToDoService.clean();
    };
});
