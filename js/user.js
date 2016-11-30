
$('.next a').on('click', function(){

	var name = $('#icon_prefix').val();
	var email = $('#email').val();
	//var pass = $('#pass').val();
	var aZ = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	var mailValido = /\w+@\w+\.+[a-z]/;

//VALIDACION NOMBRE 
	if( name.length==0){ // invalida campo vacio
		Materialize.toast('<span>Debe ingresar nombre !</span>', 2000);
		return false;
	} 
	if(!aZ.test(name)){
		Materialize.toast('<span>Debe ingresar sólo letras !</span>', 2000);
		return false;
	}
	if(name.length > 30){
		Materialize.toast('<span>Excede el max digitos!</span>', 2000);
		return false;
	}
//VALIDACION MAIL
	if( email.length==0){ // invalida campo vacio
		Materialize.toast('<span>Debe ingresar Email !</span>', 2000);
		return false;
	} 
	if(!mailValido.test(email)){
		Materialize.toast('<span>Debe ingresar Email válido !</span>', 2000);
		return false;
	}
	if(email.length> 50){
		Materialize.toast('<span>Excede el max digitos!</span>', 2000);
		return false;
	}
/*
//VALIDACION CONTRASEÑA
	if( pass.length==0){ // invalida campo vacio
		Materialize.toast('<span>Debe ingresar password !</span>', 2000);
		return false;
	}
	if( pass.length < 6){ // invalida campo vacio
		Materialize.toast('<span>Clave insegura!</span>', 2000);
		return false;
	} 
*/

//VALIDACION CHECKLIST
	if( $('#filled-in-box').is(':checked') ) {
    	return true;
	} else{
		Materialize.toast('<span>Debe aceptar los terminos!</span>', 2000);
		return false;
	} 

//GUARDAR ELEMENTOS EN LOCALSTORAGE	

	localStorage.setItem("Nombre", name);
	var nombre = localStorage.getItem("Nombre");
	$('#icon_prefix').html(nombre);

	//GUARDANDO NOMBRE EN LOCALSTORAGE
	localStorage.setItem('Nombre',name);

	//GUARDANDO MAIL EN LOCALSTORAGE
	localStorage.setItem('Email', email);

	//GUARDANDO PASSWORD EN LOCALSTORAGE
	//localStorage.setItem('Password', pass);

} ); 





