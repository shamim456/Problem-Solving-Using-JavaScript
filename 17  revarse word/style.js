function positionChange () {
    let input = document.getElementById("inputValu").value;
    let inputArray = input.split("");
    
    
    inputArray.reverse();
    if (input.length <= 1) {
        return input;
    } else {
        document.getElementById("positionChange").innerHTML = inputArray;
    }

    
}

// function first_last(str1) {
  
//   if (str1.length <= 1)
//   {
//     return str1;
//   }
//   mid_char = str1.substring(1, str1.length - 1);
//   
//   return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));