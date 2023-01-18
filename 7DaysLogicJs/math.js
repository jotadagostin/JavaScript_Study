// MATH OPERATORS WITH FUNCTIONS:

function sum(value1, value2) {
    return Number(value1) + Number(value2);
}

function subtraction(value1, value2) {
    return Number(value1) - Number(value2);
}

function multiplication(value1, value2) {
    return Number(value1) * Number(value2);
}

function division(value1, value2) {
    return Number(value1) / Number(value2);
}

let value1;
let value2;
let operation = "";

//Using 'do..while' since that it's the first time that we will always get in:

do {
    operation = prompt("Which operation do you want to do? Answer with 'sum', 'subtraction', 'multiplication', 'division' or 'leave'.");
    while(operation != "sum" && operation != "subtraction" && operation != "multiplication" && operation != "division" && operation != "leave") { //while the text read is different from "sum", "subtraction", "multiplication", "division" and "exit", display that it was not recognized and ask again 
    alert('Operation not recognized')
    operation = prompt("Which operation do you want to do?  Answer with 'sum', 'subtraction', 'multiplication', 'division' or 'leave'.")
    }
    
    if (operation === "leave") { //if the text read is "leave", get out of the loop and calculator
        break;
    }

    value1 = prompt('Fill the first value: ')
    value2 = prompt('Fill the second value: ')

    switch(operation) {
        case 'sum':
            alert(`Result of the ${operation} is ${sum(value1, value2)}`);
            break;
        case 'subtraction':
            alert(`Result of the ${operation} is ${subtraction(value1, value2)}`);
            break;
        case 'multiplication':
            alert(`Result of the ${operation} is ${multiplication(value1, value2)}`);
            break;
        case 'division':
            alert(`Result of the ${operation} is ${division(value1, value2)}`);
            break;
        
    }
    
} while(operation === "sum" || operation === "subtraction" || operation === "multiplication" || operation === "division")
alert("See you next time!");