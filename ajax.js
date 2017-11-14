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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
    }).always(function() {
      step3456.appendChild(document.createElement('p')).innerText = 'Hey the request has finsihed';
    }).done(function(data) {
      step3456.appendChild(document.createElement('p')).innerText = data;
    }).fail(function() {
      step3456.appendChild(document.createElement('p')).innerText = "I'm very sorry but something has gone wrong";
    })
  })


});
