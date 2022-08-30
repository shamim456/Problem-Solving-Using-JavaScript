// javascript code for print page

let today = new Date();
let EidDate = new Date(today.getFullYear() + 1 , 4, 21);
let oneDay = 86400000;

if(today.getMonth() == 4 && today.getDate() > 21) {
    EidDate.setFullYear(EidDate.getFullYear()+1);  
}
let left = Math.ceil((EidDate.getTime() - today.getTime()) / (oneDay)) + " Day's Left"
            




document.getElementById("showDay").innerHTML = left;




