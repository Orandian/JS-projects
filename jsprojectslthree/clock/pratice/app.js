// for dark and light mode
const toggle = document.querySelector('.toggle');

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
    }
});

// for clock's hands
const hourel = document.querySelector('.hour'),
    minuteel = document.querySelector('.minute'),
    secondel = document.querySelector('.second');

const timeel = document.querySelector('.time'),
    dateel = document.querySelector('.date');

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function settime(){
    const date = new Date();

    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    const hour = date.getHours();
    const hourforclock = hour % 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const ampm = hourforclock >= 12 ? "AM" : "PM";

    // hour, minute and second hands
    setrotation(hourel, hour / 12);
    setrotation(minuteel, minute / 60);
    setrotation(secondel, second / 60);

    // date and time
    timeel.innerHTML = `
        ${hourforclock}:${minute < 10 ? `0${minute}` : minute} ${ampm}
    `;

    dateel.innerHTML = `
        ${days[day]}, ${months[month]} ${today}
    `;
}
function setrotation(needle,rotation){
    needle.style.setProperty("--rotation",rotation * 360)
}

settime();

setInterval(settime, 1000);