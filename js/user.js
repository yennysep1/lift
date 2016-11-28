

$('.next a').on('click', function(){

	var name = $('#icon_prefix').val();
	var email = $('#email').val();
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
//VALIDACION MAIL
	if( email.length==0){ // invalida campo vacio
		Materialize.toast('<span>Debe ingresar Email !</span>', 2000);
		return false;
	} 
	if(!mailValido.test(email)){
		Materialize.toast('<span>Debe ingresar Email válido !</span>', 2000);
		return false;
	}

	localStorage.setItem("Nombre", name);
	var nombre = localStorage.getItem("Nombre");
	$('#icon_prefix').html(nombre);

	//GUARDANDO NOMBRE EN LOCALSTORAGE
	localStorage.setItem('Nombre',name);

	//GUARDANDO MAIL EN LOCALSTORAGE
	localStorage.setItem('Email', email);

} ); 





