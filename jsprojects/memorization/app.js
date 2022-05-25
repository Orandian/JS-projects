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

[...cards].forEach((card) => {
  card.addEventListener('click', (e) => {
    e.target.classList.add('active');

    if (firstClick == '') {
      firstClick = e.target.innerHTML;
      firstId = e.target.id;
      console.log(firstClick);
      console.log(firstId);
    } else {
      secondClick = e.target.innerHTML;
      secondId = e.target.id;

      if (firstClick == secondClick && firstId != secondId) {
        document.getElementById(firstId).style.visibility = 'hidden';
        document.getElementById(secondId).style.visibility = 'hidden';
      }
      if (firstClick != secondClick) {
        document.getElementById(firstId).classList.add('active');
        document.getElementById(secondId).classList.add('active');
      }

      firstClick = '';
      secondClick = '';
      firstId = '';
      secondId = '';
    }
  });
});

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
