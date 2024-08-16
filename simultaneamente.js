const btn1 = document.querySelector("#btn-1");

function sayHello(other) {
    console.log(`Hello ${other}`);
}

//Abordagem 1, muito rápido pra processos que se seguem
//Mas ótimo pra processos simultaneos
function sayWorld(other) {
    console.log('World');
}

btn1.addEventListener("click", sayHello);
btn1.addEventListener("click", sayWorld);

//Abordagem 2, quase a mesma coisa
const btn2 = document.querySelector("#btn-2")

btn2.addEventListener("click", () => {
    sayHello('Mundoooooooooooooooo')
    sayWorld('Hello')
});