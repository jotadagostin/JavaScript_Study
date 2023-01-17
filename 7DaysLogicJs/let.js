// ASKING SOME QUESTIONS WITH THE USER:

const firstName = prompt("What's your name?");
const age = prompt("How old are you?");
const language = prompt("Which Language are you studying now?");
const msg = `Hello ${firstName}, you are ${age} years old and you are learning ${language}! You rock!`

alert(msg);

const like = prompt(`Do you like to study ${language}? Answer with the number 1 -YES or 2- NO!`);

if (like == 1) {
    alert("Awesome! Keep studying and you will have much sucess");
} else {
    alert("That's bad...Did you try another language?");
}