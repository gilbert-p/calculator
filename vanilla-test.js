let tokenArray = [];
let currentNumber = "";

window.addEventListener("DOMContentLoaded", function () {
    let calculatorButtons = document.getElementsByClassName("calcBtn");

    let processInput = function () {

        //'this' is referencing the function it was called from.
        let btnInput = this.id;

        if (btnInput == "add") {
            if (!checkIfEmpty(currentNumber)) {
                tokenArray.push(currentNumber);
            }
            tokenArray.push("+");
            currentNumber = "";
        }

        if (btnInput == "subtract") {
            if (!checkIfEmpty(currentNumber)) {
                tokenArray.push(currentNumber);
            }
            tokenArray.push("-");
            currentNumber = "";
        }

        if (btnInput == "multiply") {
            if (!checkIfEmpty(currentNumber)) {
                tokenArray.push(currentNumber);
            }
            tokenArray.push("x");
            currentNumber = "";
        }

        if (btnInput == "division") {
            if (!checkIfEmpty(currentNumber)) {
                tokenArray.push(currentNumber);
            }
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

            if (!checkIfEmpty(currentNumber)) {
                tokenArray.push(currentNumber);
            }
            currentNumber = "";

        }

        if (checkIfNumber(btnInput)) {
            currentNumber += btnInput;
        }

        printToView();
    }

    const checkIfEmpty = (input) => {
        if (input.length < 1) {
            return true;
        }
        return false;
    }

    const checkIfNumber = (input) => {
        let input_num = parseInt(input);

        return input_num;
    }

    const printToView = () => {

        let viewText = "";

        tokenArray.forEach(token => {
            viewText += (token + " ");
        });

        document.getElementById("view").innerHTML = viewText;
    }

    let addListeners = function () {
        for (let ii = 0; ii < calculatorButtons.length; ii++) {
            calculatorButtons[ii].onclick = processInput;
        }

    }


    addListeners();


});