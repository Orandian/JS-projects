const app = () => {
    // UI
    const video = document.querySelector('.vid-container video');

    const sounds = document.querySelectorAll('.sound-picker button');

    const song = document.querySelector('.song'),
        play = document.querySelector('.play'),
        outline = document.querySelector('.moving-outline circle');

    const timeDisplay = document.querySelector('.time-display'),
        timeSelect = document.querySelectorAll('.time-select button');

    let fakeDuration = 900;

    // get the length of the outline
    const outlineLength = outline.getTotalLength();

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // pick different song
    sounds.forEach(sound => {
        sound.addEventListener('click',function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        })
    });

    // play song
    play.addEventListener('click',()=>{
        checkPlaying(song);
    });

    // create a function to stop and play the song
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        }else{
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    }

    // select song duration
    timeSelect.forEach(option => {
        option.addEventListener('click', function(){
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
        })
    })

    // we can animate the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let minutes = Math.floor(elapsed / 60);
        let seconds = Math.floor(elapsed % 60);

        // animate the circle
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        // animate the text
        timeDisplay.textContent = `${minutes}:${seconds}`;

        if(currentTime >= fakeDuration){
            song.pause();
            video.pause();
            song.currentTime = 0;
            play.src = './svg/play.svg';
        }
    }
}

app();