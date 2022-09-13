// const Numbers = [15, 26, 58, 98, 14, 36, 78]
// let result = 0;
// for(Number of Numbers) {
//     result += Number;
// }
// console.log(result)

const Numbers = [15, 26, 58, 98, 14, 36, 78]
function getSum (NumbersArray) {
    let result = 0;
    for(i=0; i < NumbersArray.length; i++){
        const element = NumbersArray[i];
        result = result + element; 
    }
    return result;
}
let total = getSum(Numbers)
console.log(total)
