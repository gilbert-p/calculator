const printToView = (tokenArray) => {

    let viewText = "";

    tokenArray.forEach(token => {
        viewText += (token + " ");
    });

    console.log(viewText);
}




let list = ["(", "4", "+", "6", "x", "120", ")"];


//output should be (4 + 6 x 120)
printToView(list);