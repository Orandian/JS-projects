//UI
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

password.addEventListener('input',(e)=>{
    const input = e.target.value;
    const inlength = input.length;

    const blurvalue = 20 - (inlength * 2);

    background.style.filter = `blur(${blurvalue}px)`;
});

eyeicon.addEventListener('click',()=>{
    if(eyeicon.classList.contains('fa-eye-slash')){
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
        password.setAttribute('type','text');
    }else{
        eyeicon.classList.replace('fa-eye','fa-eye-slash');
        password.setAttribute('type','password');
    }
});