let video = document.getElementById('video');
let number = 0;

const videos = [
  {
    name: 'You are my Sunshine',
    src: './video/youaremysunshine.mp4',
  },
  {
    name: 'Your Name',
    src: './video/yourname.mp4',
  },
  {
    name: 'Believer',
    src: './video/believer.mp4',
  },
  {
    name: 'Country Roads',
    src: './video/countryroads.mp4',
  },
];

function play() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function next() {
  number++;
  //   const randomNumber = Math.floor(Math.random() * videos.length);
  if (number == 4) {
    number = 0;
  }

  video.src = videos[number].src;
  video.autoplay = true;
}

function prev() {
  number--;
  //   const randomNumber = Math.floor(Math.random() * videos.length);
  if (number == -1) {
    number = 3;
  }

  video.src = videos[number].src;
  video.autoplay = true;
}
