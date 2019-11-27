const printToView = (tokenArray) => {

    let viewText = "";

    tokenArray.forEach(token => {
        viewText += (token + " ");
    });

    console.log(viewText);
}

const checkIfNumber = input => {
    let input_num = parseInt(input);

    if (!isNaN(input_num)) {
        return true;
    }

    return false;
};




let list = ["(", "4", "+", "6", "x", "120", ")"];


//output should be (4 + 6 x 120)
// printToView(list);

console.log(checkIfNumber("a"));
// console.log(typeof 4);