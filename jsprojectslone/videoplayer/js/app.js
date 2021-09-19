//UI
const video = document.getElementById('video');

const play = document.getElementById('play'),
    stop = document.getElementById('stop'),
    progress = document.getElementById('progress'),
    timestamp = document.getElementById('timestamp');

//Play & Pause video
function togglevideostatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//update play/pause icon
function updateplayicon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Update Progress & Timestamp
function updateprogress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //get the minutes
    let mins = Math.floor(video.currentTime / 60);

    if(mins < 10){
        mins = '0' + String(mins);
    }

    //get seconds
    let secs = Math.floor(video.currentTime % 60);

    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

//Stop Video
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}

//Set Video Time To Progress
function setvideoprogress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('pause',updateplayicon);
video.addEventListener('play',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);

stop.addEventListener('click',stopvideo);

progress.addEventListener('click',setvideoprogress);