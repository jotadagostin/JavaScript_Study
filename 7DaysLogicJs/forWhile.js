// QUESTIONS WITH THE USER USING IF AND WHILE:

const area = prompt("Do you want to follow the area 'Frond-end' or 'Back-end?' Type the name of the area: ");

let language = "";

if(area === "Front-end") {
    language = prompt("Do you want to learn React or Vue?");
} else if (area === "Back-end") {
    language = prompt("Do you want to learn C# or Java?");
} else {
    alert("You did not insert a valid area!");
}

const specialityFullStack = prompt("Type 1 to follow specializing in the chosen area or 2 to keep following and developing to be a FullStack");

if(specialityFullStack == 1) {
    alert(`Continue specializing in ${language} to dominate the area ${area}!`)
} else if(specialityFullStack == 2) {
    alert(`It is time to start learning another languages besides ${language} if you want to become FullStack`)
} else {
    alert("You did not insert a valid value!")
}

let msg = prompt("Is there any tecnology that you would like to learn? Type 'ok' if you would!");

while (msg === "ok") {
    let newTecnology = prompt("Which one?");
    alert(`${newTecnology} is really such a nice tecnology!`)
    msg = prompt("Is there any tecnology that you would like to learn? Type 'ok' if you would!");
}