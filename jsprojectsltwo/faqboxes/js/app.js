const gettoggles = document.querySelectorAll('.fas-toggle');

gettoggles.forEach(toggle => {
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active');
    })
})