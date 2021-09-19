//UI
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title');
const progresscontainer = document.getElementById('progress-container'),
     progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');

//Song Title
const songs = ['sample1','sample2','sample3'];

let songindex = 0;

// console.log(songs[songindex]);

loadsong(songs[songindex]);

//Load Song And Song Title 
function loadsong(song){
    title.innerText = song;

    audio.src = `music/${song}.mp3`;

    cover.src = `img/${song}.jpg`;
}

//Event Listener
playbtn.addEventListener('click',()=>{
    // console.log('abc');

    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
})

//play song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    //play() from audio api
    audio.play();
}

//pause song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    //play() from audio api
    audio.pause();
}

//change song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

//previous song
function previoussong(){
    // console.log('prev');

    songindex--;

    if(songindex < 0){
        songindex = songs.length - 1;
    }

    loadsong(songs[songindex]);
    
    playsong();
}

//next song
function nextsong(){
    // console.log('prev');

    songindex++;

    if(songindex > songs.length - 1){
        songindex = 0;
    }

    loadsong(songs[songindex]);
    
    playsong();
}

//Time/Song Update
function updateprogress(e){
    //method1
    // progress.style.width = `${(audio.currentTime / audio.duration) * 100}` + '%'; //without e

    //method2
    //console.log(this)
    const {duration,currentTime} = e.target;
    //console.log(currentTime)
    const progresspercent = (currentTime / duration) * 100;

    progress.style.width = `${progresspercent}%`;
}

audio.addEventListener('timeupdate',updateprogress);

//Set Progress Bar
function setprogress(e){
    const width = this.clientWidth; //this = e.target
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const duration = audio.duration;

    audio.currentTime = (clickx / width) * duration;
}

//Click On Progress Bar
progresscontainer.addEventListener('click',setprogress);

//Song End
audio.addEventListener('ended',nextsong);



