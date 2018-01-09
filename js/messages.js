
$(document).ready(function () {
  var friends = { name: amigos, key: AMIGOS }

  $.each(friends, function getAll(i) {
    var keys = Object.keys(data[friends[i].key]);
    friends[i].number = keys.length;
  });


}
