const chat = document.getElementById('chat');
const chatE = document.getElementById('chatE');
const chatA = document.getElementById('chatA');
var jarvis = false;
var wallE = false;
var translate = false;
var body = document.body;
var background = ['./bg1.jpg', './bg2.jpg', './bg3.jpg', './bg4.jpg'];

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

  if (text.includes('hello')) {
    setTimeout(() => {
      document.getElementById('assistant').style.top = '-300px';
    }, 1000);
  }

  if (text.includes('anyone in here') || text.includes('anyone is here')) {
    document.getElementById('wallE').style.left = '0';
    chatE.innerHTML = "I'm here";
    wallE = true;
  }

  if (wallE) {
    if (text.includes('who are you') || text.includes('what is your name')) {
      chatE.innerHTML = 'My name is Wall-E';
    }
    if (text.includes('what are you doing')) {
      chatE.innerHTML = "I'm here to help you";
    }
    if (text.includes('can you control this webpage')) {
      chatE.innerHTML = 'No';
      setTimeout(() => {
        chatE.innerHTML = 'but EVE can control';
      }, 2000);
    }
    if (text.includes('can you call her here')) {
      chatE.innerHTML = 'why not I can';
      setTimeout(() => {
        chatE.innerHTML = 'EVE!!!';
        // document.getElementById('eveSound').play();

        setTimeout(() => {
          document.getElementById('robot').style.bottom = '0';
          // var reply = 'Hello';
          // for (let i = 0; i < reply.length; i++) {
          //   chat.innerHTML = reply[i].charCodeAt(0).toString(2) + ' ';
          // }
          chat.innerHTML = 'Hello Well-E';

          setTimeout(() => {
            chatE.innerHTML =
              "but EVE can't understand your human language because she's a robot";

            setTimeout(() => {
              chatE.innerHTML = 'May I translate for you';
              translate = true;
            }, 5000);
          }, 4000);
        }, 3000);
      }, 2000);
    }
  }

  if (translate) {
    chatE.innerHTML = text;

    if (text.includes('change background')) {
      setTimeout(() => {
        chatE.innerHTML = text;

        setTimeout(() => {
          chatE.innerHTML = "It's look so beautiful";
        }, 3000);
      }, 1000);

      setTimeout(() => {
        chat.innerHTML = 'Okay';
      }, 2000);
      var x = Math.floor(Math.random() * background.length);
      body.style.background = `url(${background[x]})`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
      body.style.backgroundRepeat = 'no-repeat';
    }

    if (text.includes('can I play games')) {
      setTimeout(() => {
        chat.innerHTML = 'Wait a second';
      }, 1000);

      setTimeout(() => {
        document.getElementById('snakeGame').style.top = '50%';
        document.getElementById('snakeGame').style.left = '50%';
        document.getElementById('snakeGame').style.transform =
          'translate(-50%,-50%)';
      }, 3000);
    }
    if (text.includes('how can I play')) {
      setTimeout(() => {
        chat.innerHTML = 'Talk with Jarvis';
      }, 1000);

      setTimeout(() => {
        document.getElementById('assistant').style.top = '300px';

        document.querySelector('.assistant .chatbox').style.visibility =
          'visible';
        chatA.innerHTML = 'How can I help you?';
      }, 2000);
    }

    if (text.includes('stop game')) {
      setTimeout(() => {
        document.getElementById('snakeGame').style.top = '-500px';
      }, 3000);
    }
  }

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

  if (text.includes('close Jarvis') || text.includes('close')) {
    chat.innerHTML = 'bye bye';
    setTimeout(() => {
      document.getElementById('robot').style.bottom = '-300px';
    }, 1500);
    jarvis = false;
  }

  // if (text.includes('move Center')) {
  //   chat.innerHTML = "Okay, I'm moving to the center";
  //   setTimeout(() => {
  //     document.getElementById('robot').style.top = '2rem';
  //     chat.innerHTML = "I've reached center";
  //   }, 1000);
  // }
  //}
});

recognition.addEventListener('end', () => {
  recognition.start();
});

recognition.start();

// ===================== SNAKE GAME =====================
const boardBorder = 'black';
const boardBackground = '#a2d2ff';
const snakeColor = 'white';
const snakeBorder = 'black';

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

const snakeBoard = document.getElementById('snakeboard');
const snakeBoard_ctx = snakeBoard.getContext('2d');

generateFood();

document.addEventListener('keydown', changeDirection);

function main() {
  if (gameEnd()) return;

  changingDirection = false;
  setTimeout(function start() {
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    // if (snake.length == 6) {
    //   snakeBoard_ctx.fillStyle = 'black';
    //   snakeBoard_ctx.strokestyle = 'black';
    //   snakeBoard_ctx.fillRect(10, 10, 10, 10);
    //   snakeBoard_ctx.strokeRect(10, 10, 10, 10);
    // }
    main();
  }, 100);
}

function again() {
  snakeBoard_ctx.clearRect(0, 0, snakeBoard.width, snakeBoard.height);

  snakeBoard_ctx.restore();
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
  snakeBoard_ctx.fillRect(foodX, foodY, 15, 15);
  snakeBoard_ctx.strokeRect(foodX, foodY, 15, 15);
}

function drawSnakePart(snakePart) {
  snakeBoard_ctx.fillStyle = snakeColor;
  snakeBoard_ctx.strokestyle = snakeBorder;
  snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 15, 15);
  snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 15, 15);
}

function gameEnd() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeBoard.width - 20;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeBoard.height - 20;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
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
    generateFood();
  } else {
    snake.pop();
  }
}

// ========================= MUSIC BOX =========================
