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

// PARA DAR AL ICONO LA FUNCION DEL INPUT (FORM DATA) OCULTO
$('#file-select').on('click', function(e) {
     e.preventDefault();
     $('#imgInp').click(); 
});

function cambiarImagen(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

       $('#blah').attr('src', e.target.result);
            
        }

        reader.readAsDataURL(input.files[0]);

         //GUARDA IMAGEN EN LOCAL STORAGE
        var img = reder.readAsDataURL(input.file[0]);
        localStorage.setItem('Image', img);

    }
}

$("#imgInp").change(function(){
    cambiarImagen(this);

});


//MOSTRAR IMAGEN DE PERFIL GUARDADA EN LOCAL STORAGE
    var userImg = localStorage.getItem('Image');
    $('#blah').attr('src', userImg);
