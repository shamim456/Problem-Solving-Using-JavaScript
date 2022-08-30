// javascript code for date formate

let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

if (date < 10) {
    date = "0" + date;
}
if (month < 10) {
    month = "0" + month;
}
document.getElementById("date").innerHTML = `Today's Date Is : ${date} - ${month} - ${year}`


