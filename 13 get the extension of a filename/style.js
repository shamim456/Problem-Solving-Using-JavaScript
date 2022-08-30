let fileName = "style.js";
let getEXT = fileName.split(".").pop();
console.log(getEXT)
document.getElementById("fileExtension").innerHTML = getEXT;