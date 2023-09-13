angular.module("CustomDirective", [])
.directive("myAutocomplete", function() {
    function link(scope, element, attrs){
            $(element).autocomplete({
                source: scope[attrs.myAutocomplete],
                select : function(ev,ui){
                    ev.preventDefault();
                    if (ui.item) {
                        scope.optionSelected(ui.item.value);
                    }

                },
                focus: function(ev, ui){
                    ev.preventDefault()
                    $(this).val(ui.item.label)
                }
            })
    };
    return {
        link: link
    }
})
.directive('backImg', function(){
    return function(scope, element, attrs){
    attrs.$observe('backImg', function(value){
        element.css({
            "background":"url("+value+")",
            "background-size":"cover",
            "background-position":"center",
        })
    })
  }
})  

.controller("AppCtrl", function($scope, $http) {
    $scope.repos = []
    $http.get("https://api.github.com/users/codigofacilito/repos")
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
  });
