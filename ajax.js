document.addEventListener("DOMContentLoaded", function() {

  var firstButton = document.getElementById('first-button');
  var secondButton = document.getElementById('second-button');

  firstButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
    });
  })

  secondButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
    })
  })


});
