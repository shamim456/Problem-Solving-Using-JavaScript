let first10kmAnimal= 50;
let first10To20kmAnimal= 150;
let after20kmAnimal= 200;

function countAnimal(distance) {
    let totalAnimal = 0;
    if(distance <= 10) {
        totalAnimal = distance * first10kmAnimal;
    }
    if(distance <= 20 && distance > 10) {
        animalCount1To10 = 10 * first10kmAnimal;
        distance10To20 = distance - 10;
        totalAnimal = (first10To20kmAnimal * distance10To20) + animalCount1To10;
    }
    if(distance > 20) {
        animalCount1To10 = 10 * first10kmAnimal;
        animalCount10To20 = 10 * first10To20kmAnimal;
        distance10To20 = distance - 10;
        totalAnimal = (first10To20kmAnimal * distance10To20) + animalCount1To10 + first10To20kmAnimal;
    }

    return totalAnimal;
}

const result = countAnimal(25)
console.log(result)

// 10 km 50 animal
// next 10 km 150 animal
// next road km 200 animal