function converter () {
    let temparetureInput = document.getElementById("input").value ;
    let temparetureInputSlice = temparetureInput.substr(0, (temparetureInput.length)-1)
    let result = 0
   
    if(temparetureInput.includes("F")) {
        function convertToCel(fahrenheit) {
            result = (fahrenheit - 32) * 5/9;
        }
        convertToCel(Number(temparetureInputSlice))
    }else if (temparetureInput == 0) {
        result = "Please Input Tempareture"
    }else if (temparetureInput !== Number) {
        result = "Please Input Vlaid Number"
    } else{
        result = "Extrension Needed F/C";
    }

    if(temparetureInput.includes("C")) {
        function convertToFar(celcius) {
            result = (celcius * 9/5) + 32 + " " + "fahrenheit";
        }  
        convertToFar(Number(temparetureInputSlice))
    }
    
    
    document.getElementById("result").innerHTML = result;   
}
