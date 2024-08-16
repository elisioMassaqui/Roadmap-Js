let x = 0

console.log('Antes');

setTimeout(function() {
    x += 5
    console.log('Testando Timeout, a cada um segundo');
    console.log(x)
}, 1000)

console.log('Depois');

setInterval(function() {
    console.log('Testando intervalo, a cada um minuto');
}, 10000)