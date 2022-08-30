function check() {
    let input = document.getElementById("input").value;
    let inputArray = input.split(",");
    console.log(input)
    console.log(inputArray)
    console.log(typeof input)
    console.log(typeof inputArray)
    let result = "";
    if(Number(inputArray[0]) === 50 || Number(inputArray[1]) === 50 || Number(inputArray[0]) + Number(inputArray[1]) ===50){
        result = 'Wealcome';
    } else {
        result = "Get Out";
    }

    document.getElementById("result").innerHTML = result;
}   