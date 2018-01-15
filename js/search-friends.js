$(document).ready(begin);
function begin() {
  function getFriends() {
    return socialNetData;
  }
  var dataFriends = getFriends();
  var arrFriends = dataFriends.AMIGOS;
  var $boxFriends = $('#cointainer-friends');
  var $boxFriendsDetails = $('#container-details-friends');
  function showFriends() {
    var containerList = '';
    for (var i = 0; i < arrFriends.length; i++) {
      var friendsList =
        '<a class="list-group-item list-group-item-action" href="#">' +
        '<div class="media">' +
        '<img class="mr-3 rounded-circle img-fluid" src="' + arrFriends[i].photo + '"' + 'alt="' + arrFriends[i].name + '">' +
        '<div class="media-body">' +
        '<strong>' + arrFriends[i].name + '</strong>' +
        '<br>' +
        '<i class="fa fa-phone "></i> ' + arrFriends[i].phone + 
        '<br>' +
        '<i class="fa fa-envelope"></i> ' + arrFriends[i].email +
        '</div>' +
        '<button type="button" class="btn btn-primary btn-sm">Ver perfil</button>' +
        '<button type="button" class="btn btn-secondary btn-sm">Enviar mensaje</button>' +
        '</div>' +
        '</a>';
      containerList += friendsList;
    }
    $boxFriends.html(containerList);
  }

  function singOff() {
    window.location.href = '../index.html';
  }

  showFriends();
  showDetailsFriends();
  // Event
  $('.sign-off').click(singOff);
}
