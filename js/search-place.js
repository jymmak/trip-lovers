$(document).ready(begin);
function begin() {
  // Obtiene el objeto de los lugares
  var dataPlace = getPlace();
  // Almacena los nombres de los lugares en un arreglo
  var arrPlace = Object.keys(dataPlace);
  // Caja donde se va cargar todos los lugares
  var $boxPlace = $('.card-columns');
  // Extrae la data
  function getPlace() {
    return tripData;
  }
  // Carga todos los lugares
  function showPlaces() {
    var listPlaces = '';
    // recorrido de cada uno de los lugares que se almacenó
    for (var i = 0; i < arrPlace.length; i++) {
      var cardPlace = '<div class="card">' +
                        '<a href="#"> <img class="card-img-top" src="' + dataPlace[arrPlace[i]]['photo'] + '" alt="' + arrPlace[i] + '"></a>' +
                        '<div class="card-body d-flex justify-content-between">' +
                          '<h6 class="card-title mb-1 d-inline">' +
                            '<a href="#">' + arrPlace[i] + '</a>' +
                          '</h6>' +
                        '</div>' +
                      '</div>';
      listPlaces += cardPlace;
    }
    $boxPlace.html(listPlaces);
  }

  // Mostrar los detalles de los lugares que se va seleccionar
  function showDetailsPlace() {
    var detailsPlace = dataPlace[$(this).text()];
    if (detailsPlace) {
      $('.name-place').text($(this).text());
      $('.description-place').text(detailsPlace['description']);
      $('.img-maps').attr('src', (detailsPlace['maps']));
    }
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
      var searchPlace = $(this).val(); // en la variable searchPlace se almacena el valor del input
      $('.card-place>div').each(function(index) { // hace un recorrido con el each todos los div de los card-place
        if ((arrPlace[index]).toUpperCase() === searchPlace.toUpperCase()) { // Comparacion del arraPlace con el valor ingresado
          $('.card-place div').hide(); // ocultatar todos los paneles de la lista
          $(this).show();// mostrar solo lo que cumple con la condicion
        }
      });
    } else {
      $('.card-place div').show(); // mostrar todos las listas
    }
  }
  function singOff() {
    window.location.href = '../index.html';
  }
  // Llamando a la funcion para que cargue los lugares
  showPlaces();
  // eventos
  $('.card-place a').click(showDetailsPlace); // cuando se hace click al nombre del lugar mostrar los detalles
  $('.add-coment').click(addComentForm); // cuando se hace click en (Añadir comentarios...) se muestra el formulario
  $('#search-input').on('keyup', searchPlace); // cada vez que inserto un valor en el input que me busque el lugar para mostrarlo
  $('.sign-off').click(singOff);
}

$(document).ready(begin);
