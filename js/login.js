

$('.next a').on('click', function(){
	var yourPhone = $('#icon_telephone').val();
	var yourPass = $('#icon_prefix').val();

	if(yourPhone == 0){
		Materialize.toast('<span>Debe ingresar su telefono !</span>', 2000);
		return false;
	};
	if( yourPhone !== localStorage.getItem('Fono')){
		Materialize.toast('<span>Usuario no registrado !</span>', 2000);
		return false;
	};
	/*if(yourPass == 0){
		Materialize.toast('<span>Ingrese password !</span>', 2000);
		return false;
	};
	if( yourPass !== localStorage.getItem('Password')){
		Materialize.toast('<span>Clave invalida !</span>', 2000);
		return false;
	};*/


})