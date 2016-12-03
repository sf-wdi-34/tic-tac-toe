//wait for the DOM to finish loading
$(document).ready(function() {

  //assign symbols to players
  $('#x').on('click', function () {
    playerOne = 'x';
    playerTwo = 'o';
    firstPlayer();
  });

  $('#o').on('click', function () {
    playerOne = 'o';
    playerTwo = 'x';
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
      $('#message').text('You go first Player One!');
    } else {
      $('#message').text('You go first Player Two!');
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

//keep track of who's turn it is
function changeTurn(currentPlayer) {
    if (currentPlayer === playerOne) {
      turn = playerTwo;
    } else {
      turn = playerOne;
  }
}

//add symbol to box that player clicked
function addSymbol() {
  if (turn === playerOne) {
    playerOneSymbol();
  } else {
    playerTwoSymbol();
  }
}

function playerOneSymbol() {
  //if box is empty then:
    if (playerOne === 'x') {
      $(this).addClass("x-image");
    } else {
      $(this).addClass("o-image");
    }
    changeTurn(playerOne);
    $('#message').html('<h3>Your turn Player Two!</h3>');
  //else message you can't do that
}

function playerTwoSymbol() {
  //if box is empty then:
    if (playerTwo === 'x') {
      $(this).addClass("x-image");
    } else {
      $(this).addClass("o-image");
    }
    changeTurn(playerTwo);
    $('#message').html('<h3>Your turn Player One!</h3>');
  //else message you can't do that
}

//function to know when someone has won

//form to input names, so it addresses Amber instead of player 1
