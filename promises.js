const myPromise = new Promise((resolve, reject) => {
    const nome = 'Elisio'

    if (nome === 'Elisio') {
        resolve("Usuário Encontrado")
    }else{
        reject("Usuario não encontrado")
    }
})

myPromise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 Ok')
})

console.log(p3);

const p4 = new Promise((resolve, reject) => {
    console.log('P4 Ok')
})
console.log(p4);

const p2 = new Promise((resolve, reject) => {
    resolve('P2 Ok')
})
console.log(p2);

const resolveAll = Promise.all([p2, p3, p4]).then(([data, p2]) => {
    console.log(resolveAll);
    console.log(data);
    console.log(p2);
})

const userName = 'elisioMassaqui'
fetch(`https//api.github.com/user/${userName}`, {
    method: "GET",
    Accept: {
        headers: 'aplication/vnd.github.v3+json'
    }
}).then((data) => {
    console.log(data);
    return data.json
}).then((data) => {
    console.log(data);
}).catch((erro) => {
    console.log('Aconteceu algum erro: ' + erro);
})