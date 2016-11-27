

$('.next a').on('click', function(){

	var name = $('#icon_prefix').val();
	var email = $('#email').val();
	var aZ = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	var mailValido = /\w+@\w+\.+[a-z]/;

//VALIDACION NOMBRE 
	if( name.length==0){ // invalida campo vacio
		$('.next').append('<span>Ingrese nombre!</span>');
		return false;
	} 
	if(!aZ.test(name)){
		$('.next').append('<span>Sólo letras!</span>');
		return false;
	} 
//VALIDACION MAIL
	if( email.length==0){ // invalida campo vacio
		$('.next').append('<span>Ingrese mail!</span>');
		return false;
	} 
	if(!mailValido.test(email)){
		$('.next').append('<span>Ingrese mail valido!</span>');
		return false;
	}

} ); 


