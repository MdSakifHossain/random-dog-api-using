// https://dog.ceo/api/breeds/image/random

const requester = document.getElementById("requester")
const imageHolder = document.getElementById("imageHolder")

requester.onclick = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(responce  => responce.json())
    .then(json => {
      imageHolder.innerHTML = `<img src="${json.message}" />`
    })
}

