document.addEventListener("DOMContentLoaded", function() {

  var getButton = document.getElementById('get-button');

  getButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
    });
  })


});
