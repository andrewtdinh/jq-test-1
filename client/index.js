'use strict';

$(document).ready(init);

function init(){
  $('#getRandomNums').click(get20Nums);
  $('#evens').on('click', '.evenNum', squareRoot);
}

function squareRoot(){
  var evenNum = $(this).text();
  $(this).text(Math.sqrt(evenNum).toFixed(2));
}

function get20Nums(){
  var nums = 20;
  var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint16';
  $.getJSON(url, function(response){
    var threes = [];
    var others = [];
    $('#evens').children().remove();
    $('#threes').children().remove();
    $('#others').children().remove();
    response.data.forEach(function(num){
      var $div = $('<div>');
      if (num % 2 === 0){
        $div.text(num);
        $div.addClass('evenNum')
        $('#evens').append($div);
      }
      else if (num % 3 === 0) {
        threes.push(num);
      }
      else {
        others.push(num);
      }
    });
    var $div3 = $('<div>');
    var $othersdiv = $('<div>');
    $div3.text(threes.join(', '));
    $othersdiv.text(others.join(', '));
    $('#threes').append($div3);
    $('#others').append($othersdiv);

    // $div.addClass('quote');
    // $div.text('$' + response.LastPrice);
    // $('#quotes').append($div);
  });
}
