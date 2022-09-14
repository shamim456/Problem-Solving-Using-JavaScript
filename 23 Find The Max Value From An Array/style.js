const numbersArr = [-52, -65, -87, -64, -152];

// Get Max Value
function getMax(numbers) {
    let maxValue =numbersArr[0];
    for(i = 0; i <= numbers.length; i++) {
        const element = numbers[i];
        if(maxValue < element) {
            maxValue = element;
        }
    }
    return maxValue;
    
}
let result = getMax(numbersArr);
console.log(result)

// Get Min Value
function getMin(numbers) {
    let minValue = numbersArr[0];
    for(i = 0; i <= numbers.length; i++) {
        const element = numbers[i];
        if(minValue > element) {
            minValue = element;
        }
    }
    return minValue;
    
}
let result2 = getMin(numbersArr);
console.log(result2)