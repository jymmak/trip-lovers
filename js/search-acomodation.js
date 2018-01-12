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

    for (var i = 0; i < arrPlace.length; i++) {
      var arrHotel = data[arrPlace[i]]['hotels'];
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

  function singOff() {
    window.location.href = '../index.html';
  }

  showAcomodation();
  // Event
  $('.sign-off').click(singOff);
}

$(document).ready(begin);
