//Normal
function subtracao(a, b) {
    return a - b;
}
console.log(subtracao(1, 2));

function somar2(a) {
    return a + 2;
}
console.log(somar2(1, 2));



//Arrow 
const somar3 = (a) => {
    return a + 2;
}

const diaMes = () => {
    return new Date().getDate();
}
console.log(diaMes());

//Não precisa dos parenteses na função quando tem apenas um parametro
const somar4 = a => a + 2

//Com mais de 1 parametro
const somar5 = (a, b, c) => a + b + c
console.log(somar5(1, 2, 3));

//Sem parametros
const hora = () => new Date().getHours();
console.log(hora());


function superFun(a, b) {
    let sub = a - b
    sub += - 2
    let diaMes = new Date().getDate()
    return diaMes
}

const SuperArrow = (a, b) => {
    let sub = a - b
    sub += - 2
    let diaMes = new Date().getDate()
    return diaMes
}