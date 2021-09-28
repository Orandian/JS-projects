// UI
const panel = document.getElementById('panel');
const ratingcontainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const sendbtn = document.querySelector('.btn');

let selectedrating = 'Satisfied';

ratingcontainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains("rating")){
        removeactive();
        e.target.parentNode.classList.add("active");
        selectedrating = e.target.parentNode.lastElementChild.textContent;
    }else if(e.target.classList.contains('rating')){
        removeactive();
        e.target.classList.add("active");
        selectedrating = e.target.lastElementChild.textContent;
    }
});

function removeactive(){
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove("active");
    }
};

sendbtn.addEventListener('click',()=>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You</strong>
        <strong>Feedback : ${selectedrating}</strong>
        <p>We'll use your feedback to improve our customer support</p> 
    `;
});