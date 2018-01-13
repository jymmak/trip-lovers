$(document).ready(begin);
function begin() {
  // Obtiene el objeto de los lugares
  var data = getData();
  var arrPlace = Object.keys(data);

  var $boxPlace = $('.card-columns');
  // Extrae la data
  function getData() {
    return tripData;
  }
  function showTransports() {
    var namePlace = '';
    var listAllTransport = '';
    var typeTransport = '';

    for (var i = 0; i < arrPlace.length; i++) {
      var arrTransport = data[arrPlace[i]]['transports'];
      var dataTransports = Object.keys(data[arrPlace[i]]['transports']);
      for (var j = 0; j < dataTransports.length; j++) {
        var listTransport = arrTransport[dataTransports[j]];
        typeTransport = dataTransports[j];
        for (var k = 0; k < listTransport.length; k++) {
          namePlace = arrPlace[i];
          var nameAgency = listTransport[k]['name'];
          var priceMin = listTransport[k]['price-min'];
          var priceMax = listTransport[k]['price-max'];
          var frecuency = listTransport[k]['frecuency'];
          var schedule = listTransport[k]['schedule'];
          var photo = listTransport[k]['photo'];
          var cardTransport = '<div class="card">' +
            '<div class="card-body">' +
            '<div class="clearfix"><img class="card-img-top float-right " src="' + photo + '" alt="logo-agency"></div>' +
            '<h5 class="card-title font-weight-bold mb-0">' + namePlace + '</h5>' +
            '<p class="font-italic mb-0">' + typeTransport + '</p>' +
            '<p class="card-text mb-0"><img src="../assets/images/atencion-al-cliente.png "></img> ' + frecuency + '</p>' +
            '<p class="card-text "><img src="../assets/images/reloj.png "></img> ' + schedule + '</p>' +
            '<p class="font-weight-bold text-price text-right mt-0"> min <span>$ ' + priceMin + ' </span> max <span> $ ' + priceMax + '</span></p>' +
            '</div>' +
            '</div>';
          namePlace = '';
          listAllTransport += cardTransport;
        }
        typeTransport = '';
      }
    }
    $boxPlace.html(listAllTransport);
  }

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
    $('.btn-close').click(function () {
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
        var typeTransport = $('.card-transport p:first')[index];
        var st = $(this);
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
  $('.sign-off').click(singOff);
}

$(document).ready(begin);
