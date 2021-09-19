//UI
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentactive = 1;

//Event Listener
next.addEventListener('click',()=>{
    currentactive++;

    if(currentactive > circles.length){
        currentactive = circles.length;
    }

    // console.log(currentactive);

    update();
});

prev.addEventListener('click',()=>{
    currentactive--;

    if(currentactive < 1){
        currentactive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle,index)=>{
        if(index < currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

        if(currentactive === 1){
            prev.disabled = true;
        }else if(currentactive === circles.length){
            next.disabled = true;
        }else{
            prev.disabled = false;
            next.disabled = false;
        }

        const actives = document.querySelectorAll('.active');
        let act = actives.length -1;
        let cls = circles.length -1;
        // console.log((act/cls)*100);

        progress.style.width = (act / cls) * 100 + '%';
    });
}
