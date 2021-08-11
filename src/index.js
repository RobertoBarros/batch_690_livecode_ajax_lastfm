// API Doc: https://www.last.fm/api/show/artist.getTopAlbums

const api_key = "insira chave aqui";
const baseUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums`

const form = document.querySelector('#search')
const albumsContainer = document.querySelector('#albums-container')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  albumsContainer.innerHTML = '';
  const artistName = document.getElementById('artist').value
  const url = `${baseUrl}&api_key=${api_key}&artist=${artistName}&format=json&limit=5`

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.topalbums.album.forEach((album) => {
        const albumInfo = `<div class="row m-t-1">
                            <div class="col-xs-12">
                              <img src="${album.image[2]['#text']}" class='pull-left m-r-1'>
                              <h2>${album.name}</h2>
                              <p>${album.artist.name}</p>
                            </div>
                          </div>`
        albumsContainer.insertAdjacentHTML('beforeend', albumInfo);
      });
    });
});
