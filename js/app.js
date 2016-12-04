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
      $('#message').html('<h3>Player One: ' + playerOne + '<br/> Player Two: ' + playerTwo + '<br/><br/> You go first Player One!</h3>');
    } else {
      $('#message').html('<h3>Player One: ' + playerOne + '<br/> Player Two: ' + playerTwo + '<br/><br/> You go first Player Two!</h3>');
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

//add symbol to box that player clicked
function addSymbol() {
  if (turn === playerOne) {
    if (playerOne === 'X') {
      $(this).addClass('x-image');
    } else {
      $(this).addClass('o-image');
    }
    changeTurn(playerOne);
    $('#message').html('<h3>Your turn Player Two!</h3>');
  } else {
    if (playerTwo === 'X') {
      $(this).addClass('x-image');
    } else {
      $(this).addClass('o-image');
    }
    changeTurn(playerTwo);
    $('#message').html('<h3>Your turn Player One!</h3>');
  }
  count ++;
  //countCheck();
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
  if (allBoxes.eq(0)&&allBoxes.eq(1)&&allBoxes.eq(2) === 'X' ||
  allBoxes.eq(3)&&allBoxes.eq(4)&&allBoxes.eq(5) === 'X' ||
  allBoxes.eq(6)&&allBoxes.eq(7)&&allBoxes.eq(8) === 'X' ||
  allBoxes.eq(0)&&allBoxes.eq(3)&&allBoxes.eq(6) === 'X' ||
  allBoxes.eq(1)&&allBoxes.eq(4)&&allBoxes.eq(7) === 'X' ||
  allBoxes.eq(3)&&allBoxes.eq(5)&&allBoxes.eq(8) === 'X' ||
  allBoxes.eq(0)&&allBoxes.eq(4)&&allBoxes.eq(8) === 'X' ||
  allBoxes.eq(2)&&allBoxes.eq(4)&&allBoxes.eq(6) === 'X') {
    if (playerOne === 'X') {
      $('#message').html('<h3>Player One is victorious!</h3>');
    } else {
      $('#message').html('<h3>Player Two is victorious!</h3>');
    }
  } else if (allBoxes.eq(0)&&allBoxes.eq(1)&&allBoxes.eq(2) === 'O' ||
  allBoxes.eq(3)&&allBoxes.eq(4)&&allBoxes.eq(5) === 'O' ||
  allBoxes.eq(6)&&allBoxes.eq(7)&&allBoxes.eq(8) === 'O' ||
  allBoxes.eq(0)&&allBoxes.eq(3)&&allBoxes.eq(6) === 'O' ||
  allBoxes.eq(1)&&allBoxes.eq(4)&&allBoxes.eq(7) === 'O' ||
  allBoxes.eq(3)&&allBoxes.eq(5)&&allBoxes.eq(8) === 'O' ||
  allBoxes.eq(0)&&allBoxes.eq(4)&&allBoxes.eq(8) === 'O' ||
  allBoxes.eq(2)&&allBoxes.eq(4)&&allBoxes.eq(6) === 'O') {
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
