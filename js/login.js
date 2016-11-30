

$('.next a').on('click', function(){
	var yourPhone = $('#icon_telephone').val();
	var yourCode = $('#icon_prefix').val();

	if( yourPhone !== localStorage.getItem('Fono')){
		Materialize.toast('<span>Usuario no registrado !</span>', 2000);
		return false;
	}
	if( yourCode !== localStorage.getItem('Random')){
		Materialize.toast('<span>Su codigo no es valido !</span>', 2000);
		return false;
	}


})