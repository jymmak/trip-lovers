
$(document).ready(function () {


  $('#send').click(function () {
    var chat = $('#comment').val();
    var hora = new Date();
    var dame_hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
    if (chat !== '');
    var element = $('<p class="tipoPost"></p>').text('Yo: ' + chat + " " + dame_hora);
    $('#chat').append(element);
    $('#comment').val('');
  });
});