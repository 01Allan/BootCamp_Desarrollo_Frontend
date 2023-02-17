var valor = 2;

fetch('https://jsonplaceholder.typicode.com/posts/1' + valor, {
    method: 'DELETE',
});

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT', 
    body: JSON.stringify({
        id: 1, 
        title: 'post modificado',
        body: 'este seria un post modificado',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
})

.then((response) => response.json())
.then((json) => console.log(json));