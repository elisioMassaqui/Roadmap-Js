const nomes = ['Filipe', 'Elisio', 10, !false]
console.log(nomes);

//Acessar indice que vai de uma lista
const joao = nomes[0]
console.log(joao);

//Adicionar um elemento no final
nomes.push("Pedro")
//Adicionar um elemento no inicio
nomes.unshift("01")

console.log(nomes)

//Remover o ultimo item da lista
nomes.pop()
nomes.pop()
nomes.pop()
console.log(nomes)

//Mudar valor
nomes[2] = 'ELISIO'
console.log(nomes)

//Verificar o indice de x elemento
console.log(nomes.indexOf('0'))
console.log(nomes.indexOf('ELISIO'))
console.log(nomes.indexOf('Filipe'))

//Ordenar alfabeticamente
const sortedNames = nomes.sort()
console.log(sortedNames)
console.log(sortedNames.length)

const namesArray = Array.isArray(nomes)
console.log("É array ?: ", namesArray);