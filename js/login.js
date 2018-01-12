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

  function entrar() {
    var email2 = document.getElementById('email2').value;
    var pass2 = document.getElementById('pass2').value;

    firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      document.getElementById('email2').value = "";
      document.getElementById('pass2').value = "";

    });
  }

  function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('existe un usuario activo');
        aparece();
        // User is signed in.
        var displayName = user.displayName;

        var email = user.email;
        console.log(email);
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        console.log('no existe un usuario activo');

        // ...
      }
    });

  }
  console.log(observador());

  function aparece() {
    /*
    var contenido = document.getElementById('contenido');
    contenido.innerHTML = "Solo lo ve usuario activo";
    //window.location.href='../views/news.html';
    window.location.href='news.html';
  }
  
  $(document).ready(function(){
      entrar();
      
    }
  )*/
});