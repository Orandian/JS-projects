let video = document.getElementById('video');
let number = 0;

const videos = [
  {
    name: 'You are my Sunshine',
    poster: './img/youaremysunshine.jpg',
    src: './video/youaremysunshine.mp4',
  },
  {
    name: 'Your Name',
    poster: './img/yourname.jpg',
    src: './video/yourname.mp4',
  },
  {
    name: 'Believer',
    poster: './img/believer.jpg',
    src: './video/believer.mp4',
  },
  {
    name: 'Country Roads',
    poster: './img/countryroad.jpg',
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
  if (number == 4) {
    number = 0;
  }

  video.src = videos[number].src;
  video.poster = videos[number].poster;
}

function prev() {
  number--;
  if (number == -1) {
    number = 3;
  }

  video.src = videos[number].src;
  video.poster = videos[number].poster;
}
