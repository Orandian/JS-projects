// UI
const toggle = document.querySelector('.toggle');

const hourel = document.querySelector('.hour'),
    minuteel = document.querySelector('.minute'),
    secondel = document.querySelector('.second');

const timeel = document.querySelector('.time'),
    dateel = document.querySelector('.date');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML = `
            <i class="fas fa-moon"></i> Dark Mode
        `;
    }else{
        html.classList.add('dark');
        e.target.innerHTML = `
            <i class="fas fa-sun"></i> Light Mode
        `;
    };
});

function settime(){
    const date = new Date();

    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    const hours = date.getHours();
    const hoursforclock = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    // console.log(month);
    // Method 1
    // setrotation(hourel, hours/12);
    // setrotation(minuteel, minutes/60);
    // setrotation(secondel,seconds/60);

    // Method 2
    hourel.style.transform = `
        translate(-50%, -100%) rotate(${scale(hoursforclock,0,12,0,360)}deg)
    `;

    minuteel.style.transform = `
        translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)
    `;

    secondel.style.transform = `
        translate(-50%, -100%) rotate(${scale(seconds,0,60,0,360)}deg)
    `;

    timeel.innerText = `
        ${hoursforclock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}
    `;

    dateel.innerHTML = `
        ${days[day]}, ${months[month]} <span class="circle">${today}</span>
    `
}

// function setrotation(needle, rotation){
//     needle.style.setProperty('--rotation', rotation * 360);
// };

const scale = (num, inmin, inmax, outmin, outmax)=>{
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
};

settime();

setInterval(settime, 1000);