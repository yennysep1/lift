$(document).ready(function(){

    //MUESTRA NOMBRE INGRESADO POR USUARIO
     var userName = localStorage.getItem('Nombre');
     $('h4').html(userName);

      //MUESTRA EMAIL INGRESADO POR USUARIO
     var userEmail = localStorage.getItem('Email');
     $('.user-email').html(userEmail);

     //MUESTRA TELEFONO INGRESADO POR USUARIO
     var userFono = localStorage.getItem('Fono');
     $('.user-fono').html(userFono);

    //MUESTRA CLAVE RANDOM 
     var userRandom = localStorage.getItem('Random');
     $('.user-random').html(userRandom);

 })

//FUNCTION CHANGE IMAGE PROFILE

$('.fa-camera').on('click', function(e) {
     e.preventDefault();
    
    $('#cambiarAvatar').click();
})

$('#cambiarAvatar').on('change', function(evento){
    // primero recuperamos el archivo subido
    var archivo = $(this)[0].files[0];

    // creamos un FileReader
    // FileReader es un objeto de JS para leer archivos
    var reader = new FileReader();

    // le decimos al filereader qué hacer cuando termine de cargar
    reader.onload = function(efr) {
        $('#avatar img').attr('src', efr.target.result);
    }
    // sólo queda cargar la imagen
    reader.readAsDataURL(archivo);
});

$('form').on('submit', function(es){
    // primero evitamos que se envie el formulario
    es.preventDefault();

    // pescamos archivo de la imagen
    var archivo = $('#cambiarAvatar')[0].files[0];

    // creamos FileReader
    var reader = new FileReader();

    // le decimos al filereader que hacer cuando termine de cargar
    reader.onloadend = function(efr) {
        var datos_imagen = reader.result;
        // se guarda imagen en localStorage
        localStorage.setItem('avatar_data', datos_imagen);
        Materialize.toast('<span>Imagen guardada con éxito !</span>', 2000);
    }

    // finalmente leemos la imagen
    reader.readAsDataURL(archivo);
});

// queda que al carga la página. recuperar imagen del localStorage
$(document).ready(function(){
    // aca va el codigo que se ejecuta al cargar la página
    
    // primero recuperamos datos del localStorage
    var avatar_data = localStorage.getItem('avatar_data');

    // cambiamos la foto por defecto
    if(avatar_data) {
        $('#avatar img').attr('src', avatar_data);
    }
});


// PARA DAR AL ICONO LA FUNCION DEL INPUT (FORM DATA) OCULTO
/*$('#file-select').on('click', function(e) {
     e.preventDefault();
     $('#imgInp').click(); 
});

function cambiarImagen(input) {

    if (input.files && input.files[1]) {
        var reader = new FileReader();

        reader.onload = function (e) {

       $('#blah').attr('src', e.target.result);
      
        }

        reader.readAsDataURL(input.files[1]);
    }
}


$("#imgInp").change(function(){
    cambiarImagen(this);

});


//MOSTRAR IMAGEN DE PERFIL GUARDADA EN LOCAL STORAGE
    var userImg = localStorage.getItem('Image');
    $('#blah').attr('src', userImg);*/
