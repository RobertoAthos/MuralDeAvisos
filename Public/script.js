document.addEventListener("DOMContentLoaded", () => {
  updatePost();
});

function updatePost() {
  fetch("http://localhost:3000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);

      let postElements = "";

      let posts = JSON.parse(json);
      posts.forEach((posts) => {
        let postElement = ` <div class="card mb-4" id="${posts.id}">
            <div class="card-header">
                <h5 class="card-title">${posts.title}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">
                    ${posts.description}
                </div>
            </div>
        </div>`;

        postElements += postElement

      });
      document.getElementById('post').innerHTML = postElements
    });
}


function newPost() {
        let title = document.getElementById('title').value
        let description = document.getElementById('descricao').value

        let post = {title, description}

        const options = {
            method: "POST",
            headers: new Headers ({'content-type' : 'application/json'}),
            body: JSON.stringify(post)

        }


        fetch("http://localhost:3000/api/new",options).then(res=>{
            console.log(res)
            updatePost()
            document.getElementById('title').value =""
            document.getElementById('descricao').value =""
        })
}
