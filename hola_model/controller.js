angular.module("MyFirstApp", []).controller("FirstController",["$scope", function(m){
    m.nombre ="Macarena";
    m.nuevoComentario = {};
    m.comentarios = [
        {
            comentario: "Buen tutorial",
            username: "Codigo facilito"
        },
        {
            comentario: "Mal tutorial",
            username: "Otro usuario"
        }
    ];
    m.agregarComentario = function(){
        m.comentarios.push(m.nuevoComentario)
        m.nuevoComentario = {}
    }
}])