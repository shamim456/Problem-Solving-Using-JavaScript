function getFactorial() {
    let input = document.getElementById("input").value;
    input = parseInt(input);
    let result = 1;
    console.log(isNaN(input))
    if(isNaN(input)) {
        result= "Please Input Valied Number"
    }else {
        for(i=1; i <= input; i++ ) {
            result *= i;
        }
    }
    document.getElementById("result").innerHTML = result

}

// let input = document.getElementById("input").value;
// input = parseInt(input);
// function getFactorial(inputN) {
//     let result = 1;
//     // if(inputN < 50){
//     //     return "";
//     // }
//     console.log(typeof inputN)
//     document.getElementById("result").innerHTML = getFactorial(input)

// }






// // if(isNaN(input)) {
// //     result= "Please Input Valied Number"
// // }else {
    
// // }

