// UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');

const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let idx = 0;

rightbtn.addEventListener('click',()=>{
    idx++;
    changeimage();
    resetinterval();
});

leftbtn.addEventListener('click',()=>{
    idx--;
    changeimage();
    resetinterval();
});

function changeimage(){
    if(idx > imgs.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length -1;
    }
    // console.log(idx);

    imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}

function imgrun(){
    idx++;
    changeimage();
}

let interval = setInterval(imgrun, 2000);

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun, 2000);
}

