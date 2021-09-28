// UI
const picdiv = document.querySelector('.fill'),
    empties = document.querySelectorAll('.empty');

picdiv.addEventListener('dragstart',dragstart);

picdiv.addEventListener('dragend',dragend);

// Drag Start
function dragstart(){
    this.className += " hold";
    setTimeout(()=>{
        this.className = "invisible";
    },0);
};

// empties.forEach(empty => {
//     empty.addEventListener('dragover',dragover);
//     empty.addEventListener('dragenter',dragenter);
//     empty.addEventListener('dragleave',dragleave);
//     empty.addEventListener('drop',dragdrop);
// });

// ES6 can looping  objects-specific iterator value
for(const empty of empties){
    // console.log(empty);
    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);
};

// numberable property name of an object
// for(const empty in empties){
//      console.log(empty)   
// }

// Drat End
function dragend(){
    this.className = "fill";
}

function dragover(e){
    e.preventDefault();
}

function dragenter(e){
    e.preventDefault();
    this.className += " hovered";
}

function dragleave(e){
    e.preventDefault();
    this.className = "empty";
}

function dragdrop(e){
    // e.preventDefault();
    this.className = "empty";
    this.append(picdiv);
}