// javascript code for print page

function getRndInteger(min, max) {
    let input =Number(document.getElementById("inputNumber").value) ;
    let result = ""; 
    let number = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(input)
    if(input === 0 || Number.isNaN(input)) {
        result = "Please Input Number";
    } else if(input === number) {
        result = "Good Work";
    } else {
        result = "Not matched";
    }
    if(input > 10) {
        result = "Please input 1 to 10"
    }

    document.getElementById("random-number").innerHTML = result;
    console.log(number)
  }


