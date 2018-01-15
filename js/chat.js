$(document).ready(function() {
  var nameUserChat = $('#name');
  var valTextChat = $('#message');
  var btnSend = $('#btn-send');
  var contChat = $('#content-chat');

  // mandar información a firebase para el chat

  btnSend.on('click', function() {
    var name = nameUserChat.val();
    var msg = valTextChat.val();

    firebase.database().ref('chat').push({
      name: name,
      message: msg
    });
  });

  // obtiene data de la base de datos

  firebase.database().ref('chat').on('value', function(snapshot) {
    contChat.html('');
    snapshot.forEach(function(elm) {
      var element = elm.val();
      var txtName = element.name;
      var txtMsg = element.message;
      var tName = $('<li/>', {
        'class': 'send-message',
      }).text(txtName + ': ');
      var tMsg = $('<li/>', {
        'class': 'recived-message',
      }).text(txtMsg);
      contChat.append(tName);
      contChat.append(tMsg);
    });
  });
});
