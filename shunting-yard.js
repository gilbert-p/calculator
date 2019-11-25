//Example input "4+18/(9-3)"
//Example output "4,18,9,3,−,/,+"

//Input as represented in Token Array
let tokenArray = ["4", "+", "18", "/", "9", "-", "3"];
let expected_output = ["4", "18", "9", "3", "-", "/", "+"];

let operators = [];
let outputQueue = [];

let precedenceArray = [];
precedenceArray["+"] = 0;
precedenceArray["-"] = 0;
precedenceArray["x"] = 1;
precedenceArray["/"] = 1;
precedenceArray["%"] = 1;
precedenceArray["("] = 0;
precedenceArray[")"] = 0;

const checkIfNumber = (input) => {
    let input_num = parseInt(input);

    if (isNaN(input_num)) {
        return false;
    }

    return true;
}

const getPrecedence = (operator) => {
    let precedence = precedenceArray[operator];
    return precedence;
}



// const separateTokens = () => {
//     let temp_tokenArray = [...tokenArray];

//     //while there are tokenArray has elements
//     while (temp_tokenArray.length > 0) {

//         let currentToken = temp_tokenArray.shift();

//         if (checkIfNumber(currentToken)) {
//             outputQueue.push(currentToken);
//         } else {
//             operators.push(currentToken);
//         }
//     }
// }



const postFix = () => {
    let result = "";
    //output queue does not contain the parentheses operators
    let output_length = tokenArray.length;
    let temp_tokenArray = [...tokenArray];
    let loop_iterations = 0;

    while (outputQueue.length <= output_length) {

        // console.log("def: ", temp_tokenArray);


        //saftey net for testing
        if (loop_iterations > 25) {
            return;
        }

        let currentToken = temp_tokenArray.shift();

        if (checkIfNumber(currentToken)) {
            outputQueue.push(currentToken);
            console.log(`1st Input: ${outputQueue}`);
        } else {
            console.log(`Current operator: ${currentToken}`);

            //if operator stack empty, simply push 
            if (operators.length <= 0) {
                outputQueue.push(currentToken);
                console.log(`Op stack: ${operators}`);
            } else {

                //If precedence in operator stack is higher than current token, push from operator stack.
                if (getPrecedence(operators[operators.length - 1]) > getPrecedence(currentToken)) {
                    console.log("comparing operators: ", operators[operators.length - 1], getPrecedence(currentToken))
                    outputQueue.push(operators[operators.length - 1]);
                } else {
                    operators.push(currentToken);
                }
            }


        }

        console.log("TokenArray: ", temp_tokenArray);
        console.log("OperatorStack: ", operators);
        console.log("OutputQueue: ", outputQueue);

        console.log("\n\n\n")
        loop_iterations++;
    }
}



postFix();
// console.log(outputQueue);