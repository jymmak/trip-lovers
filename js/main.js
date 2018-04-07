var user = null;
var usuariosConectados = null;
var usuarios = null;

var database = firebase.database();
var conectadoKey = '';
var $inifacebook = $('#inifacebook');
var $loginGoogle = $('#google-login');
var $logout = $('.logout');
$logout.on('click', signOut);
$inifacebook.on('click', signInFacebook);

function initApp() {
  registrationUsers(user.uid, user.displayName, user.email, user.photoURL);
  login(user.uid, user.displayName, user.email);
  window.location.href = '../views/search-places.html';
}
function registrationUsers(uid, name, email, photoURL) {
  firebase.database().ref('Usuarios/' + uid).set({
    name: name,
    email: email,
    photoURL: photoURL
  });
}
function login(uid, name, email) {
  firebase.database().ref('connected/' + uid).set({
    name: name,
    email: email
  });
}
function signOut() {
  firebase.auth().onAuthStateChanged(function (user) {
    database.ref('/connected/' + user.uid).remove();
  });
  firebase.auth().signOut()
    .then(function (result) {
      console.log('Te has desconectado correctamente');

      window.location.href = '../index.html';
    })

};
function signInFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    user = result.user;
    console.log(user);
    initApp();
  }).catch(function (error) {
    var errorCode = error.code;
    console.log(errorcode);
    var errorMessage = errorMessage;
    console.log(errorMessage);
    var email = error.email;
    console.log(email);
    var credential = error.credential;
    console.log(credential);
  });
}



// Login con Google
var providerGoogle = new firebase.auth.GoogleAuthProvider();
$loginGoogle.click(function () {
  firebase.auth().signInWithPopup(providerGoogle).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    firebase.database().ref('users/' + user.uid).set({
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      profilePhoto: user.photoURL
    }).then(
      user => {
        console.log('Sesión con google');
        $(location).attr('href', 'search-places.html');
      });
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

// Obteniendo datos del usuario actual
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var name = user.displayName;
    var email = user.email;
    var photoUrl = user.photoURL;
    var emailVerified = user.emailVerified;
    var uid = user.uid;
    console.log(user);

    $displayUsername.text(name);
    // $userEmail.text(email);
    $profilePhoto.attr('src', photoUrl);
  } else {
    // No user is signed in.
  }
});
