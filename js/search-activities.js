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

  function showActivities() {
    var namePlace = '';
    var listAllActivities = '';
    var typeActivities = '';
    for (var i = 0; i < arrPlace.length; i++) {
      var arrActivities = data[arrPlace[i]]['activities'];
      for (var j = 0; j < arrActivities.length; j++) {
        var name = arrActivities[j]['name'];
        var address = arrActivities[j]['address'];
        var phone = arrActivities[j]['phone'];
        var price = arrActivities[j]['price'];
        var description = arrActivities[j]['description'];
        var photo = arrActivities[j]['photo'];
        var cardActivities = '<div class="card">' +
          '<a href="#"> <img class="card-img-top" src="' + photo + '" alt="' + name + '"></a>' +
          '<div class="card-body">' +
          '<h6 class="card-title font-weight-bold text-uppercase">' + name + '</h6>' +
          '<p class="card-text mb-0"><i class="fa fa-address-card "></i> ' + address + '</p>' +
          '<p class="card-text text-description font-italic">' + description + '</p>' +
          '<p class="font-weight-bold text-price text-right"> <i class="fa fa-tags" aria-hidden="true"></i> <span>$ ' + price + '</span></p>' +
          '</div>' +
          '</div>';
        listAllActivities += cardActivities;
      }
    }
    $boxPlace.html(listAllActivities);
  }

  function singOff() {
    window.location.href = '../index.html';
  }

  showActivities();
  // Event
  $('.sign-off').click(singOff);
}

$(document).ready(begin);
