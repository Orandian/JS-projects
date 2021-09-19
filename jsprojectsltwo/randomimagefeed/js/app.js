//UI
const container = document.querySelector('.container');
const url = "https://source.unsplash.com/random/";
const row = 10;

for(let i = 0; i < row * 3; i++){
    const img = document.createElement('img');
    img.src = `${url}${getrandomsize()}`;
    container.appendChild(img);
}

function getrandomnum(){
    return Math.floor(Math.random() * 10) + 300;
}
// console.log(getrandomnum());
function getrandomsize(){
    return `${getrandomnum()}x${getrandomnum()}`;
}