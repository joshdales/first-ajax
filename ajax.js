document.addEventListener("DOMContentLoaded", function() {

  var firstButton = document.getElementById('first-button');
  var step3456 = document.getElementById('step3456');
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
    }).done(function(data) {
      step3456.appendChild(document.createElement('p')).innerText = data;
    })
  })


});
