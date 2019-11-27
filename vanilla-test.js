let tokenArray = [];
let currentNumber = "";

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

    const printToView = () => {
        let viewText = "";

        if (currentNumber.length > 0) {

            if (tokenArray.length > 0) {
                tokenArray.forEach(token => {
                    viewText += token + " ";
                });
                viewText += currentNumber;
                document.getElementById("view").innerHTML = viewText;
            } else {
                document.getElementById("view").innerHTML = currentNumber;
            }

        } else {
            tokenArray.forEach(token => {
                viewText += token + " ";
            });
            document.getElementById("view").innerHTML = viewText;
        }




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
            if (btnInput == "add") {
                tokenArray.push(currentNumber);
                tokenArray.push("+");
                currentNumber = "";
            }

            if (btnInput == "subtract") {
                tokenArray.push("-");
                currentNumber = "";
            }

            if (btnInput == "multiply") {

                tokenArray.push("x");
                currentNumber = "";
            }

            if (btnInput == "division") {
                tokenArray.push("/");
                currentNumber = "";
            }

            if (btnInput == "left-parentheses") {
                tokenArray.push("(");
                currentNumber = "";
            }

            if (btnInput == "right-parentheses") {
                tokenArray.push(")");
            }

            if (btnInput == "equals") {
                currentNumber = "";
            }

            if (btnInput == "clear") {
                tokenArray = [];
                currentNumber = "";
            }
        }
        printToView();
    };

    addListeners();
});