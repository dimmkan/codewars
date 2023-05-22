/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  
  switch(p1) {
      case 'scissors': return p2 === 'paper' ? 'Player 1 won!' : 'Player 2 won!';
      case 'paper': return p2 === 'rock' ? 'Player 1 won!' : 'Player 2 won!';
      case 'rock': return p2 === 'scissors' ? 'Player 1 won!' : 'Player 2 won!';
  }
}