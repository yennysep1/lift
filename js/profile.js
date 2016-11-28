
$(document).ready(function(){

    //MUESTRA NOMBRE INGRESADO POR USUARIO
     var userName = localStorage.getItem('Nombre');
     $('h5').html(userName);

 })



//INICIALIZA SIDENAV materilize

  $('.button-collapse').sideNav({
      menuWidth: 200, 
  });

  //INICIALIZACION API GOOGLE MAP

  var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
	}