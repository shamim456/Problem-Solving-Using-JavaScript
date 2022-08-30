
function isLeapYear() {
    let input =Number(document.getElementById("inputValu").value);
    let result = "";
    
    if(Number.isNaN(input)) {
        result = "Please Input Valid Number";
    } else if ((input % 100) === 0) {
        if((input % 400) === 0) {
            result = `${input} Is Leap Year.`
        } else {
            result = `${input} Is Not Leap Year.`
        }
    } else {
        if((input % 4) === 0) {
            result = `${input} Is Leap Year.` 
        } else {
            result = `${input} Is Not Leap Year.`
        }
    }
    
                                                      
    document.getElementById("isLeapYear").innerHTML = result;
}

