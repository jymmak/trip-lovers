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

  function Registrar() {
    var $email = $('.email-res').val();
    var $password = $('.pass-res').val();

    firebase.auth().createUserWithEmailAndPassword($email, $password)
      .then(function () {
        writeUserData(uid, name);
        $('.modal').modal();
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      });
  }


  function Ingresar() {
    var $email2 = $('.email-ingreso').val();
    var $password2 = $('.pass-ingreso').val();
    var $message = $('.message-error');

    firebase.auth().signInWithEmailAndPassword($email2, $password2)
      .then(function () {
        next1();
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        $message.append('<p class="red-text">*Datos incorretos</p>');
      });
  }

  function Observador() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log('existes');

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...

        console.log('no existes');
      }
    });
  }

  Observador();

  function next1() {
    setTimeout(function () {
      window.location.href = 'views/search-place.html';
    }, 500);
  }
});




