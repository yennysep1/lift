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
    }
}

$("#imgInp").change(function(){
    cambiarImagen(this);
});