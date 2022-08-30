// javascript code for day calculation

const dayList =["Monday", "Tuesday", "Wetnesday", "Thursday", "Friday", "Saturday", "Sunday"];
const date = new Date();
const day = date.getDay();
const today = dayList[day];

document.getElementById("day").innerHTML= `Today is : ${today}.`

// javascript code for time calculation

let hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
let prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand === "PM" && minute===0 && second===0) {
    hour=12;
    prepand=' Noon';}
 else {
    hour;
    prepand=' PM';
}

if(hour === 0 && prepand === "AM" && minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight"
} else {
    hour;
    prepand="AM";  
}

document.getElementById("time").innerHTML = `This Time is : ${hour} : ${minute} : ${second} ${prepand}`;

