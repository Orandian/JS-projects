//UI
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

//Add Event Listener

//show nav
toggle.addEventListener('click',() => {
    //console.log("Hello");

    document.body.classList.toggle('show-nav');
});

//show modal
open.addEventListener('click',() => {
    //console.log('signup');

    modal.classList.add('show-modal');
})

//hide modal
close.addEventListener('click', () => {
    //console.log('close');
    modal.classList.remove('show-modal');
})

// window.addEventListener('click',function(e){
//     //console.log(e.target);

//     if(e.target === modal){
//         modal.classList.remove('show-modal');
//     }
// });

//hide modal by clicking opacity
window.addEventListener('click',(e) => e.target === modal ? modal.classList.remove('show-modal') : false);