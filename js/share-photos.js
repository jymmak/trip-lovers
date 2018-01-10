$(document).ready(begin);
function begin() {
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
            '<p>Una ciudad muy bonita e interesante culturalmente, su centro cívico es muy atractivo, hay mucha historia que aprender</p>'  +
          '</div>' +
        '</div>' +
      '</a>';


      listNews += news;
    }
    $boxNews.html(listNews);
  }

  function singOff() {
    window.location.href = '../index.html';
  }
  $('.sign-off').click(singOff);

  showFriends();
}
