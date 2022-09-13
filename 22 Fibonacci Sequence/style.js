function getFibonacci() {
    let InputNumber = document.getElementById("input").value;
    InputNumber = parseInt(InputNumber);
    let fibo = [1, 2];
    if(isNaN(InputNumber)){
        fibo = "Please Input Valid Number"
    }else if(InputNumber <= 2){
        fibo = "Please Input Number Greater Than 2"
    }else{
        for(i = 2; i < InputNumber; i++) {
            let calculate = fibo[i-1] + fibo[i-2];
            fibo.push(calculate)
        }
    }
    document.getElementById("result").innerHTML = fibo;
}



