const mobilePhone = [
    {name: "Oppo", ram: 4, price: 25000},
    {name: "vivo", ram: 8, price: 55000},
    {name: "note 10", ram: 4, price: 75000},
    {name: "iphone", ram: 4, price: 102000},
    {name: "redmi", ram: 4, price: 18000},
    {name: "narzo20", ram: 2, price: 13500},
    {name: "realme", ram: 4, price: 18000},
]
let cheappestPhone = mobilePhone[0];
for(const mobile of mobilePhone){
    if(mobile.price < cheappestPhone.price) {
        cheappestPhone = mobile;
    }
}

console.log(cheappestPhone.name);