const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/posts"

axios.get(url)
    .then((result) => {
        const posts = result.data
        posts.forEach(post => {
            console.log(`ID: ${post.id}, Title: ${post.title}, Body: ${post.body}`);
        });   
    }).catch((err) => {
        console.error('Error:', err);
        console.log('Request failed');
    });