const person = {
    firstName: "Elísio",
    lastName: "Massaqui",
    age: 21,
    hobbies: ['Jogar Futebol', 'Comer', 'Ler'],
    dog: {
        name: "Simon",
        age: 2
    }
}

//const firstName = person.firstName
//const lastName = person.lastName
//const age = person.age 
//const hobbies = person.hobbies

//Mesma coisa que acima só que bem melhor
const {firstName, lastName, age, hobbies} = person

console.log(firstName, lastName, age, hobbies[0])

//person.dog = 'Simon'
console.log(person)

const todos = [
    {
        id: 1,
        description: 'Learn Js',
        isCompleted: false
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true
    }
]

//Pegar lista
console.log(todos);
//Pegar conjunto da lista
console.log(todos[0])
//Pegar propriedade de um conjunto da lista
console.log(todos[2].description);