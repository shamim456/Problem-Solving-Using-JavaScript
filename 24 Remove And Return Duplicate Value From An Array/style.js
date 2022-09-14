// remove Duplicalte value
const NumbersArr = [52, 65, 78, 52, 65, 78, 57, 72, 102];
function removeDuplicate(numbers) {
    const result = [];
    for(i = 0; i<= (numbers.length - 1); i++) {
        const element = numbers[i];
        if(result.indexOf(element) == -1) {
            result.push(element);
        }
    }
    return result;
}

const newArray = removeDuplicate(NumbersArr);
console.log(newArray)


// Return Duplicate Value

function returnDuplicate() {
    const NumbersArr = [52, 65, 78, 52, 65, 78, 57, 72, 102, 72];
    const duplicateN = NumbersArr.filter((value, index, array) => {
        return (NumbersArr.indexOf(value) !== index)
    })
    return duplicateN;
}

const DuplicalteNumber = returnDuplicate();
console.log(DuplicalteNumber)

