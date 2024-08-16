for (let index = 0; index < 1; index++) {
    console.log(index);
}

const cars = ['Ferrari', 'Tesla', 'Mercedez']
for (let index = 5; index < cars.length; index++) {
    console.log(cars[index]);
}

for (let car of cars){
    console.log('Carros');
}

//Foreach é vidaaaa
cars.forEach((car, index) => console.log(car, index))