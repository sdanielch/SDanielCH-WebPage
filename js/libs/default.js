$(document).ready(function () {
	console.log("Documento cargado");
    $.ajaxSetup({
        error: function (x, e) {
        if (x.status == 0) {
        $("#load-ajax").html('Parece que usted no tiene conexión con el servidor, intentelo de nuevo más tarde.');}

        else if(x.status == 404) {
        $("#load-ajax").html('Esta sección no está disponible actualmente, por favor inténtelo nuevamente más tarde.');}

        else if(x.status == 500) {
        $("#load-ajax").html('Hay un problema en el servidor que impide cargar esta sección, por favor inténtelo nuevamente más tarde.');}

        else if(e == 'parsererror') {
        $("#load-ajax").html('Ha habido un problema al cargar esta sección, por favor inténtelo nuevamente más tarde.');}

        else if(e == 'timeout') {
        $("#load-ajax").html('Se ha agotado el tiempo de conexión, puede que el servidor se encuentré saturado en estos momentos, por favor inténtelo nuevamente más tarde.');}

        else {
        $("#load-ajax").html('Ocurrió un problema desconocido al cargar la sección. ');}
		}
	});


     $( "#cargando" ).show( 300 );
        $("#load-ajax").load("../html/home.html", function(){
             setTimeout( "$( '#cargando' ).hide( 500 );",500 );
        });

});
