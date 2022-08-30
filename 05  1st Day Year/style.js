function getFirstDay() {
    let result = "";
    let input = Number(document.getElementById("inputValu").value) ;
    const weakDay = ["SUNDAY", "MONDAY", "TUESDAY", "WETNESDAY", "THURSDAY", "FRIDAY", "SATARDAY" ];
    let d = new Date(input, 0, 1);
    if(input === 0 || Number.isNaN(input)) {
        result = "Please Input Number";
    } else if(d.getDay() === 0) {
        result = weakDay[0];
    } else if(d.getDay() === 1) {
        result = weakDay[1];
    } else if(d.getDay() === 1) {
        result = weakDay[2];
    } else if(d.getDay() === 2) {
        result = weakDay[2];
    } else if(d.getDay() === 3) {
        result = weakDay[3];
    } else if(d.getDay() === 4) {
        result = weakDay[4];
    } else if(d.getDay() === 5) {
        result = weakDay[5];
    } else if(d.getDay() === 6) {
        result = weakDay[5];
    }
    

    document.getElementById("getFirstDay").innerHTML = result;
}


