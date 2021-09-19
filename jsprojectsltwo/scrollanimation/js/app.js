//UI
const boxes = document.querySelectorAll('.box');

function checkboxes(){
    const innerheight = window.innerHeight / 5 * 4;
    // console.log(innerheight);

    boxes.forEach(box => {
        // console.log(box);

        const boxtop = box.getBoundingClientRect().top;
        // console.log(boxtop);

        if(boxtop < innerheight){
            box.classList.add('show')
        }else{
            box.classList.remove('show');
        }
    });
}
checkboxes();

window.addEventListener('scroll',checkboxes);