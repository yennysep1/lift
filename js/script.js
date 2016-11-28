// CODIGO INICIALIZACIÓN INPUT MATERIALIZE
$(document).ready(function() {
   $('select').material_select();
  
//VARIABLE PARA ALMACENAR LOS DATOS O ARREGLO DE PAISES
var countries = [
	{
		nombre: "Chile",
		prefijo: "+569",
		bandera: "img/flag/cl.png"
	},
	{
		nombre: "Perú",
		prefijo: "+519",
		bandera: "img/flag/pe.png"
	},
	{
		nombre: "Mexico",
		prefijo: "+529",
		bandera: "img/flag/mx.png"
	},
	{
		nombre: "Zimbabwe",
		prefijo: "+127",
		bandera: "img/flag/zw.png"
	},
	{
		nombre: "USA",
		prefijo: "+1",
		bandera: "img/flag/us.png"
	},
	{
		nombre: "Venezuela",
		prefijo: "+58",
		bandera: "img/flag/ve.png"
	},
	{
		nombre: "Japon",
		prefijo: "+81",
		bandera: "img/flag/jp.png"
	},
	{
		nombre: "Colombia",
		prefijo: "+57",
		bandera: "img/flag/co.png"
	},
	{
		nombre: "Francia",
		prefijo: "+33",
		bandera: "img/flag/fr.png"
	}
];

// TRAE EL PAIS ALMACENADO EN LOCALSTORAGE POR ÚLTIMA VEZ O POR DEFECTO CHILE
var name_country = window.localStorage.getItem("name_country") || "Chile";


//RECUPERA EL OBJETO COUNTRY DENTRO DEL ARRAY COUNTRIES
var country = "";
for (var i=0 ; i<countries.length ; ++i){
	if (countries[i].nombre == name_country) {
		country = countries[i];
		break;
	}
}
// MODIFICA DOM
$('#pais img').attr('src', country.bandera); // CAMBIA EL ATRIBUTO PARA CAMBIAR LA IMG
$('#prefijo').html(country.prefijo); // CAMBIA EL CONTENIDO HTML 


//------------------------------------------------

//VALIDACION NUMERO TELEFONICO CON BOTON NEXT

$('.next a').on('click', function(){

	var telefono = $('.numero').val();

	if( telefono.length==0){
		Materialize.toast('<span> Debe ingresar teléfono !</span>', 2000);
		return false;
	} if  (isNaN(telefono)){
		Materialize.toast('<span> Digite sólo números !</span>', 2000);
		return false;
	} if (telefono.length !== 9){
		Materialize.toast('<span>Debe tener 9 digitos !</span>', 2000);
		return false;
	} else{

		var codUno = Math.random();
		var codDos = Math.random();
		var codTres = Math.random();

		alert('Su codigo es LAB - ' + Math.round(codUno) + Math.round(codDos) + Math.round(codTres));
	}



}); 

});