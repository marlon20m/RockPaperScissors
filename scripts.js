// ask user to play rock paper scissors
<<<<<<< HEAD
var wannaplay = prompt(
  "Do you want ot play Rock Paper Scissors? Yes: 1 or No 2"
);
// change input string into int
wannaplay = parseInt(wannaplay);
// array and its objects inside
var RPS = ["Rock", "Paper", "Scissors"];
//           0       1         2
// make the game
if (wannaplay === 1) {
  // ask user how many time they want to play
  var turns = prompt("How many times do you want to play?");
  // change string into a number
  turns = parseInt(turns);
  // for statement for the game
  for (var i = 0; i < turns; i++) {
    // ask the user to choose
    var userchoice = prompt(
      "Put an according number: Rock(1) Paper(2) Scissors(3)"
    );
    // change string input to int
    userchoice = parseInt(userchoice);
    // -1 to match the index number
    // math.random() -- between 0 and 1
    // *3 --> it going to give you any number between 0 and 2
    // *10 --> 0 -9
    userchoice--;
    // computer's turn to choose
    var computerchoice = Math.floor(Math.random() * 3);
    // decision maker
    var decision = userchoice - computerchoice;
    // compare the choices
    // switch is a shortcut to if else statements
    switch (decision) {
      //tie
      case 0:
        alert(
          "User's choice" + " " + RPS[userchoice] +
            " " +
            "Computer's Choice" +
            " " +
            RPS[computerchoice] +
            " " +
            "It's a tie!"
        );
        break;
      // user pick 1 behind computer
      case 1:
        alert(
          "User's choice" +
            " " +
            RPS[userchoice] +
            " " +
            "Computer's Choice" +
            " " +
            RPS[computerchoice] +
            " " +
            "You win!"
        );
        break;
      case 2:
        alert(
          "User's choice" +
            " " +
            RPS[userchoice] +
            " " +
            "Computer's Choice" +
            " " +
            RPS[computerchoice] +
            " " +
            "You lose!"
        );
        break;
      case -1:
        alert(
          "User's choice" +
            " " +
            RPS[userchoice] +
            " " +
            "Computer's Choice" +
            " " +
            RPS[computerchoice] +
            " " +
            "You lose!"
        );
        break;
      case -2:
        alert(
          "User's choice" +
            " " +
            RPS[userchoice] +
            " " +
            "Computer's Choice" +
            " " +
            RPS[computerchoice] +
            " " +
            "You Win!"
        );
        break;
    }
  }
  // Thank you for playing
  alert("Thank you for playing.  You are a gamer!");
} else {
  // Not a gamer
  alert("You are not a gamer!  I'm sad!");
=======
var wannaplay = prompt('Do you want ot play Rock Paper Scissors? Yes: 1 or No 2');

// change input string into int
wannaplay = parseInt(wannaplay);

// make the game
if (wannaplay === 1) {
	// ask user how many time they want to play
	var turns = prompt('How many times do you want to play?');

	// change string into a number
	turns = parseInt(turns);

	// array and its objects inside
	var RPS = [ 'Rock', 'Paper', 'Scissors' ];
	//           0       1         2

	// for statement for the game
	for (var i = 0; i < turns; i++) {
		// ask the user to choose
		var userchoice = prompt('Put an according number: Rock (1) Paper (2) Scissors (3)');

		// change string input to int
		userchoice = parseInt(userchoice);
		// -1 to match the index number

		userchoice--;
		// computer's turn to choose
		// math.random() -- between 0 and 1
		// *3 --> it going to give you any number between 0 and 2
		// *10 --> 0 to 9
		// Math.floor defines range, whole integers
		// Math.random

		var computerchoice = Math.floor(Math.random() * 3);

		// decision maker
		var decision = userchoice - computerchoice;

		// compare the choices
		// switch is a shortcut to if else statements
		var userMessage;
		switch (decision) {
			//tie

			case 0:
				//TODO- convert to template literal to test
				userMessage =
					"User's choice " + RPS[userchoice] + " Computer's Choice " + RPS[computerchoice] + " It's a tie!";
				alert(userMessage);
				break;

			// user pick 1 behind computer
			case 1:
				alert(
					"User's choice" +
						' ' +
						RPS[userchoice] +
						' ' +
						"Computer's Choice" +
						' ' +
						RPS[computerchoice] +
						' ' +
						'You win!'
				);
				break;

			case 2:
				alert(
					"User's choice" +
						' ' +
						RPS[userchoice] +
						' ' +
						"Computer's Choice" +
						' ' +
						RPS[computerchoice] +
						' ' +
						'You lose!'
				);
				break;

			case -1:
				alert(
					"User's choice" +
						' ' +
						RPS[userchoice] +
						' ' +
						"Computer's Choice" +
						' ' +
						RPS[computerchoice] +
						' ' +
						'You lose!'
				);
				break;

			case -2:
				alert(
					"User's choice" +
						' ' +
						RPS[userchoice] +
						' ' +
						"Computer's Choice" +
						' ' +
						RPS[computerchoice] +
						' ' +
						'You Win!'
				);
				break;
		}
	}

	// Thank you for playing
	alert('Thank you for playing.  You are a gamer!');
}
else {
	// Not a gamer
	alert("You are not a gamer!  I'm sad!");
>>>>>>> 70c061eaf71076526b1a14421dfb7ff8de2f0bc6
}
