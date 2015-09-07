$(document).ready(function () {

// Añadimos el Favicon
        $('<link>')
  .appendTo('head')
  .attr({type : 'image/x-icon', rel : 'rel'})
  .attr('href', 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAEMAAAB0AAAAbQAAABUAAAAAAAAAAAAAAFoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAwQAAAP4AAAD9AAAA/gAAAP4AAAD9AAAA/wAAACUAAAAAAAAAMAAAAEMAAAAAAAAAAAAAAAAAAAAAAAAApwAAAP4AAAD/AAAA0gAAAHMAAACHAAAA/wAAAP4AAAD7AAAAAAAAAAEAAAD3AAAAAAAAAAAAAAAAAAAAAAAAAP4AAAD+AAAAAAAAAAEAAAAAAAAAAAAAAAEAAAC3AAAA/gAAAKUAAAAAAAAAvAAAAAAAAAAAAAAAAAAAAAAAAAD+AAAA/gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAJQAAAP0AAADjAAAAAQAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAowAAAP0AAACSAAAAAAAAAAUAAAAAAAAABAAAAPEAAAD+AAAArgAAAP8AAAC9AAAAAQAAAAAAAAAAAAAAAAAAAAAAAACbAAAA/wAAAPkAAAD/AAAANgAAAP8AAAD/AAAA/AAAAFwAAACcAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAIgAAAPoAAAD+AAAA/gAAAPEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD+AAAA/gAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAACwAAAD9AAAA/wAAAPsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAA+wAAAP8AAAD+AAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8gAAANIAAAD+AAAA/QAAAFYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPsAAACmAAAAAAAAAKEAAAAAAAAA0QAAALcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAADSAAAA/gAAAP8AAAD/AAAA/QAAAP4AAAB9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAMgAAAD+AAAA/AAAAP0AAADmAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAOA/AADCGwAAz4sAAM/LAADHgwAA4RcAAP4fAAD8PwAA/H8AAPx/AAD4fwAA+U8AAPgfAAD8HwAA//8AAA==');


   // Comprobamos desde qué dispositivo se está entrando para cargar
    // una hoja de estilos u otra dependiendo del caso.


var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
FixRefreshCacheCSS = Math.floor((Math.random() * 10000) + 1);
    //Ahora por consola mostramos el resultado del condicional
if(isMobile == false){
console.log("Detectado navegador de escritorio");

    // Cargamos la hoja de estilos para el navegador de escritorio
       $('<link>')
  .appendTo('head')
  .attr({type : 'text/css', rel : 'stylesheet'})
  .attr('href', '../css/default.css?' + FixRefreshCacheCSS);

} else {
console.log("Detectado dispositivo móvil dispositivo móvil");

     // Cargamos la hoja de estilos para el navegador movil
       $('<link>')
  .appendTo('head')
  .attr({type : 'text/css', rel : 'stylesheet'})
  .attr('href', '../css/mobile.css?' + FixRefreshCacheCSS);

   /*  $('<link>')
  .appendTo('head')
  .attr({type : 'text/css', rel : 'stylesheet'})
  .attr('href', 'https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css');
   */
    /////////////////////////////////////////////////////////////
jQuery(document).on("mobileinit", function() {
    jQuery.mobile.autoInitializePage = false;
});
    $.getScript( "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js" )
  .done(function( script, textStatus ) {
    console.log( "Carga de jQuery Mobile completada" );

$("<img src='img/swipe.png' style='width: 100px; position: fixed; bottom: 50px; left: 0; z-index: 10;' id='swipee' />").appendTo("body");
$("#sidebarprincipal, #central-l1, #swipee").on("swiperight",function(){
$("#central-l1").addClass( "menumobile");
$("#swipee").fadeOut(500).wait(550).addClass("espejar").fadeIn(500).wait(3500).fadeOut(500);
    $("#bar").css("color", "#FFF");
});
$("#sidebarprincipal, #central-l1").on("swipeleft",function(){
$("#central-l1").removeClass("menumobile");
    $("#swipee").fadeOut(500);
    $("#bar").css("color", "#888");
});
$("#central-l2").on("click",function(){
    $("#central-l1").removeClass("menumobile");
    $("#bar").css("color", "#888");
});

$("#bar").on("click", function(){
    var tite = $("#central-l1").hasClass("menumobile");
    if(tite == true){
        $("#central-l1").removeClass( "menumobile");
            $("#swipee").fadeOut(500);
        $(this).css("color", "#888");

    } else {
$("#central-l1").addClass( "menumobile");
$("#swipee").fadeOut(500).wait(550).addClass("espejar").fadeIn(500).wait(3500).fadeOut(500);
        $(this).css("color", "#FFF");
    }
});


  })
  .fail(function( jqxhr, settings, exception ) {
    console.log("Error al cargar jQuery Mobile");
});


    /////////////////////////////////////////////////////////////

}


	console.log("Documento cargado");
    $.ajaxSetup({
        error: function (x, e) {
             $("#titlebar").text("Error al cargar");
        if (x.status == 0) {
        $("#load-ajax").html('Parece que usted no tiene conexión con el servidor, intentelo de nuevo más tarde.');}

        else if(x.status == 404) {
        $("#load-ajax").html('Se estableció contacto con el servidor, pero no se ha encontrado la sección requerida. Código de error 404, por favor contacte con el webmaster.');}

        else if(x.status == 500) {
        $("#load-ajax").html('Hay un problema en el servidor que impide cargar esta sección, por favor inténtelo nuevamente más tarde. Código de error 500, por favor contacte con el webmaster.');}

        else if(e == 'parsererror') {
        $("#load-ajax").html('Ha habido un problema al cargar esta sección, por favor inténtelo nuevamente más tarde.');}

        else if(e == 'timeout') {
        $("#load-ajax").html('Se ha agotado el tiempo de conexión, puede que el servidor se encuentré saturado en estos momentos, por favor inténtelo nuevamente más tarde.');}

        else {
        $("#load-ajax").html('Ocurrió un problema desconocido al cargar la sección. ');}
		}
	});
    /* Estilizamos el menu y configuramos la primera sección del menu como la predeterminada */
   // $("#central-l1 ul li a:first").css("border-radius", "5px 5px 0 0");
   // $("#central-l1 ul li a:last").css("border-radius", "0 0 5px 5px");
    $("#central-l1 ul li a:first").addClass("current");
    /* Configuramos el click de los menus */
    $("#central-l1 ul li a").click(function() {
    $("#central-l1 ul li a").not(this).removeClass("current");
        $(this).addClass("current");
    });
    var cargando = "Cargando sección <i class=\"fa fa-spinner fa-spin\"></i>";
    var cargandoOK = "Carga completa <i class=\"fa fa-check\"></i>";
    var cargandoERROR = "Error al cargar <i class=\"fa fa-exclamation-triangle\"></i>";

   $("#cargando").html(cargando);
        $( "#cargando" ).stop( true, true ).fadeIn( 300 );
        $("#load-ajax").load("../html/home.html", function(response, status, xhr){
            if ( status == "error" ) {
            $("#cargando").html(cargandoERROR).delay(1000).fadeOut(500);
            } else {
        $("#cargando").html(cargandoOK).delay(1000).fadeOut(500);
            }
        });
    /* Para no repetir la misma funcion creamos una funcion que englobe cada click llamada menuajax */
    function menuajax(id, url2) {
           $(id).click(function(){
           $("#cargando").html(cargando);
           $( "#cargando" ).stop( true, true ).fadeIn( 300 );
               $("#load-ajax, #titlebar").fadeOut(100);
           $("#load-ajax").load(url2, function(response, status, xhr){
               $("#load-ajax, #titlebar").stop( true, true ).fadeIn(500);
            if ( status == "error" ) {
            $("#cargando").html(cargandoERROR).delay(1000).fadeOut(500);
            } else {
           $("#cargando").html(cargandoOK).delay(1000).fadeOut(500);
            }
           });
           });
    }
    menuajax("#sec1", "../html/home.html"); // Sección 1 -> Home
    menuajax("#sec2", "../html/sec2.html"); // Sección 2 -> Curriculum
    menuajax("#sec3", "../html/sec3.html"); // Sección 3 -> Proyectos
    menuajax("#sec4", "../html/sec4.html"); // Sección 4 -> Contactar
    menuajax("#sec5", "../html/sec5.html"); // Sección 5 -> Blog



    function getHash() {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash.length === 0) {
      return false;
    } else {
      return hash;
    }
  } else {
    return false;
  }
}
    var hash = getHash();
    if (hash == "home") {
        $("#sec1").click();
    } else if (hash == "whois") {
        $("#sec2").click();
    } else if (hash == "proyects") {
        $("#sec3").click();
    } else if (hash == "contact") {
        $("#sec4").click();
    } else if (hash == "blog") {
        $("#sec5").click();
    }

// Check if a new cache is available on page load.



});
