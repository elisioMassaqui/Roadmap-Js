const newPost = {
    title: 'Novo Post',
    body: 'Corpo do novo post',
    userId: 1
  };
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
      }
      return response.json();
    })
    .then(post => {
      console.log('Post criado:', post);
    })
    .catch(error => console.error('Erro:', error));
  