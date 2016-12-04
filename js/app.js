//wait for the DOM to finish loading
$(document).ready(function() {

  //assign symbols to players
  $('#x').on('click', function () {
    playerOne = 'X';
    playerTwo = 'O';
    firstPlayer();
  });

  $('#o').on('click', function () {
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
    if (turn === playerOne) {
      $('#message').html('<h3>Player One: ' + playerOne + '<br/> Player Two: ' + playerTwo + '<br/><br/><span> You go first Player One!</span></h3>');
    } else {
      $('#message').html('<h3>Player One: ' + playerOne + '<br/> Player Two: ' + playerTwo + '<br/><br/><span> You go first Player Two!</span></h3>');
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
});

var playerOne;
var playerTwo;
var turn;
var count = 0;
var board = [];
var whichBox;

//add symbol to box that player clicked
function addSymbol() {
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
    $('span').text('Your turn Player Two!');
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
    $('span').text('Your turn Player One!');
  }
  count ++;
  countCheck();
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
  console.log(board);
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
      $('#message').html('<h3>Player One is victorious!</h3>');
    } else {
      $('#message').html('<h3>Player Two is victorious!</h3>');
    }
  } else if ((board[0]==='O'&&board[1]==='O'&&board[2]==='O') ||
    (board[3]==='O'&&board[4]==='O'&&board[5]==='O') ||
    (board[6]==='O'&&board[7]==='O'&&board[8]==='O') ||
    (board[0]==='O'&&board[3]==='O'&&board[6]==='O') ||
    (board[1]==='O'&&board[4]==='O'&&board[7]==='O') ||
    (board[2]==='O'&&board[5]==='O'&&board[8]==='O') ||
    (board[0]==='O'&&board[4]==='O'&&board[8]==='O') ||
    (board[2]==='O'&&board[4]==='O'&&board[6]==='O')) {
      if (playerOne === 'O') {
        $('#message').html('<h3>Player One is victorious!</h3>');
      } else {
        $('#message').html('<h3>Player Two is victorious!</h3>');
      }
  } else if (count === 9) {
    $('#message').html('<h3>Womp womp game over</h3>');
  }
}

//form to input names, so it addresses Amber instead of player 1
//temporarily hide buttons
