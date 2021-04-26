function getList() {
  var $userList = document.querySelector('#user-list');

  var newRequest = new XMLHttpRequest();

  newRequest.open('GET', 'http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]');
  newRequest.responseType = 'json';

  newRequest.addEventListener('load', function (event) {
    console.log(newRequest.status);
    console.log(newRequest.response);
    newRequest.response.forEach(function (item) {
      var $li = document.createElement('li');
      $li.textContent = item.name;
      $userList.appendChild($li);
    });

  });
  newRequest.send();
}

getList();
