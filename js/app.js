//wait for the DOM to finish loading
$(document).ready(function() {

  //start off hiding alert
  $('.alert').hide();

  //input players' names
  $('#submitOne').on('click', function(){
    playerOneName = $('#nameOne').val();
    $('#formOne').remove();
    if (playerTwoName) {
    $('aside').html('<h3 id="message">' + playerOneName + ', choose your symbol:</h3>' +
    '<button type="button" class="btn btn-secondary" id="x">X</button>' +
    '&nbsp<button type="button" class="btn btn-secondary" id="o">O</button>');
    }
  })
  $('#submitTwo').on('click', function(){
    playerTwoName = $('#nameTwo').val();
    $('#formTwo').remove();
    if (playerOneName) {
    $('aside').html('<h3 id="message">' + playerOneName + ', choose your symbol:</h3>' +
    '<button type="button" class="btn btn-secondary" id="x">X</button>' +
    '&nbsp<button type="button" class="btn btn-secondary" id="o">O</button>');
    }
  })

  //assign symbols to players
  $('body').on('click', '#x', function () {
    playerOne = 'X';
    playerTwo = 'O';
    firstPlayer();
  });

  $('body').on('click', '#o', function () {
    playerOne = 'O';
    playerTwo = 'X';
    firstPlayer();
  });

  //determine who goes first
  function firstPlayer() {
    var random = Math.random();
    if (random > .5) {
      turn = playerOne;
    } else {
      turn = playerTwo;
    };
    $('#x').remove();
    $('#o').remove();
    if (turn === playerOne) {
      $('#message').html('<h3>' + playerOneName + ': ' + playerOne + '<br/>' + playerTwoName + ': ' + playerTwo +
      '<br/><br/><span class="players"> You go first ' + playerOneName + '!</span></h3>');
    } else {
      $('#message').html('<h3>' + playerOneName + ': ' + playerOne + '<br/>' + playerTwoName + ': ' + playerTwo +
      '<br/><br/><span class="players"> You go first ' + playerTwoName + '!</span></h3>');
    }
  }

  //event listener for player to click
  var allBoxes = $('.column');
  allBoxes.eq(0).on('click', addSymbol);
  allBoxes.eq(1).on('click', addSymbol);
  allBoxes.eq(2).on('click', addSymbol);
  allBoxes.eq(3).on('click', addSymbol);
  allBoxes.eq(4).on('click', addSymbol);
  allBoxes.eq(5).on('click', addSymbol);
  allBoxes.eq(6).on('click', addSymbol);
  allBoxes.eq(7).on('click', addSymbol);
  allBoxes.eq(8).on('click', addSymbol);

  //event listener for reset button
  $('body').on('click', '.btn-danger', function() {
    board = [];
    count = 0;
    playerOne = null;
    playerTwo = null;
    turn = null;
    allBoxes.removeClass('x-image');
    allBoxes.removeClass('o-image');
    $('aside').html('<h3 id="message">' + playerOneName + ', choose your symbol:</h3>' +
            '<button type="button" class="btn btn-secondary" id="x">X</button>' +
            '&nbsp<button type="button" class="btn btn-secondary" id="o">O</button>');
  })
});

var playerOne;
var playerTwo;
var playerOneName;
var playerTwoName;
var turn;
var count = 0;
var board = [];
var whichBox;

//add symbol to box that player clicked
function addSymbol() {
  if ($(this).hasClass('x-image') || $(this).hasClass('o-image')) {
    $('.alert').show();
    $('.close').on('click', function() {$('.alert').hide();});
  } else {
    if (turn === playerOne) {
      if (playerOne === 'X') {
        $(this).addClass('x-image');
        whichBox = $(this).attr('id');
        trackBox('X');
      } else {
        $(this).addClass('o-image');
        whichBox = $(this).attr('id');
        trackBox('O');
      }
      changeTurn(playerOne);
      $('.players').text('Your turn ' + playerTwoName + '!');
    } else {
      if (playerTwo === 'X') {
        $(this).addClass('x-image');
        whichBox = $(this).attr('id');
        trackBox('X');
      } else {
        $(this).addClass('o-image');
        whichBox = $(this).attr('id');
        trackBox('O');
      }
      changeTurn(playerTwo);
      $('.players').text('Your turn ' + playerOneName + '!');
    }
    count ++;
    countCheck();
  }
}

//track boxes that are already checked
function trackBox(symbol) {
  if (whichBox === 'one') {
    board[0]= symbol;
  } else if (whichBox === 'two') {
    board[1]= symbol;
  } else if (whichBox === 'three') {
    board[2]= symbol;
  } else if (whichBox === 'four') {
    board[3]= symbol;
  } else if (whichBox === 'five') {
    board[4]= symbol;
  } else if (whichBox === 'six') {
    board[5]= symbol;
  } else if (whichBox === 'seven') {
    board[6]= symbol;
  } else if (whichBox === 'eight') {
    board[7]= symbol;
  } else if (whichBox === 'nine') {
    board[8]= symbol;
  }
}

//keep track of who's turn it is
function changeTurn(currentPlayer) {
    if (currentPlayer === playerOne) {
      turn = playerTwo;
    } else {
      turn = playerOne;
  }
}

function countCheck() {
  if ((board[0]==='X'&&board[1]==='X'&&board[2]==='X') ||
  (board[3]==='X'&&board[4]==='X'&&board[5]==='X') ||
  (board[6]==='X'&&board[7]==='X'&&board[8]==='X') ||
  (board[0]==='X'&&board[3]==='X'&&board[6]==='X') ||
  (board[1]==='X'&&board[4]==='X'&&board[7]==='X') ||
  (board[2]==='X'&&board[5]==='X'&&board[8]==='X') ||
  (board[0]==='X'&&board[4]==='X'&&board[8]==='X') ||
  (board[2]==='X'&&board[4]==='X'&&board[6]==='X')) {
    if (playerOne === 'X') {
      $('#message').html('<h3>' + playerOneName + ' is victorious!</h3>');
    } else {
      $('#message').html('<h3>' + playerTwoName + ' is victorious!</h3>');
    }
    $('aside').append('<button type="button" class="btn btn-danger" id="reset">Play Again</button>');
  } else if ((board[0]==='O'&&board[1]==='O'&&board[2]==='O') ||
    (board[3]==='O'&&board[4]==='O'&&board[5]==='O') ||
    (board[6]==='O'&&board[7]==='O'&&board[8]==='O') ||
    (board[0]==='O'&&board[3]==='O'&&board[6]==='O') ||
    (board[1]==='O'&&board[4]==='O'&&board[7]==='O') ||
    (board[2]==='O'&&board[5]==='O'&&board[8]==='O') ||
    (board[0]==='O'&&board[4]==='O'&&board[8]==='O') ||
    (board[2]==='O'&&board[4]==='O'&&board[6]==='O')) {
      if (playerOne === 'O') {
        $('#message').html('<h3>' + playerOneName + ' is victorious!</h3>');
      } else {
        $('#message').html('<h3>' + playerTwoName + ' is victorious!</h3>');
      }
      $('aside').append('<button type="button" class="btn btn-danger">Play Again</button>');
  } else if (count === 9) {
    $('#message').html('<h3>Womp womp game over</h3>');
    $('aside').append('<button type="button" class="btn btn-danger">Play Again</button>');
  }
}
