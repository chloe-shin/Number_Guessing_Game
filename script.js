
//Activate Guess Number Button
let guessButton = document.getElementById("guess")
guessButton.addEventListener("click", guess);

//Get Random Number
let random = Math.floor((Math.random() * 100) + 1);
console.log("random number is", random)



//Function for Empty Input Box
function emptyGuessNumber() {
    document.getElementById('guessNumber').value = "";
}

//Function to Start Guess Number Game

let history = [];
const maxGuesses = 5;

function guess() {
    //Let Guess Number to be The Value from Input Box Data
    let guessNumber = document.getElementById("guessNumber").value;
    let historyList = document.getElementById("historyList");

    //Track History Numbers
    if (history.includes(guessNumber)) {
        document.getElementById("historyList").innerHTML = `Number you've already tried : ${history}`;
        alert(`Oops, you already tried this number.`);
        return;
        // console.log("here",history);
        // let str = "here"+history+"end";
        // innerHTML = `  ${  } `;
    }

    history.push(guessNumber);
    console.log("here", history);

    //Check the Number 
    if (guessNumber > random) {

        document.getElementById("alert").setAttribute('class', 'alert alert-danger')
        document.getElementById("alert").innerHTML = "It's smaller than " + guessNumber

    } else if (guessNumber < random) {

        document.getElementById("alert").setAttribute('class', 'alert alert-danger')
        document.getElementById("alert").innerHTML = "It's bigger than " + guessNumber
    } else {
        document.getElementById("alert").setAttribute('class', 'alert alert-success')
        document.getElementById("alert").innerHTML = "Good job, you got it! " + guessNumber
    }

    //EmptyTheInputBox
    emptyGuessNumber();

    // Check to see how many times we guessed.
    if (history.length >= maxGuesses) {
        // LET YOU KNOW THAT YOU LOST
        alert('Sorry.... but you are a loser! Click "Strart Again" button to restart');
        stopTimer();
    }
    console.log("history length ok", history.length);
    console.log("history.length not ok", history.length);
    let chancesLeft = document.getElementById("chancesLeft")
    document.getElementById("chancesLeft").innerHTML = `You have ${maxGuesses - history.length} chances left`;
}




//*Tried to make start timer button but dont know how*
// let startButton = document.getElementById("start");
// startButton.addEventListener("click", timeCounting)
//


let time = 60;
let myTime;

function timeCounting() {
    myTime = setInterval(function () {
        time -= 1
        document.getElementById("time").innerHTML = `Remaining Time : ${time}`;

        if (time == 0) {
            stopTimer();
            document.getElementById("time").innerHTML = `Sorry, time is out! Game is over`
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(myTime);
}

//Call Timer Function
timeCounting()

//Reset Game

let ResetButton = document.getElementById("reset")
ResetButton.addEventListener("click", resetGame)


function resetGame() {
    //Initialize Variable 
    random = Math.floor((Math.random() * 100) + 1);
    history = [];
    time = 60;
    document.getElementById("alert").setAttribute('class', 'alert alert-primary');
    document.getElementById("alert").innerHTML = `Guessing game is restarted, good luck!`;
    document.getElementById("time").innerHTML = ``
    emptyGuessNumber();
    //Re-call Timer Function
    timeCounting();
}

