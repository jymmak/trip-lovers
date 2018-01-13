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
  $('#send2').on('click', function (event) {
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


  /*$('#send2').on('click', function () {
    firebase.auth().createUserWithEmailAndPassword('#email2', '#pass2').catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  });*/
});





