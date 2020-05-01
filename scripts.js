
// Make a function
function letsPlay() {


// ask user to play rock paper scissors
var wannaplay = prompt('Do you want ot play Rock Paper Scissors? Yes: 1 or No 2');

// ask user to play rock paper scissors
var wannaplay = parseInt(prompt('Do you want ot play Rock Paper Scissors? Yes: 1 or No 2'));

// make the game
if (wannaplay === 1) {
	
	// array and its objects inside
	var RPS = [ 'Rock', 'Paper', 'Scissors' ];
	//           0       1         2	
	

	// Ask Later
	 do {

	// ask user how many time they want to play
	var turns = parseInt(prompt('How many times do you want to play?'));

 
	// for statement for the game
	for (var i = 0; i < turns; i++) {

		// ask the user to choose
		var userchoice = parseInt(prompt('Put an according number: Rock (1) Paper (2) Scissors (3)'))--;
		
		// Math.random() -- between 0 and 1
		// *3 --> it going to give you any number between 0 and 2
		// *10 --> 0 to 9
		// Math.floor defines range, whole integers
		
		// computer's turn to choose
		var computerchoice = Math.floor(Math.random() * 3);

		// decision maker
		var decision = userchoice - computerchoice;

		// compare the choices
		// switch is a shortcut to if else statements
		var statement ="User's choice " + RPS[userchoice] + " Computer's Choice " + RPS[computerchoice];
		var winning = statement + " You WIN!!";
		var losing = statement + " You lose!!";
		var tie = statement + "It's a tie!!";


		switch (decision) {
			//tie

			case 0:
				//TODO- convert to template literal to test
				alert(winning);
				break;

			// user pick 1 behind computer
			case 1:
				alert(losing);
				break;

			case 2:
				alert(winning);
				break;

			case -1:
				alert(losing);
				break;

			case -2:
				alert(winning);
				break;
		}
	}
	varplayagain = prompt("Still wanna play?? \^_^/  Yes: (1) or No: (2)");
	varplayagain = parseInt(varplayagain);
	
 }while(varplayagain === 1);
	// Thank you for playing
	alert('Thank you for playing.  You are a gamer!');
}
else {
	// Not a gamer
	alert("You are not a gamer!  I'm sad!");
}
}