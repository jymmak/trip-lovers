$(document).ready(function () {
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