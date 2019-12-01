//Example input "4+18/(9-3)"
//Example output "4,18,9,3,−,/,+"



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


const postFix = (tokenArray) => {
    //output queue does not contain the parentheses operators

    let temp_tokenArray = [...tokenArray];

    let test_loop = 0;

    // while(test_loop < 10){
    while (temp_tokenArray.length > 0) {


        let currentToken = temp_tokenArray.shift();

        if (checkIfNumber(currentToken)) {
            outputQueue.push(currentToken);
        } else {



            if (currentToken == "(") {
                operators.push(currentToken);
            } else if (currentToken == ")") {

                //Edge case: check whether or not the user inputted a left bracket in the first place.
                while (operators[operators.length - 1] != "(") {
                    let op = operators.pop();
                    outputQueue.push(op);
                }
                //pop left bracket
                operators.pop();

            } else {

                if (operators.length > 0) {

                    if (getPrecedence(operators[operators.length - 1]) > getPrecedence(currentToken)) {
                        let op = operators.pop();
                        outputQueue.push(op);

                        //Add token back to beginning of token array
                        temp_tokenArray.unshift(currentToken);

                    } else if (getPrecedence(operators[operators.length - 1]) == getPrecedence(currentToken)) {
                        let op = operators.pop();
                        outputQueue.push(op);

                        //Add token back to beginning of token array
                        temp_tokenArray.unshift(currentToken);
                    } else {
                        console.log("greater precedence: " + currentToken);
                        operators.push(currentToken);
                        console.log(operators);
                    }


                } else {
                    console.log(" push reg token: " + currentToken);
                    operators.push(currentToken);
                }
            }
        }
        test_loop++;
    }


    //pop off any remaining operators after iterating token array
    while (operators.length > 0) {
        outputQueue.push(operators.pop());
    }

    let ans = calculate(outputQueue);
    return ans;

}

const calculate = (post_Fix_list) => {

    let number_stack = [];

    for (let ii = 0; ii < post_Fix_list.length; ii++) {


        if (checkIfNumber(post_Fix_list[ii])) {
            number_stack.push(post_Fix_list[ii]);
        } else if (post_Fix_list[ii].length > 0) {
            //It's an operator

            let op = post_Fix_list[ii];
            let first_input = parseFloat(number_stack.pop());
            let second_input = parseFloat(number_stack.pop());
            let result = 0;

            switch (op) {
                case "+":
                    result = first_input + second_input;
                    number_stack.push(result);
                    console.log("add: " + result);
                    result = 0;
                    break;
                case "-":
                    result = second_input - first_input;
                    number_stack.push(result);
                    console.log("subtract: " + result);
                    result = 0;
                    break;
                case "x":
                    result = first_input * second_input;
                    console.log("multiply before push: " + result);
                    number_stack.push(result);
                    console.log("multiply after push: " + result);
                    console.log(number_stack);
                    result = 0;
                    break;
                case "/":
                    result = second_input / first_input;
                    //If user divided by Zero
                    if (!isFinite(result)) {
                        console.log("You tried to divide by 0");
                        result.push("Infinity");
                        break;
                    }
                    number_stack.push(result);
                    console.log("divide: " + result);
                    result = 0;
                    break;
            }
        }
    }

    //Clear for next input
    outputQueue = [];
    operators = [];
    console.log("outer stack: ");
    console.log(number_stack);
    console.log("answer returned: ", number_stack[0]);
    return number_stack[0];
}


//Input as represented in Token Array
let test_array_1 = ["(", "3", "x", "4", "/", "(", "2", "+", "5", ")", ")"];
let test_array_2 = ["(", "5", "+", "3", ")", "x", "3"];
let tokenArray_3 = ["4", "+", "18", "/", "(", "9", "-", "3", ")"];
let tokenArray_4 = ["4", "/", "2", "x", "3", "+", "1"];
let tokenArray_5 = ["(", "89", "+", "6", ")"];

// postFix(tokenArray_5);