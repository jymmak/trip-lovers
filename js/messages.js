$(document).ready(begin);
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
  console.log(socialNetData);
  function getFriends() {
    return socialNetData;
  }
  var dataFriends = getFriends();
  var arrFriends = dataFriends.AMIGOS;
  var $boxFriends = $('.small');

  function showFriends() {
    var str = '';
    for (var i = 0; i < arrFriends.length; i++) {
      var place =
      '<a class="list-group-item list-group-item-action" href="#">' +
      '<div class="media">' +
        '<img class="d-flex mr-3 rounded-circle img-fluid" src="' + arrFriends[i].photo + '" ' + 'alt="' + arrFriends[i].name + '">' +
          '<div class="media-body">' +
            '<strong>' + arrFriends[i].name + '</strong>' +
          '</div>' +
      '</div>' +
    '</a>';

      str += place;
    }
    $boxFriends.html(str);
  }

  function singOff() {
    window.location.href = '../index.html';
  }

  showFriends();
  // Event
  $('.sign-off').click(singOff);
}
