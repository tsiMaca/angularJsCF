angular.module("ToDoList", ["LocalStorageModule"])
.service('ToDoService', function(localStorageService){

    this.key = "angular-todolist";
    if(localStorageService.get(this.key)){
        this.activities = localStorageService.get(this.key);
    }
    else {
        this.activities = [];
    }
    this.add = function(newAct){
        this.activities.push(newAct);
        this.updaLocalStorage();
    };
   this.updaLocalStorage = function(){
        localStorageService.set(this.key, this.activities);
    };
    this.clean = function() {
       this.activities = [];
        this.updaLocalStorage();
    };
    this.getAll = function(){
        return this.activities;
    };
    this.removeItem = function (item) {
        this.activities = this.activities.filter(function(activity){
            return activity !== item;
        });
        this.updaLocalStorage();
        return this.getAll();
    };
})
/* cambia la ejecucion entre service y factory
factory como funcion 
 fuction toDoService (LocalStorageService){}
 toDoService() LO LLAMO COMO FUNCION
 Y ACA LO INSTANCIO EN EL SERVICIO Y LO DEFINO CON THIS COMO A UN CONSTRUCTOR JAVA CUALQUI
 new toDoService() estoy construyendo un objeto
 */

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
