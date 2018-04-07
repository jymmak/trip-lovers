
var user = null;
var usuariosConectados = null;
var usuarios = null;

var database = firebase.database();
var conectadoKey = '';
var $inifacebook = $('#inifacebook');
var $inigoogle = $('#inigoogle');
var $logout = $('.logout');
$logout.on('click', signOut);
$inifacebook.on('click', signInFacebook);
$inigoogle.on('click', signInGoogle);
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

function signInGoogle() {
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
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
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
  } else {
    firebase.auth().signOut();
  }
}