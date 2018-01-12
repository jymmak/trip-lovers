// Initialize Firebase
var config = {
  apiKey: "AIzaSyDh8a6XaxaCeFh9tatmoNMjB3Xh44A8q5s",
  authDomain: "trip-lovers.firebaseapp.com",
  databaseURL: "https://trip-lovers.firebaseio.com",
  projectId: "trip-lovers",
  storageBucket: "trip-lovers.appspot.com",
  messagingSenderId: "234184574226"
};
firebase.initializeApp(config);

function begin() {
  // Obtiene el objeto de los lugares
  var data = getData();
  var arrPlace = Object.keys(data);
  var $boxPlace = $('.card-columns');
  // Extrae la data
  function getData() {
    return tripData;
  }

  function showAcomodation() {
    var namePlace = '';
    var listAllHotel = '';
    var typeHotel = '';
    // console.log(data);
    for (var i = 0; i < arrPlace.length; i++) {
      var arrHotel = data[arrPlace[i]]['hotels'];
      // var dataHotel = Object.keys(data[arrPlace[i]]['hotels']);
      // console.log('soy d'+dataHotel);
      for (var j = 0; j < arrHotel.length; j++) {
        var name = arrHotel[j]['name'];
        var address = arrHotel[j]['address'];
        var phone = arrHotel[j]['phone'];
        var priceMin = arrHotel[j]['price-min'];
        var priceMax = arrHotel[j]['price-max'];
        var description = arrHotel[j]['description'];
        var photo = arrHotel[j]['photo'];
        var cardHotel = '<div class="card">' +
          '<a href="#"> <img class="card-img-top" src="' + photo + '" alt="' + name + '"></a>' +
          '<div class="card-body">' +
          '<h6 class="card-title font-weight-bold text-uppercase">' + name + '</h6>' +
          '<p class="card-text mb-0"><i class="fa fa-address-card "></i> ' + address + '</p>' +
          '<p class="card-text "><i class="fa fa-phone"></i> ' + phone + '</p>' +
          '<p class="card-text text-description font-italic">' + description + '</p>' +
          '<p class="font-weight-bold text-price text-right"> min <span>$ ' + priceMin + ' </span> max <span> $ ' + priceMax + '</span></p>' +
          '</div>' +
          '</div>';
        listAllHotel += cardHotel;
      }
    }
    $boxPlace.html(listAllHotel);
  }
  showAcomodation();
  /*

  // Añadiendo el comentario del textarea
  function addComentTextArea() {
    var user = 'User';
    var text = $('#text-coment').val();
    var coment = '<a class="list-group-item list-group-item-action" href="#">' +
    '<div class="media">' +
    '<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="">' +
    '<div class="media-body">' +
    '<strong>' + user + '</strong>' +
      '<p>' + text + '</p>' +
      '</div>' +
      '</div>' +
      '</a>';
    $('.add-coment').prev().after(coment);
    $('#form-comment').hide();
    $('.add-coment').show();
  }

  function addComentForm() {
    var boxComent = '<form id="form-comment" class="container"><div class="form-group">' +
      '<textarea class="form-control" id="text-coment"' +
      ' rows="2" placeholder="Añadir comentario"></textarea></div>' +
      '<button class="btn btn-primary btn-sm btn-check"><i class="fa fa-check"></i></button><button type="submit" class="btn btn-secondary btn-sm btn-close"><i class="fa fa-times"></i></button></form>';
    // El elemento que está despues de form se va ocultar
    $(this).after(boxComent).hide();
    // Cuando escriba el areaTexto se va ajustar para que no salga el scroll
    $('#text-coment').keyup(adjustTextArea);
    // Cuando hace click en el ícono close
    $('.btn-close').click(function() {
      $('#form-comment').hide();
      $('.add-coment').show();
    });
    // Cuando hace click en el check
    $('.btn-check').click(addComentTextArea);
  }

  function adjustTextArea(event) {
    event.target.style.height = '1px';
    event.target.style.height = (20 + event.target.scrollHeight) + 'px';
  }

  // Validar el input buscador
  function searchPlace() {
    if ($(this).val()) { // dato que se ingresa en el input
      var searchTransport = $(this).val(); // en la variable searchPlace se almacena el valor del input
      $('.card-transport>div').each(function(index) { // hace un recorrido con el each todos los div de los card-place
        // console.log($(this).next().text());
        // console.log($('.card-transport h5')[3]);
        var typeTransport = $('.card-transport p:first')[index];
        var st = $(this);
        console.log($(this).children().children().children());
        // console.log($('.card-transport').children());
        // console.log(typeTransport);
        // console.log(searchTransport +'-'+ typeTransport);
        // if ((typeTransport).toUpperCase() === searchTransport.toUpperCase()) { // Comparacion del arraPlace con el valor ingresado
        //   // console.log('1');
        //   $('.card-transport>div').hide(); // ocultatar todos los paneles de la lista
        //   console.log($(this));
        //   // $(this).show();// mostrar solo lo que cumple con la condicion
        // }


        // var typeTransport = $('.card-transport>div')[0];
        // console.log($('.card-transport').children());
        // console.log(typeTransport);
        // console.log(searchTransport +'-'+ typeTransport);
        // if ((typeTransport).toUpperCase() === searchTransport.toUpperCase()) { // Comparacion del arraPlace con el valor ingresado
        //   // console.log('1');
        //   $('.card-transport>div').hide(); // ocultatar todos los paneles de la lista
        //   // console.log($(this));
        //   $(this).show();// mostrar solo lo que cumple con la condicion
        // }

      });
    } else {
      $('.card-transport>div').show(); // mostrar todos las listas
    }
  }
  function singOff() {
    window.location.href = '../index.html';
  }
  // Llamando a la funcion para que cargue los transportes
  showTransports();
  // eventos
  $('.add-coment').click(addComentForm); // cuando se hace click en (Añadir comentarios...) se muestra el formulario
  $('#search-input').on('keyup', searchPlace); // cada vez que inserto un valor en el input que me busque el lugar para mostrarlo
  $('.sign-off').click(singOff);*/
}

$(document).ready(begin);
