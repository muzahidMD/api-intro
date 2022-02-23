function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}
loadAlbum()
function displayAlbums(albums) {
    const albumcontainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumcontainer.appendChild(p);

    }
}