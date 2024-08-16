const myPromise = new Promise((resolve, reject) => {
    const nome = 'Elisio'
    
    if (nome === 'Elisio') {
        resolve(`Usuário "${nome}" Encontrado`)
    } else {
        reject(`Usuário "${nome}" Não Encontrado`)
    }
})

myPromise.then((data) => {
    console.log("Resultado", data)
})

//Encadeamento de then´s

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Elisio'
    
    if (nome === 'Elisio') {
        resolve(`Usuário "${nome}" Encontrado`)
    } else {
        reject(`Usuário "${nome}" Não Encontrado`)
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringmodificada) => {
    console.log(stringmodificada)
})

// Retorno do catch 

const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Eli'
    
    if (nome === 'Elisio') {
        resolve(`Usuário "${nome}" Encontrado`)
    } else {
        reject(`Usuário "${nome}" Não Encontrado`)
    }
})

myPromise3.then((data) => {
    console.log("Resultado", data)
}).catch((erro) => {
    console.log('Aconteceu um erro: ' + erro)
})

// Promessas, recursos de resolver várias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok')
    }, 200)
}) 

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok')
}) 

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok')
}) 

const resolverTudo = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('fora do fork')

