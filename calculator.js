// const calculate_input = require('./shunting-yard');

let tokenArray = [];
let currentNumber = "";
let result = 0;

window.addEventListener("DOMContentLoaded", function () {
    let calculatorButtons = document.getElementsByClassName("calcBtn");

    const checkIfEmpty = input => {
        if (input.length < 1) {
            return true;
        }
        return false;
    };

    const checkIfNumber = input => {
        let input_num = parseInt(input);

        if (!isNaN(input_num)) {
            return true;
        }

        return false;
    };

    const input_exists = (input) => {
        return (input.length > 0) ? true : false;
    }


    const printToView = () => {
        let viewText = "";


        if (currentNumber.length > 0) {

            if (tokenArray.length > 0) {
                tokenArray.forEach(token => {
                    viewText += token + " ";
                });
                viewText += currentNumber;
                document.getElementById("txt-view").innerHTML = viewText;
            } else {
                document.getElementById("txt-view").innerHTML = currentNumber;
            }

        } else {
            tokenArray.forEach(token => {
                viewText += token + " ";
            });
            document.getElementById("txt-view").innerHTML = viewText;
        }

        console.log("printing");
        console.log(tokenArray);
    };

    let addListeners = function () {
        for (let ii = 0; ii < calculatorButtons.length; ii++) {
            calculatorButtons[ii].onclick = processInput;
        }
    };

    let processInput = function () {
        //'this' is referencing the function it was called from.
        let btnInput = this.id;

        if (checkIfNumber(btnInput)) {
            console.log("true");
            currentNumber += btnInput;
            printToView();

        } else {
            if (btnInput == "dot") {
                // result = 0;
                if (input_exists(currentNumber)) {
                    // tokenArray.push(currentNumber);
                    // tokenArray.push("+");
                    currentNumber += ".";
                } else {
                    currentNumber = "";
                }
            }

            if (btnInput == "add") {
                result = 0;
                if (input_exists(currentNumber)) {
                    tokenArray.push(currentNumber);
                    tokenArray.push("+");
                } else {
                    tokenArray.push("+");
                }

                currentNumber = "";
            }

            if (btnInput == "subtract") {
                result = 0;
                if (input_exists(currentNumber)) {
                    tokenArray.push(currentNumber);
                    tokenArray.push("-");
                } else {
                    tokenArray.push("-");
                }

                currentNumber = "";
            }

            if (btnInput == "multiply") {
                result = 0;
                if (input_exists(currentNumber)) {
                    tokenArray.push(currentNumber);
                    tokenArray.push("x");
                } else {
                    tokenArray.push("x");
                }

                currentNumber = "";
            }

            if (btnInput == "division") {
                result = 0;
                if (input_exists(currentNumber)) {
                    tokenArray.push(currentNumber);
                    tokenArray.push("/");
                } else {
                    tokenArray.push("/");
                }

                currentNumber = "";
            }

            if (btnInput == "left-parentheses") {

                tokenArray.push("(");
            }

            if (btnInput == "right-parentheses") {
                if (checkIfNumber(currentNumber)) {
                    tokenArray.push(currentNumber);
                    currentNumber = "";
                }

                tokenArray.push(")");
            }

            if (btnInput == "equals") {
                result = 0;
                console.log("equals");
                tokenArray.push(currentNumber);
                result = postFix(tokenArray);
                tokenArray = [];
                tokenArray.push(result);
                result = 0;
                currentNumber = "";
            }

            if (btnInput == "clear") {
                tokenArray = [];
                currentNumber = "";
                result = 0;
            }
        }
        printToView();
    };

    addListeners();
});