const post = [
    {title : "Post One", body: 'this is post one'},
    {title : "Post One", body: 'this is post one'},
    {title : "Post One", body: 'this is post one'}
]

function getPost(){
    setTimeout(() => {
        let output = "";
        post.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 4000);
}

getPost()