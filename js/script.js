  // CODIGO PARA EFECTOS INPUT MATERIALIZE
$(document).ready(function() {
   $('select').material_select();
  



//VARIABLE PARA ALMACENAR LOS DATOS O ARREGLO DE PAISES
var paises = [
	{
		nombre: "chile",
		prefijo: "+569",
		bandera: "imag/flag/cl.png"
	},
	{
		nombre: "peru",
		prefijo: "+519",
		bandera: "img/flag/pe.png"
	},
	{
		nombre: "mexico",
		prefijo: "+529",
		bandera: "img/flag/mx.png"
	}
];

// TRAE EL PAIS ALMACENADO EN LOCALSTORAGE POR ÚLTIMA VEZ O POR DEFECTO CHILE
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais , desde el arreglo de paises
var pais = "";
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// MODIFICA DOM
$('#pais img').attr('src', pais.bandera); // CAMBIA EL ATRIBUTO
$('#prefijo').html(pais.prefijo); // CAMBIA EL CONTENIDO HTML




//VALIDACION NUMERO TELEFONICO CON BOTON NEXT

$('.next a').on('click', function(){

	var telefono = $('.numero').val();

	if( telefono.length==0){
		$('.next').append('<span>Ingrese telefono!</span>');
		return false;
	} if  (isNaN(telefono)){
		$('.next').append('<span>Sólo números!</span>');
		return false;
	} if (telefono.length !== 9){
		$('.next').append('<span>Sólo 9 digitos!</span>');
		return false;
	}

} ); 


});