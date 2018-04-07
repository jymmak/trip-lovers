var user = null;
var usuariosConectados = null;
var usuarios = null;

var database = firebase.database();
var conectadoKey = '';
var $inifacebook = $('#inifacebook');
var $inigoogle = $('#inigoogle');

$inifacebook.on('click', signInFacebook);
$inigoogle.on('click', signInGoogle);
function initApp() {
  registrationUsers(user.uid, user.displayName, user.email, user.photoURL);
  login(user.uid, user.displayName, user.email);
  window.location.href = 'views/news.html';
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

var provider = new firebase.auth.FacebookAuthProvider();

// opcionalmente modifico el scope
provider.addScope('user_friends');

// accedo al servicio de autenticación
var authService = firebase.auth();

// evento para el botón de login con facebook
document.getElementById('inifacebook').addEventListener('click', function () {
  // autentico con Facebook
  authService.signInWithPopup(provider)
    .then(function (result) {
      //todo correcto
      console.log('autenticado usuario ', result.user);
    })
    .catch(function (error) {
      console.log('Detectado un error:', error);
    });
})
function signInGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    user = result.user;
    console.log(user);
    initApp();
    window.location.href = 'views/news.html';
  });
}