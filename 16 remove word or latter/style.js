function positionChange () {
    let input = document.getElementById("inputValu").value;
    let result = "";
    console.log(input)
    if (input.length <= 1) {
        return input;
    } else {
        let revarse = input.substring(1, input.length -1);
        
        console.log(revarse)
        console.log(input.charAt(input.length - 1))
        result = (input.charAt(input.length - 1))     + revarse + input.charAt(0);
    }

    document.getElementById("positionChange").innerHTML = result;
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