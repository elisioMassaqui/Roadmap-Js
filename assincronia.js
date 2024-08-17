//Importante pra chamada de API,  porque nao pode ser executados duma vez

const loginUser = (email, senha, callback, onSuccess, onError) => {
    setTimeout(() => {
        const error = false
        if (error) {
            return onError(new Error('Error in login'))
        }
        console.log('user logged');
        callback({email});
    }, 1500);

    console.log('after setTimeout')
}