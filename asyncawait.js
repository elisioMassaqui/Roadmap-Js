const nome = 'elisio'
console.log(nome.toUpperCase());

function primeiraFun() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Esperou isso aqui!');
            resolve();
        }, 1500);
    })
}

 async function segundaFun(params) {
    console.log('Iniciou');
    await primeiraFun();
    console.log("Terminou");
}

segundaFun()

function getUser(id) {
    return fetch( `https//api.github.com/user/${id}`)
    .then(data => data.json())
    .catch(err => console.log(err));
}

async function getUserInfo(id) {
    const user = await getUser(id)
    console.log("O nome do user: " + user.id);
}

getUser(2)