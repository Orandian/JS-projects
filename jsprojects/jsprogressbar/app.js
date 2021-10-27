const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('section');

const animatedBar = () => {
    let scrollBar = -section.getBoundingClientRect().top;
    let progressWidth = (scrollBar / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100 ;
    let value = Math.floor(progressWidth);
    progressBar.style.width = `${value}%`;

    if(value < 0) {
        progressBar.style.width = '0%';
    }
}

window.addEventListener('scroll',animatedBar);