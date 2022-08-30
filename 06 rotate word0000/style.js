// javascript code for date formate

function animate_string() {

    var element = document.getElementById("target");
    var textNode = element.childNodes[0]; // assuming no other children
    console.log(textNode)
    var text = textNode.data;
    console.log(text)

setInterval(() => {
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 150);
}


