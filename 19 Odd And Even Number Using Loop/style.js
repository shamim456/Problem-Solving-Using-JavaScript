
function getEvenNumber() {
    function getEven () {
        let  inputN = document.getElementById("input").value ;
        inputN = parseInt(inputN);
        // console.log(isNaN(inputN) )
        const result = [];

        if(isNaN(inputN)) {
                return "Please Input Valid Number"
        }else{
            for(let i = 1; i <= inputN; i++) {
                i = i + 1;
                result.push(i);
            }
            return result;
        }
    }
    document.getElementById("result").innerHTML = getEven();
}



