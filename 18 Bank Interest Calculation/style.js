const CalculateInterst = () => {
    let inputAmount = document.getElementById("amount").value;
    inputAmount = parseInt(inputAmount);
    
    let year = document.getElementById("year").value;
    year = parseInt(year);

    let interstRate = document.getElementById("interst-rate").value;
    interstRate = parseInt(interstRate);

    let totalAmount =inputAmount + (inputAmount *(interstRate / 100) * year);

    document.getElementById("result").innerHTML= totalAmount;
}
