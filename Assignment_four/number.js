let btn=document.getElementById('btn');
let output=document.getElementById('outputtext');
var number=[Math.floor(Math.random() * 100)];
console.log(number);
let input=document.getElementById('userInput').value;
let gameStart=true;
var arr = [];
if (gameStart){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const guess = document.getElementById('userInput').value;
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0!');
        input.value = '';
    } else if (guess > 100){
        alert('Please enter a number less than 101!');
        input.value = '';
    }
}
btn.addEventListener('click',function(){
    var x = document.getElementById('userInput').value;
    arr.push(x);
    document.getElementById('prev').innerHTML = arr;
    if(x==number){
        output.innerHTML=` congrats you guess right , your number is ${number}`;
    }
    else if(x < number){
        output.innerHTML="you guess too low!"
    }
    else if(x > number){
        output.innerHTML="you guess too high!"
    }
});
function reset(){
    location.reload();
    input = 0;
    number=[Math.floor(Math.random() * 100)]
}
function hint(){
    if(number>10 && number<90){
        var h1 = number - 10;
        var h2 = h1 + 20;
    }
    else{
        var h1 = number - 5;
        var h2 = h1  + 10;
    }
    alert(`${h1} - ${h2}`);
}