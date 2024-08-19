fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
        throw new Error("Error na req" + response.statusText);
    }
    return response.json();
})
.then(users => {
    const filterdUsers = users.filter(users => users.name.includes('Leanne'))
    console.log(filterdUsers)
})
.catch(error => console.error(error));