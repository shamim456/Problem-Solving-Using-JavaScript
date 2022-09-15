let myString = "Hello, I am Shamim";
let reverseString = "";
for(const latter of myString) {
    reverseString = latter + reverseString ;
}

console.log(reverseString);
