//Example input "4+18/(9-3)"
//Example output "4,18,9,3,−,/,+"

//Input as represented in Token Array
let tokenArray_2 = ["(","5", "+", "3", ")", "x", "3"];
let tokenArray = ["(","3","x","4","/","(","2", "+","5",")",")"];
let tokenArray_3 = ["4", "+", "18", "/", "(", "9", "-", "3", ")"];

// let tokenArray = ["4", "x", "18", "+", "9", "-", "3"];

let expected_output = ["4", "18", "9", "3", "-", "/", "+"];

let operators = [];
let outputQueue = [];

let precedenceArray = [];
precedenceArray["+"] = 2;
precedenceArray["-"] = 2;
precedenceArray["x"] = 3;
precedenceArray["/"] = 3;
precedenceArray["%"] = 3;
precedenceArray["("] = 1;
precedenceArray[")"] = -1;

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


const postFix = () => {
    let result = "";
    //output queue does not contain the parentheses operators
    let output_length = tokenArray.length;
    let temp_tokenArray = [...tokenArray];
    let loop_iterations = 0;

    let test_loop = 0;

    // while(test_loop < 10){
    while (temp_tokenArray.length > 0) {


        let currentToken = temp_tokenArray.shift();

        if (checkIfNumber(currentToken)) {
            outputQueue.push(currentToken);
            console.log(`1st Input: ${outputQueue}`);
        } else {



            if(currentToken == "("){
                operators.push(currentToken);
            }
            else if(currentToken == ")"){

                //Edge case: check whether or not the user inputted a left bracket in the first place.
                while(operators[operators.length -1] != "("){
                    let op = operators.pop();
                    outputQueue.push(op);
                }
                //pop left bracket
                operators.pop();

            }
            else {

                if (operators.length > 0) {

                        if (getPrecedence(operators[operators.length - 1]) > getPrecedence(currentToken)) {
                            let op = operators.pop();
                            outputQueue.push(op);
        
                            //Add token back to beginning of token array
                            temp_tokenArray.unshift(currentToken);

                        } else {
                            operators.push(currentToken);
                        }

 
                } else {
                    operators.push(currentToken);
                }
            }

            console.log("outputQueue:");
            console.log(outputQueue);
            console.log("operators:");
            console.log(operators);
            console.log("\n\n\n");

        }
        test_loop++;
    }


    //pop off any remaining operators after iterating token array
    while (operators.length > 0) {
        outputQueue.push(operators.pop());
    }

    console.log("Final Output: ");
    console.log(outputQueue);

    // console.log("TokenArray: ", temp_tokenArray);
    // console.log("OperatorStack: ", operators);
    // console.log("OutputQueue: ", outputQueue);

    // console.log("\n\n\n");
}




postFix();
// console.log(outputQueue);
