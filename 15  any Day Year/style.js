//solved by split mathode 

function getFirstDay() {
    let result = "";
    let input = document.getElementById("inputValu").value ;
    let inputNumber = Number(input);
    let inputArray = input.split("-");
    // console.log(typeof input)
    // console.log(typeof inputNumber)
    
    console.log(inputArray)
    const weakDay = ["SUNDAY", "MONDAY", "TUESDAY", "WETNESDAY", "THURSDAY", "FRIDAY", "SATARDAY" ];
    let d = new Date(input);
    let dString = d.toDateString();
    let dArray = dString.split(" ")
    console.log(dArray)

    if(input === "" || input === 0) {
        result = "Please Input Your Date";
    }else if(inputArray.length < 3 || inputArray.length > 3) {
        result = "Please Enter Full Date";
    }else if(dArray[0] == "Invalid") {
        result = "Please Enter Valid Date";
    }else if(dArray[0] == "Sun") {
        result = weakDay[1];
    }else if(dArray[0] == "Mon") {
        result = weakDay[2];
    } else if(dArray[0] == "Tue") {
        result = weakDay[3];
    }else if(dArray[0] == "Wet") {
        result = weakDay[4];
    }else if(dArray[0] == "Thu") {
        result = weakDay[5];
    }else if(dArray[0] == "Fri") {
        result = weakDay[6];
    }else if(dArray[0] == "Sat") {
        result = weakDay[0];
    }

    

    document.getElementById("getFirstDay").innerHTML = result;
}





// //solved by slice mathode 
// function getFirstDay() {
//     let result = "";
//     let input = document.getElementById("inputValu").value ;
//     // const weakDay = ["SUNDAY", "MONDAY", "TUESDAY", "WETNESDAY", "THURSDAY", "FRIDAY", "SATARDAY" ];
//     let d = new Date(input);
//     let dString = d.toDateString();
//     let dSlice = dString.substring(0, 3);
//     let dArray = dString.split(" ")
//     console.log(dArray)
//     console.log(dSlice)
//     // if(input === "" || input === 0) {
//     //     result = "Please Input Your Date";
//     // }

    

//     // document.getElementById("getFirstDay").innerHTML = result;
// }

