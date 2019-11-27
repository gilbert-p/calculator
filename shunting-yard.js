//Example input "4+18/(9-3)"
//Example output "4,18,9,3,−,/,+"

//Input as represented in Token Array
let tokenArray = ["4", "+", "3", "x", "9"];

// let tokenArray = ["4", "x", "18", "+", "9", "-", "3"];

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

const checkIfNumber = input => {
    let input_num = parseInt(input);

    if (!isNaN(input_num)) {
        return true;
    }

    return false;
};

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

    let test_loop = 0;

    // while(test_loop < 3){
    while (temp_tokenArray.length > 0) {


        let currentToken = temp_tokenArray.shift();

        if (checkIfNumber(currentToken)) {
            outputQueue.push(currentToken);
            console.log(`1st Input: ${outputQueue}`);
        } else {

            console.log(`Current operator: ${currentToken}`);

            console.log("current token: " + getPrecedence(currentToken));
            if (operators.length > 0) {

                if (getPrecedence(operators[operators.length - 1]) > getPrecedence(currentToken)) {
                    let op = operators.pop();
                    outputQueue.push(op);

                    //Add token back to beginning of token array
                    temp_tokenArray.unshift(currentToken);
                } else {
                    operators.push(currentToken);
                }
                console.log("stack tail: " + getPrecedence(operators[operators.length - 1]));
            } else {
                operators.push(currentToken);
            }


            // operators.push(currentToken);



        }

        test_loop++;
    }


    while (operators.length > 0) {
        outputQueue.push(operators.pop());
    }

    console.log("TokenArray: ", temp_tokenArray);
    console.log("OperatorStack: ", operators);
    console.log("OutputQueue: ", outputQueue);

    console.log("\n\n\n")
    loop_iterations++;
}




postFix();
// console.log(outputQueue);