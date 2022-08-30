// javascript code for date formate

function calculate() {
    let result = "";
    let sideOne = Number(document.getElementById("sideOne").value);
    let sideTwo = Number(document.getElementById("sideTwo").value);
    let sideThree = Number(document.getElementById("sideThree").value);
    
    let s = (sideOne + sideTwo + sideThree)/2;
    let area =  Math.sqrt(s*((s-sideOne)*(s-sideTwo)*(s-sideThree)));
    
    if (area === 0) {
        result = `Enter Number`
    } else {
        result = area;
    }
    if(result == NaN) {
        result = `Enter Valid Number`
    } else {
        result = area;
    }
    
    document.getElementById("tringleArea").innerHTML = result;
}




