$(document).ready(function () {

   function loginFacebook() {
  	if (!firebase.auth().currentUser) {
  	 var provider = new firebase.auth.FacebookAuthProvider();
  	 provider.addScope('public_profile');
  	 firebase.auth().signInWithPopup(provider).then(function(result) {
			  var token = result.credential.accessToken;
			  var user = result.user;
			  var name = user.displayName;
        window.location.href = '../index.html';
      }).catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  var email = error.email;
			  var credential = error.credential;

			  if (errorCode === 'auth/account-exists-with-different-credential') {
			  	alert('Es el mismo usuario');
			  }
      });
  	} else {
  		firebase.auth().signOut();
    }
    $('#btn-fb').on('click', loginFacebook);
  }

});