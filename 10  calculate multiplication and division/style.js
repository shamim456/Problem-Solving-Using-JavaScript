// javascript code for print page

function multiplication () {
    let inputOne = Number(document.getElementById("inputOne").value) ;
    let inputTwo = Number(document.getElementById("inputTwo").value) ;
    let result = "";

    if(inputOne === 0 || inputTwo === 0 ) {
        result = "Iput Field Is Blank";
    }else if(Number.isNaN(inputOne) || Number.isNaN(inputTwo)) {
        result = "Invalid Number"
    } else{
       result =  (inputOne * inputTwo);
    }

    

    document.getElementById("calculation-result").innerHTML= result;
}
function devision () {

    let inputOne = Number(document.getElementById("inputOne").value) ;
    let inputTwo = Number(document.getElementById("inputTwo").value) ;
    let result = "";  

    if(inputOne === 0 || inputTwo === 0 ) {
        result = "Iput Field Is Blank";
    }else if(Number.isNaN(inputOne) || Number.isNaN(inputTwo)) {
        result = "Invalid Number"
    } else{
       result =  (inputOne / inputTwo);
    }
    

    document.getElementById("calculation-result").innerHTML= result;
}





