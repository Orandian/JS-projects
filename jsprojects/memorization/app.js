let cards = document.getElementsByClassName('card');
let icons = [
  '<ion-icon name="airplane-outline"></ion-icon>',
  '<ion-icon name="airplane-outline"></ion-icon>',
  '<ion-icon name="american-football-outline"></ion-icon>',
  '<ion-icon name="american-football-outline"></ion-icon>',
  '<ion-icon name="alarm-outline"></ion-icon>',
  '<ion-icon name="alarm-outline"></ion-icon>',
  '<ion-icon name="beer-outline"></ion-icon>',
  '<ion-icon name="beer-outline"></ion-icon>',
  '<ion-icon name="book-outline"></ion-icon>',
  '<ion-icon name="book-outline"></ion-icon>',
  '<ion-icon name="diamond-outline"></ion-icon>',
  '<ion-icon name="diamond-outline"></ion-icon>',
  '<ion-icon name="earth-outline"></ion-icon>',
  '<ion-icon name="earth-outline"></ion-icon>',
  '<ion-icon name="game-controller-outline"></ion-icon>',
  '<ion-icon name="game-controller-outline"></ion-icon>',
];
let firstClick = '';
let secondClick = '';
let firstId = '';
let secondId = '';

function check(e) {
  if (firstClick == '') {
    e.classList.add('active');
    firstClick = e.innerHTML;
    firstId = e.id;
    console.log(firstClick);
    console.log(firstId);
  } else {
    e.classList.add('active');
    secondClick = e.innerHTML;
    secondId = e.id;

    if (firstClick == secondClick && firstId != secondId) {
      document.getElementById(firstId).style.visibility = 'hidden';
      document.getElementById(secondId).style.visibility = 'hidden';
    }

    if (firstClick != secondClick) {
      setTimeout(function remove() {
        e.classList.remove('active');
      }, 1000);
      document.getElementById(firstId).setAttribute('class', 'card');
    }

    firstClick = '';
    secondClick = '';
    firstId = '';
    secondId = '';
  }
}

(function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
})(icons);

(function randomIcons() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = icons[i];
  }
})();
