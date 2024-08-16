function sum(a, b = 20) {
    return a + b;
}
console.log(sum(2, 3));

const sumValue = sum(2);
console.log(sumValue);

const sumArrow = (a, b=20) => a + b


const sumArrowValue = sumArrow(30);
console.log(sumArrowValue);

