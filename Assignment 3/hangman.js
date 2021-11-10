var sport_name = [//name of sports name
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

let result = '';                       //result
let wrongChoice = 6;                  //different choices
let Count = 0;
let gussedVariable = [];             //the sports name you want to guess
let status = null;                  //initially keep status null

function randomWord() {
  result = sport_name[Math.floor(Math.random() * sport_name.length)]; // this function generate name of sports randomly
}

function generateButtons() {
<<<<<<< Updated upstream
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>//create generate function
=======
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => //this will generate buttons from a to z
>>>>>>> Stashed changes
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

  if (result.indexOf(chosenLetter) >= 0) {   //here is the condition by which we can check,update count of choosing a word
    gussedVariableWord();
    checkIfGameWon();
  } else if (result.indexOf(chosenLetter) === -1) {
    Count++;
    updateCount();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {   //this function update the hangman pic
  document.getElementById('hangmanPic').src = './image/' + Count + '.jpg';
}

function checkIfGameWon() {            //this function check , the gamer win or not
  if (status === result) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {     //check the if the game lost or not
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
  document.getElementById('Count').innerHTML = Count; //this will update the count of wrong choices
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

randomWord(); // here we call the different function
generateButtons();
gussedVariableWord();