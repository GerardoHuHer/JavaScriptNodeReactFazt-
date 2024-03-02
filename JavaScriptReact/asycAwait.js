const ul = document.createElement('ul')
const li = document.createElement('li')

let data =  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response){
        return response.json()
    }).then(function(data){
        console.log(data)
        data.forEach(function(post) {
            const li = document.createElement('li')
            li.innerText = post.title
            ul.append(li)
        });
        document.body.append(ul)
    })
console.log(data)