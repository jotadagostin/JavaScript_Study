// GUESSING THE NUMBER:

const guessNumber = 7;
let guess = "";
let correct = false;

for(let counter = 0; counter < 3; counter++) {
    guess = prompt("Try to guess the number between 0 to 10: ");

    if (guess == guessNumber) {
        alert(`Congratulations, you got the number! The number is ${guessNumber}`);
        correct = true;
        break;
    } else {
        alert("Wrong!");
    }

}

if (!correct) {
    alert(`Unfortunatly, you didn't got the number. The number is ${guessNumber}`);
}

// '!' makes the variable become true and thus triggering the contents of the if. Note that at the beginning of the code the variable 'correct' was given as being false! THE '!' changes false to true and true to false.