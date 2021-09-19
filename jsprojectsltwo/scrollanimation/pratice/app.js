//Ui
const boxes = document.querySelectorAll('.box');

function checkboxes(){
    const innerHeight = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;

        if(boxtop < innerHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}
checkboxes();

window.addEventListener('scroll',checkboxes);