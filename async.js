// É pra funções que vão precisar desse recurso

//Sintaxe

function primeiraFun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Esperou isso aqui");
            resolve();

        }, 2000)
    })
}

 async function segundaFun() {
    console.log('Iniciou');

    await primeiraFun();

    console.log('Terminou');
}

segundaFun()

//Pratico

function pegarUser(id) {
    if (id == 'Elisio') {
        return new Promise (resolve => {
            console.log(`O nome do usuário é ${id}`);
        })
    }
}

//pegarUser('Elisio')

async function chamarAgora(params) {
    try {
        const user = await pegarUser('Elisio')
    console.log(user)
    }
    catch (err) {
        console.error(err);
    }
}
chamarAgora()

console.log('Terminamos a operação anterior')
