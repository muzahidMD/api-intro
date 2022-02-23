function loadImg() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImg(data))
}
loadImg()

function displayImg(images) {
    // console.log(images);
    const div = document.getElementById('images');
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    for (const image of images) {
        const p = document.createElement('p');

        p.innerHTML = `
            <img src="${image.url}">
        `;
        div.appendChild(p);


        // console.log(p)
    }

}