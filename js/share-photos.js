$(document).ready(begin);
function begin() {
  // Seleccionarr imagen y cargarlo
  var storageRef = firebase.storage().ref();
  function handleFileSelect(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      var list = document.getElementById('list');
      list.src = dataURL;
      $('img').css({'height': '70px', 'padding-bottom': '20px'});
      $('.close span').removeClass('display');
    };
    reader.readAsDataURL(input.files[0]);
    // console.log(input.files[0])
    // StorageRef.child('images/' + imageUpload.name).put(input.files[0]);
  }
  document.getElementById('add-image').addEventListener('change', handleFileSelect);
  $('.close span').click(function() {
    $('.close span').toggleClass('display');
    $('#list').removeAttr('src', '');
  });

  // Referencia
  var db = firebase.database().ref('sharePhoto/');
  db.on('value', function(snapshot) {
    var sharePhotos = snapshot.val();
    var $boxNews = $('#cointainer-news');
    // sharePhotos[sharePhoto].photo
    var list = '';
    for (sharePhoto in sharePhotos) {
      list += '<div class="card mb-2">' +
        '<a href="#"> <img class="card-img-top img-fluid w-100" src="' + '../assets/images/tripdata/cuz/activitie_tambomachay.jpg' + '" alt="image"></a>' +
        '<div class="card-body d-flex justify-content-between">' +
        '<h6 class="card-title mb-1 d-inline">' +
        '<a href="#">' + sharePhotos[sharePhoto].description +
        '</a>' +
         '</h6><span class="like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> ' + sharePhotos[sharePhoto].like + '</span></div></div>' ;
    }
    $boxNews.html(list);
  });


  // Get comentario
  function savesharePhoto() {
    var dataSharePhoto = {
      description: $('#coment').val(),
      photo: $('#list').val(),
      like: 0,
    }
    // console.log(like);
    db.push().set(dataSharePhoto);
    $('#coment').val('');
    $('#coment').focus();
  }

  $('.btn-postear').click(savesharePhoto);

  $('.like').on('click', function(event) {
    // console.log('');
  })

/*

  function getNews() {
    return socialNetData;
  }
  var dataNews = getNews();
  var arrNews = dataNews.AMIGOS;
  var $boxNews = $('#cointainer-news');
  function showFriends() {
    var listNews = '';
    for (var i = 0; i < arrNews.length; i++) {
      var news = '<div class="card mb-2">' +
        '<a href="#"> <img class="card-img-top img-fluid w-100" src="' + arrNews[i].trips[0].picture + '" alt="' + arrNews[i].name + '"></a>' +
        '<div class="card-body d-flex justify-content-between">' +
        '<h6 class="card-title mb-1 d-inline">' +
        '<a href="#">' + arrNews[i].trips[0].post +
        '</a>' + '<a href="#">' + 'publicado por ' + arrNews[i].name +
        '</a>' + '</h6></div></div>' +

        '<a class="list-group-item list-group-item-action" href="#">' +
        '<div class="media">' +
          '<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="">' +
          '<div class="media-body">' +
            '<strong>Carmen</strong>' +
            '<p>Una ciudad muy bonita e interesante culturalmente, su centro cívico es muy atractivo, hay mucha historia que aprender</p>' +
          '</div>' +
        '</div>' +
      '</a>';


      listNews += news;
    }
    $boxNews.html(listNews);
  }
*/
  function singOff() {
    window.location.href = '../index.html';
  }
  $('.sign-off').click(singOff);

  // showFriends();
}
