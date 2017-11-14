document.addEventListener("DOMContentLoaded", function() {

  var button = querySelector('button');

  button.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
    })

  })


});
