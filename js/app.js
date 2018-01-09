$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDh8a6XaxaCeFh9tatmoNMjB3Xh44A8q5s",
    authDomain: "trip-lovers.firebaseapp.com",
    databaseURL: "https://trip-lovers.firebaseio.com",
    projectId: "trip-lovers",
    storageBucket: "",
    messagingSenderId: "234184574226"
  };

  $('.next, #send2').on('click', function (event) {
    event.preventDefault();
    window.location.href = 'views/search-places.html';
  });

  $(function () {
    $('#phone').keyup(function (e) {
      if (this.value != '')
        while (isNaN(this.value))
          this.value = this.value.split('').reverse().join('').replace(/[\D]/i, '')
            .split('').reverse().join('');
    })
      .on("cut copy paste", function (e) {
        e.preventDefault();
      });
  });
  $('#phone').keyup(function () {
    if ($(this).val().length > 9) {
      $('.next').removeAttr('disabled');
    } else {
      $('.next').attr('disabled', 'disabled');
    }
  }).trigger('keyup');

  $('#send2').on('click', function (registrar) {
    firebase.auth().createUserWithEmailAndPassword('#email2', '#pass2').catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    
 });  
  });






