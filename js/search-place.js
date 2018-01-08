$(document).ready(begin);
function begin() {
  function getPlace() {
    return tripData;
  }
  var dataPlace = getPlace();
  var arrPlace = Object.keys(dataPlace);
  var $boxPlace = $('.card-columns');
  function showPlaces() {
    var str = '';
    for (var i = 0; i < arrPlace.length; i++) {
      var place = '<div class="card mb-2">' +
          '<a href="#"> <img class="card-img-top img-fluid w-100" src="' + dataPlace[arrPlace[i]]['photo'] + '" alt="' + arrPlace[i] + '"></a>' +
            '<div class="card-body d-flex justify-content-between">' +
          '<h6 class="card-title mb-1 d-inline">' +
          '<a href="#">' + arrPlace[i] + '</a>' +
          '</h6> <spam class="view-modal"><i class="fa fa-eye"></i></spam>' +
        '</div>' +
      '</div>';
      str += place;
    }
    $boxPlace.html(str);
  }

  showPlaces();




}
