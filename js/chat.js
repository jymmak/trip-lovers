$(document).ready(function() {
  var nameUserChat = $('#name');
  var valTextChat = $('#message');
  var btnSend = $('#btn-send');
  var contChat = $('#content-chat');

  // ajustar textarea
  var ajustarTextArea = function(event) {
    event.target.style.height = '1px';
    event.target.style.height = (27 + event.target.scrollHeight) + 'px';
  }
  $('textarea').keyup(ajustarTextArea);

  // mandar información a firebase para el chat
  btnSend.on('click', function() {
    var name = nameUserChat.val();
    var msg = valTextChat.val();
    var time = moment().format('LTS');

    firebase.database().ref('chat').push({
      name: name,
      message: msg,
      time: time
    });
    // valTextChat.value="";
    valTextChat.val('');
    valTextChat.focus();
  });

  // obtiene data de la base de datos
  firebase.database().ref('chat').on('value', function(snapshot) {
    contChat.html('');
    snapshot.forEach(function(elm) {
      var element = elm.val();
      // console.log();
      var txtName = element.name;
      var txtMsg = element.message;
      var time = element.time;
      var tName = $('<li/>', {
        'class': 'li',
      }).text(txtName + ': ');
      var tMsg = $('<span/>', {
        'span': 'li',
      }).text(txtMsg);
      var tTime = $('<p/>', {
        'class': 'time',
      }).text(time);
      tName.append(tMsg);
      contChat.prepend(tName);
      contChat.prepend(tTime);
    });
  });
});
