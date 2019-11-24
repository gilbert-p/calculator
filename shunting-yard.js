//Example input "4+18/(9-3)"
//Example output "4,18,9,3,−,/,+"

//Input as represented in Token Array
let tokenArrayExample = ["4", "+", "18", "/", "9", "-", "3"];
let exampleOutput = ["4", "18", "9", "3", "-", "/", "+"];
let precedence = [];

let operators = [];
let output = [];
let precedence = {
    "+": 0,
    "-": 0,
    "x": 1,
    "/": 1,
    "%": 1,
    "(": 2,
    ")": 2
};

const checkIfNumber = (input) => {
    let input_num = parseInt(input);

    if (isNaN(input_num)) {
        return false;
    }

    return true;
}

//while there are tokenArray has elements
while (tokenArrayExample.length > 0) {

    let currentToken = tokenArrayExample.shift();

    if (checkIfNumber(currentToken)) {
        output.push(currentToken);
    } else {
        operators.push(currentToken);
    }


}

const postFix = () => {
    let result = "";

    while (output.length <= 8) {

        if (operators[operator.length - 1].)
    }
}

console.log(operators);
console.log(output);



console.log(checkIfNumber("+"));