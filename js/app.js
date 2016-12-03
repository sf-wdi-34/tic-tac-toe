console.log('yay');

//wait for the DOM to finish loading
$(document).ready(function() {

  //assign symbols to players
  $('#x').on('click', function() {
    var playerOne = 'x';
    var playerTwo = 'o';
  });
  $('#o').on('click', function () {
    var playerOne = 'o';
    var playerTwo = 'x';
  });

  //determine who goes first
  if (playerOne) {
    var turn = randomlychoose(playerOne or playerTwo);
    if (turn === playerOne) {
      $('#message').text('<h3>You go first Player One!</h3>');
    } else {
      $('#message').text('<h3>You go first Player Two!</h3>');
    }
  });

  //event listener for player to click
  var allBoxes = $('.column');
  allBoxes.on('click', addSymbol);

});

// assign symbol to X and symbol to O

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
      allBoxes.eq().addClass("x-image");
    } else {
      allBoxes.eq().addClass("o-image");
    }
    changeTurn(playerOne);
    $('#message').text('<h3>Your turn Player Two!</h3>');
  //else message you can't do that
}

function playerTwoSymbol() {
  //if box is empty then:
    if (playerTwo === 'x') {
      allBoxes.eq().addClass("x-image");
    } else {
      allBoxes.eq().addClass("o-image");
    }
    changeTurn(playerTwo);
    $('#message').text('<h3>Your turn Player One!</h3>');
  //else message you can't do that
}

//function to know when someone has won

//form to input names, so it addresses Amber instead of player 1
