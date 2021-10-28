var sport_name = [
	"cricket",
	"baseball",
	"volleyball",
	"hockey",
	"skiing",
	"soccer",
	"judo",
	"badminton",
	"tennis",
	"golf",
	"swimming",
	"boxing",
	"pool",
	"football"
]

let result = '';
let wrongChoice = 6;
let Count = 0;
let gussedVariable = [];
let status = null;

function randomWord() {
  result = sport_name[Math.floor(Math.random() * sport_name.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  gussedVariable.indexOf(chosenLetter) === -1 ? gussedVariable.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (result.indexOf(chosenLetter) >= 0) {
    gussedVariableWord();
    checkIfGameWon();
  } else if (result.indexOf(chosenLetter) === -1) {
    Count++;
    updateCount();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './image/' + Count + '.jpg';
}

function checkIfGameWon() {
  if (status === result) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (Count === wrongChoice) {
    document.getElementById('wordSpotlight').innerHTML = 'The result was: ' + result;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function gussedVariableWord() {
  status = result.split('').map(letter => (gussedVariable.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = status;
}

function updateCount() {
  document.getElementById('Count').innerHTML = Count;
}

function reset() {
  Count = 0;
  gussedVariable = [];
  document.getElementById('hangmanPic').src = 'image/0.jpg';

  randomWord();
  gussedVariableWord();
  updateCount();
  generateButtons();
}

document.getElementById('wrongChoice').innerHTML = wrongChoice;

randomWord();
generateButtons();
gussedVariableWord();