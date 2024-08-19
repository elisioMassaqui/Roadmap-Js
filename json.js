fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
        throw new Error("Erro na req: " + response.statusText);
    }
    return response.json();
})
.then(users => {
    console.log(users);
    users.forEach(user => {
        const nome = "Nome: "+ user.name 
        const email = "Email: " + user.email
        const address = "Endereço " + user.address.suite
        
        console.log(nome +'\n' + email +'\n' + address + '\n');
    })
})
.catch(err => console.log(err))