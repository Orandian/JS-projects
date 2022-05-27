const chat = document.getElementById('chat');
const robot = document.getElementById('robot');
const confirmBox = document.getElementById('confirmBox');
const agreeBox = document.getElementById('agreeBox');
const snakeGame = document.getElementById('snakeGame');
const musicBox = document.getElementById('musicBox');
const video = document.getElementById('video');

// SNAKE GAME'S CONSTANTS
const boardBorder = 'black';
const boardBackground = '#a2d2ff';
const snakeColor = 'white';
const snakeBorder = 'black';

var jarvis = false;
var move = false;
var todo = false;
var startGame = false;
var startVideo = false;
var agreefun = false;
var body = document.body;

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDay();
var today = new Date().getDate();
var hour = new Date().getHours();
var mins = new Date().getMinutes();
var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e) => {
  var text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  console.log(text);

  if (
    text.includes('hello') ||
    text.includes('hello Jarvis') ||
    text.includes('anyone in here')
  ) {
    jarvis = true;
    setTimeout(() => {
      robot.style.bottom = '0';
      chat.innerHTML = 'Hello';
    }, 1000);
  }

  if (jarvis) {
    if (
      text.includes('what is your name') ||
      text.includes('who are you') ||
      text.includes('may I know your name')
    ) {
      setTimeout(() => {
        chat.innerHTML = `My name is <span style="color: #f00;">JARVIS</span>, your webpage's assistant!`;

        setTimeout(() => {
          agreefun = true;
          chat.innerHTML = 'Agree or Not agree?';
          confirmBox.style.top = '3rem';
        }, 3000);
      }, 1000);
    }

    if (
      text.includes('what day is it') ||
      text.includes('what day') ||
      text.includes('day')
    ) {
      setTimeout(() => {
        chat.innerHTML = `Today is <span style="color: #f00;">${days[day]}</span>`;
      }, 1000);
    }

    if (
      text.includes('what time is it') ||
      text.includes('what time') ||
      text.includes('time')
    ) {
      setTimeout(() => {
        chat.innerHTML = `<span style="color: #f00;">${
          hour > 12 ? hour - 12 : hour
        }</span> hour <span style="color: #f00;">${mins}</span> minutes`;
      }, 1000);
    }

    if (agreefun) {
      if (text.includes('agree') || text.includes('agreed')) {
        agree();
      }
      if (text.includes('not agree') || text.includes('not agreed')) {
        notagree();
      }
    }

    if (text.includes('change background') || text.includes('background')) {
      setTimeout(() => {
        chat.innerHTML = "Okay, I'll change";
        setTimeout(() => {
          var random = Math.floor(
            Math.random() * (495281 - 492673 + 1) + 492673
          );
          body.style.background = `url(https://source.unsplash.com/collection/${random}/1900x900)`;
          body.style.backgroundSize = 'cover';
          body.style.backgroundPosition = 'center';
          body.style.backgroundRepeat = 'no-repeat';
        }, 1000);
      }, 1000);
    }

    if (
      text.includes('can you move around this webpage') ||
      text.includes('can you move')
    ) {
      move = true;
      setTimeout(() => {
        chat.innerHTML = 'Yes, I can';
      }, 1000);
    }

    if (move) {
      if (text.includes('move to the top')) {
        chat.innerHTML = 'Ok';
        robot.style.transition = '2s';
        setTimeout(() => {
          robot.style.bottom = '400px';
          setTimeout(() => {
            chat.innerHTML = 'here';
          }, 2000);
        }, 1000);
      }

      if (text.includes('move to the left')) {
        chat.innerHTML = 'Ok';
        robot.style.transition = '4s';
        setTimeout(() => {
          robot.style.right = '1100px';
          setTimeout(() => {
            chat.innerHTML = 'here';
          }, 4000);
        }, 1000);
      }

      if (text.includes('move to the bottom')) {
        chat.innerHTML = 'Ok';
        robot.style.transition = '2s';
        setTimeout(() => {
          robot.style.bottom = '0px';
          setTimeout(() => {
            chat.innerHTML = 'here';
          }, 2000);
        }, 1000);
      }

      if (text.includes('move to the right')) {
        chat.innerHTML = 'Ok';
        robot.style.transition = '4s';
        setTimeout(() => {
          robot.style.right = '0px';
          setTimeout(() => {
            chat.innerHTML = 'here';
          }, 4000);
        }, 1000);
      }

      if (text.includes('move to the center')) {
        chat.innerHTML = 'Ok';
        robot.style.transition = '2s';
        setTimeout(() => {
          robot.style.bottom = '200px';
          robot.style.right = '600px';
          setTimeout(() => {
            chat.innerHTML = 'here';
          }, 2000);
        }, 1000);
      }
    }

    if (todo) {
      if (text.includes('I want to play games')) {
        startGame = true;
        setTimeout(() => {
          chat.innerHTML = 'Wait a second';

          setTimeout(() => {
            robot.style.bottom = '1000px';
            robot.style.transition = '3s';

            setTimeout(() => {
              robot.style.bottom = '400px';
              robot.style.right = '1000px';

              setTimeout(() => {
                chat.innerHTML = 'Here you can';
                snakeGame.style.top = '2rem';
              }, 1000);
            }, 2000);
          }, 1000);
        }, 1000);
      }
      if (startGame) {
        if (
          text.includes('start the game') ||
          text.includes('start game') ||
          text.includes('start')
        ) {
          main();
        }
        if (text == 'again' || text == 'play again') {
          again();
        }
        if (text.includes('stop game') || text.includes('close game')) {
          chat.innerHTML = 'Okay';
          setTimeout(() => {
            chat.innerHTML = 'wait a second';
            robot.style.bottom = '1000px';
            snakeGame.style.top = '-1000px';

            setTimeout(() => {
              chat.innerHTML = 'I am here';
              robot.style.bottom = '0';
              robot.style.right = '0';
              startGame = false;
            }, 2000);
          }, 1000);
        }
      }

      if (
        text.includes('I want to listen songs') ||
        text.includes('I want to listen song')
      ) {
        setTimeout(() => {
          startVideo = true;
          chat.innerHTML = 'Wait a second';

          setTimeout(() => {
            robot.style.bottom = '1000px';
            robot.style.transition = '3s';

            setTimeout(() => {
              robot.style.bottom = '400px';
              robot.style.right = '1000px';

              setTimeout(() => {
                chat.innerHTML = 'Here you can';
                video.style.top = '0';

                setTimeout(() => {
                  musicBox.style.top = '100px';
                }, 2000);
              }, 1000);
            }, 2000);
          }, 1000);
        }, 1000);
      }

      if (startVideo) {
        if (
          text.includes('stop song') ||
          text.includes('stop video') ||
          text.includes('stop')
        ) {
          video.pause();
          chat.innerHTML = 'Okay';
          setTimeout(() => {
            chat.innerHTML = 'wait a second';
            robot.style.bottom = '1000px';
            video.style.top = '-1000px';
            musicBox.style.top = '-1000px';

            setTimeout(() => {
              chat.innerHTML = 'I am here';
              robot.style.bottom = '0';
              robot.style.right = '0';
              startVideo = false;
            }, 2000);
          }, 1000);
        }
      }
    }
  }
});

recognition.addEventListener('end', () => {
  recognition.start();
});

recognition.start();

function agree() {
  setTimeout(() => {
    confirmBox.style.top = '-10rem';
    chat.innerHTML = 'Thank You!';
    setTimeout(() => {
      chat.innerHTML = 'What you wanna do?';

      todo = true;
      agreefun = false;
    }, 2000);
  }, 1000);
}

function notagree() {
  chat.innerHTML = 'Bye Bye!';
  confirmBox.style.top = '-10rem';

  setTimeout(() => {
    robot.style.bottom = '-300px';

    setTimeout(() => {
      agreeBox.style.visibility = 'visible';
      agreeBox.style.zIndex = '100';

      agreefun = false;
    }, 2000);
  }, 1000);
}

// ===================== SNAKE GAME =====================
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

let changingDirection = false;
let foodX;
let foodY;
let dx = 10;
let dy = 0;
let speed = 100;
let point = 0;

const snakeBoard = document.getElementById('snakeboard');
const snakeBoard_ctx = snakeBoard.getContext('2d');

generateFood();

document.addEventListener('keydown', changeDirection);

function main() {
  chat.innerHTML = `Your score is ${point}`;
  if (gameEnd()) {
    chat.innerHTML = 'GAMEOVER!';
    return;
  }

  changingDirection = false;
  setTimeout(function start() {
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    if (snake.length == 6) {
      speed = 90;
    }
    if (snake.length == 7) {
      speed = 80;
    }
    if (snake.length == 8) {
      speed = 70;
    }
    if (snake.length == 9) {
      speed = 60;
    }
    if (snake.length == 10) {
      speed = 50;
    }
    if (snake.length == 11) {
      speed = 40;
    }
    if (snake.length == 12) {
      speed = 30;
    }
    if (snake.length == 13) {
      speed = 20;
    }
    if (snake.length == 14) {
      speed = 10;
    }
    main();
  }, speed);
}

function again() {
  speed = 100;
  point = 0;
  chat.innerHTML = `Your score is ${point}`;
  snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];
  dy = 10;
  dx = 0;
  main();
}

function clearBoard() {
  snakeBoard_ctx.fillStyle = boardBackground;
  snakeBoard_ctx.strokestyle = boardBorder;
  snakeBoard_ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeBoard_ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function drawFood() {
  snakeBoard_ctx.fillStyle = 'white';
  snakeBoard_ctx.strokestyle = 'black';
  snakeBoard_ctx.fillRect(foodX, foodY, 20, 20);
  snakeBoard_ctx.strokeRect(foodX, foodY, 20, 20);
}

function drawSnakePart(snakePart) {
  snakeBoard_ctx.fillStyle = snakeColor;
  snakeBoard_ctx.strokestyle = snakeBorder;
  snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
  snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
}

function gameEnd() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeBoard.width - 20;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeBoard.height - 20;
  if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) return true;
}

function randomFood(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function generateFood() {
  foodX = randomFood(0, snakeBoard.width - 20);
  foodY = randomFood(0, snakeBoard.height - 20);
  snake.forEach(function eatenFood(part) {
    const eaten = part.x == foodX && part.y == foodY;
    if (eaten) generateFood();
  });
}

function changeDirection(event) {
  const leftKey = 37;
  const rightKey = 39;
  const upKey = 38;
  const downKey = 40;

  if (changingDirection) return;
  changingDirection = true;
  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;
  if (keyPressed === leftKey && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === upKey && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === rightKey && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === downKey && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function moveSnake() {
  const head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy,
  };

  snake.unshift(head);
  const eatenFood = snake[0].x === foodX && snake[0].y === foodY;
  if (eatenFood) {
    point += 10;
    chat.innerHTML = `Your score is ${point}`;
    generateFood();
  } else {
    snake.pop();
  }
}

// ========================= MUSIC BOX =========================
let title = document.getElementById('title');
let progressBox = document.getElementById('progressBox');
let progress = document.getElementById('progress');
let coverImg = document.getElementById('coverImg');
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

function play(e) {
  if (video.paused) {
    musicBox.classList.add('active');
    musicBox.style.background = 'transparent';
    video.play();
    e.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    musicBox.classList.remove('active');
    musicBox.style.background = '#a2d2ff';
    video.pause();
    e.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function next() {
  musicBox.style.background = '#a2d2ff';
  document.getElementById('play').innerHTML = `<i class="fas fa-play"></i>`;
  musicBox.classList.remove('active');
  number++;
  if (number == 4) {
    number = 0;
  }

  coverImg.src = videos[number].poster;
  title.innerHTML = videos[number].name;
  video.src = videos[number].src;
  video.poster = videos[number].poster;
}

function prev() {
  musicBox.style.background = '#a2d2ff';
  musicBox.classList.remove('active');
  document.getElementById('play').innerHTML = `<i class="fas fa-play"></i>`;
  number--;
  if (number == -1) {
    number = 3;
  }

  coverImg.src = videos[number].poster;
  title.innerHTML = videos[number].name;
  video.src = videos[number].src;
  video.poster = videos[number].poster;
}

function updateprogress(e) {
  const { duration, currentTime } = e.target;
  const progresspercent = (currentTime / duration) * 100;

  progress.style.width = `${progresspercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickx = e.offsetX;
  const duration = video.duration;

  video.currentTime = (clickx / width) * duration;
}

video.addEventListener('timeupdate', updateprogress);
progressBox.addEventListener('click', setProgress);

// if (text.includes('hello')) {
//   setTimeout(() => {
//     document.getElementById('assistant').style.top = '-300px';
//   }, 1000);
// }

// if (text.includes('anyone in here') || text.includes('anyone is here')) {
//   document.getElementById('wallE').style.left = '0';
//   chatE.innerHTML = "I'm here";
//   wallE = true;
// }

// if (wallE) {
//   if (text.includes('who are you') || text.includes('what is your name')) {
//     chatE.innerHTML = 'My name is Wall-E';
//   }
//   if (text.includes('what are you doing')) {
//     chatE.innerHTML = "I'm here to help you";
//   }
//   if (text.includes('can you control this webpage')) {
//     chatE.innerHTML = 'No';
//     setTimeout(() => {
//       chatE.innerHTML = 'but EVE can control';
//     }, 2000);
//   }
//   if (text.includes('can you call her here')) {
//     chatE.innerHTML = 'why not I can';
//     setTimeout(() => {
//       chatE.innerHTML = 'EVE!!!';
//       // document.getElementById('eveSound').play();

//       setTimeout(() => {
//         document.getElementById('robot').style.bottom = '0';
//         // var reply = 'Hello';
//         // for (let i = 0; i < reply.length; i++) {
//         //   chat.innerHTML = reply[i].charCodeAt(0).toString(2) + ' ';
//         // }
//         chat.innerHTML = 'Hello Well-E';

//         setTimeout(() => {
//           chatE.innerHTML =
//             "but EVE can't understand your human language because she's a robot";

//           setTimeout(() => {
//             chatE.innerHTML = 'May I translate for you';
//             translate = true;
//           }, 5000);
//         }, 4000);
//       }, 3000);
//     }, 2000);
//   }
// }

// if (translate) {
//   chatE.innerHTML = text;

//   if (text.includes('change background')) {
//     setTimeout(() => {
//       chatE.innerHTML = text;

//       setTimeout(() => {
//         chatE.innerHTML = "It's look so beautiful";
//       }, 3000);
//     }, 1000);

//     setTimeout(() => {
//       chat.innerHTML = 'Okay';
//     }, 2000);
//     var x = Math.floor(Math.random() * background.length);
//     body.style.background = `url(${background[x]})`;
//     body.style.backgroundSize = 'cover';
//     body.style.backgroundPosition = 'center';
//     body.style.backgroundRepeat = 'no-repeat';
//   }

//   if (text.includes('can I play games')) {
//     setTimeout(() => {
//       chat.innerHTML = 'Wait a second';
//     }, 1000);

//     setTimeout(() => {
//       document.getElementById('snakeGame').style.top = '50%';
//       document.getElementById('snakeGame').style.left = '50%';
//       document.getElementById('snakeGame').style.transform =
//         'translate(-50%,-50%)';
//     }, 3000);
//   }
//   if (text.includes('how can I play')) {
//     setTimeout(() => {
//       chat.innerHTML = 'Talk with Jarvis';
//     }, 1000);

//     setTimeout(() => {
//       document.getElementById('assistant').style.top = '300px';

//       document.querySelector('.assistant .chatbox').style.visibility =
//         'visible';
//       chatA.innerHTML = 'How can I help you?';
//     }, 2000);
//   }

//   if (text.includes('stop game')) {
//     setTimeout(() => {
//       document.getElementById('snakeGame').style.top = '-500px';
//     }, 3000);
//   }
// }

// if (text.includes('hello Jarvis') || text.includes('Jarvis')) {
//   document.getElementById('robot').style.bottom = '0';
//   chat.innerHTML = "What's up Human?";
//   jarvis = true;
// }
// if (jarvis) {
//   if (text.includes('who are you') || text.includes('what is your name')) {
//     chat.innerHTML = "I'm Jarvis";
//   }
//   if (text.includes('what are you doing')) {
//     chat.innerHTML = "I'm here to help you";
//   }
//   if (text.includes('can you sing a song')) {
//     chat.innerHTML = 'No';
//     // open robotic voice
//   }
//   if (text.includes('do you have a girlfriend')) {
//     chat.innerHTML = 'No';
//   }
//   if (text.includes('are you a gay')) {
//     chat.innerHTML = "I don't have gender because I'm a robot";
//   }
//   if (text.includes('are you lonely')) {
//     chat.innerHTML =
//       "I'm not but I think you are asking because you're lonely";
//   }
//   if (text.includes('why do you understand me')) {
//     chat.innerHTML = 'I just translate your language in zeros and ones';
//   }
//   if (text.includes('do you know Siri')) {
//     chat.innerHTML = "Of course, she's my crush";
//     setTimeout(() => {
//       chat.innerHTML = 'Make sure to let me know if you met her';
//     }, 3000);
//   }
//   if (text.includes('can you fly')) {
//     chat.innerHTML = "I can't but, do you know what I can do?";
//     setTimeout(() => {
//       chat.innerHTML = 'I can command drones to fly for me';
//     }, 3000);
//   }
//   if (text.includes('which do you recommend Android or iPhone')) {
//     chat.innerHTML =
//       'Neither of them because keypads are the best smart phones ever';
//   }

// if (text.includes('close Jarvis') || text.includes('close')) {
//   chat.innerHTML = 'bye bye';
//   setTimeout(() => {
//     document.getElementById('robot').style.bottom = '-300px';
//   }, 1500);
//   jarvis = false;
// }
