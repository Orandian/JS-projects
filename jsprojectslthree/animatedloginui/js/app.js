//UI
const loginsection = document.querySelector('.login'),
    registersection = document.querySelector('.register'),
    forgotsection = document.querySelector('.forgot');

const loginlink = document.querySelector('.login-link'),
    registerlink = document.querySelector('.register-link'),
    forgotlink = document.querySelector('.forgot-link');

const closebtn = document.querySelector('.close');

registerlink.addEventListener('click',()=>{
    loginsection.style.display = "none";
    registersection.style.display = "flex";
});

loginlink.addEventListener('click',()=>{
    registersection.style.display = "none";
    loginsection.style.display = "flex";
});

forgotlink.addEventListener('click',()=>{
    loginsection.style.display = "none";
    forgotsection.style.display = "flex";
});

closebtn.addEventListener('click',()=>{
    forgotsection.style.display = "none";
    loginsection.style.display = "flex";
});