function begin() {
  // console.log('primero');
  var dataPlace = getPlace();
  var arrPlace = Object.keys(dataPlace);
  var $boxPlace = $('.card-columns');
  function getPlace() {
    return tripData;
  }
  function showPlaces() {
    var listPlaces = '';
    for (var i = 0; i < arrPlace.length; i++) {
      var cardPlace = '<div class="card">' +
        '<a href="#"> <img class="card-img-top" src="' + dataPlace[arrPlace[i]]['photo'] + '" alt="' + arrPlace[i] + '"></a>' +
        '<div class="card-body d-flex justify-content-between">' +
        '<h6 class="card-title mb-1 d-inline">' +
        '<a href="#">' + arrPlace[i] + '</a>' +
        '</h6> <spam class="view-modal"><i class="fa fa-eye"></i></spam>' +
        '</div>' +
        '</div>';
      listPlaces += cardPlace;
    }
    $boxPlace.html(listPlaces);
  }

  showPlaces();
  function showDetailsPlace() {
    var detailsPlace = dataPlace[$(this).text()];
    if (detailsPlace) {
      $('.name-place').text($(this).text());
      $('.description-place').text(detailsPlace['description']);
    }
  }

  function addComentTextArea() {
    var user = 'User';
    var text = $('#text-coment').val();
    var coment = '<a class="list-group-item list-group-item-action" href="#">'
    '<div class="media">' +
    '<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="">' +
    '<div class="media-body">' +
    '<strong>' + user + '</strong>' +
      '<p>' + text + '</p>' +
      '</div>' +
      '</div>' +
      '</a>';
    // $('#form-comment').hide();
    // $('.add-coment').show();
    var $padre = $(this).parent();
    // $padre.prev().insertAfter(coment);
    $('.add-coment').insertAfter(coment);
  }

  function addComent() {
    var boxComent = '<form id="form-comment" class="container"><div class="form-group">' +
      '<textarea class="form-control" id="text-coment"' +
      ' rows="2" placeholder="Añadir comentario"></textarea></div>' +
      '<button class="btn btn-primary btn-sm btn-check"><i class="fa fa-check"></i></button><button type="submit" class="btn btn-secondary btn-sm btn-close"><i class="fa fa-times"></i></button></form>';
    $(this).after(boxComent).hide();
    $('.add-coment').hide();

    $('#text-coment').keyup(ajustarTextArea);
    $('.btn-close').click(function() {
      $('#form-comment').hide();
      $('.add-coment').show();
    });
    $('.btn-check').click(addComentTextArea);
    // $('#form-comment').show();

  }



  function ajustarTextArea(event) {
    // console.log(event.target.scrollHeight);
    event.target.style.height = '1px';
    event.target.style.height = (20 + event.target.scrollHeight) + 'px';
  }

  function search() {
    if ($(this).val()) {
      // console.log($(this).val());
      $('.card-place>div').each(function(index) {
        // console.log(arrPlace)
        // console.log(arrPlace[index])
        // console.log($(this).children)
        console.log($('.card-title'));
        // console.log($('.card-body h6').text());
        // if (!arrPlace[index].tags.match($('.card-body h6').text())) {
        //   $(this).hide();
        // }
      });
    } else {
      $('.card-place div').show();
    }
  }

  // ajustarTextArea();

  $('.card-place a').click(showDetailsPlace);
  $('.add-coment').click(addComent);
  $('#search-input').on('keyup', search);

  // textTweet.addEventListener('keyup', ajustarTextArea);
}
//
// $(window).on('load', function() {
//
//   showPlaces();
//
//
//   var dataPlace = getPlace();
//   var arrPlace = Object.keys(dataPlace);
//   console.log(arrPlace);
//   $('#search-input').on('keyup', search);
//   // Filtrando la seleccion
//   function search() {
//     if ($(this).val()) {
//       // console.log($(this).val());
//       $('.card-place>div').each(function(index) {
//         console.log(arrPlace)
//         // console.log(arrPlace[index])
//         // if (!arrPlace[index].tags.match($('div.card>h6 ').val())) {
//         //   $(this).hide();
//         // }
//       });
//     } else {
//       $('.card-place div').show();
//     }
//   }
// })
$(document).ready(begin);
