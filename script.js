const URL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const display = document.getElementById('data-display')

async function fetchData(username) {
    let response = await fetch(URL + username);
    let data = await response.json();
    insert(data)
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  let username = e.target[0].value
  e.target[0].value = ""
  fetchData(username)
})

function insert(data) {
  display.innerHTML = `
    <img src=${data.avatar_url} width="200" style="border-radius: 50%;"/>
    <h3 class="my-2">${data.login} ( ${data.name} )</h3>
    <p>${data.bio}</p>
    <p>Followers : ${data.followers}</p>
    <p>Following : ${data.following}</p>
    <p>Repositories : ${data.public_repos}</p>
    <a href=${data.html_url}?tab=repositories target="_blank" class="btn btn-outline-primary">View repositories</a>
  `
}
