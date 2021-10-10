// UI
const board_background = "white",
    board_border = "black",
    snake_col = "lightblue",
    snake_border = "darkblue";

const snakeboard = document.getElementById('snakeboard'),
    snakeboard_ctx = snakeboard.getContext("2d");

let score = 0;
let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
]
let changing_direction = false;
let food_x;
let food_y;
// Horizontal Velocity
let dx = 10;
let dy = 0;

// Start-up Function
main();
gen_food();
document.getElementById("keydown",change_direction);

// Main Function
function main(){
    if(has_game_ended()) return;
    changing_direction = false;
    setTimeout(() => {
        clear_board();
        drawFood();
        move_snake();
        drawSnake();
    }, 100);
};

// Has Game Ended
function has_game_ended(){
    for(let i = 4; i < snake.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
};

// Draw a border around the canvas
function clear_board(){
    snakeboard_ctx.fillStyle = board_background;
    snakeboard_ctx.strokestyle = board_border;
    snakeboard_ctx.fillRect(0,0,snakeboard.width,snakeboard.height);
    snakeboard_ctx.strokeRect(0,0,snakeboard.width,snakeboard.height);
};

// Draw food on the canvas
function drawFood(){
    snakeboard_ctx.fillStyle = "lightgreen";
    snakeboard_ctx.strokestyle = "darkgreen";
    snakeboard_ctx.fillRect(food_x,food_y,10,10);
    snakeboard_ctx.strokeRect(food_x,food_y,10,10);
}

// Draw the snake on the canvas
function drawSnake(){
    snake.forEach(drawSnakePart);
};

// Draw Snake Part
function drawSnakePart(snakePart){
    snakeboard_ctx.fillStyle = snake_col;
    snakeboard_ctx.strokestyle = snake_border;
    snakeboard_ctx.fillRect(snakePart.x,snakePart.y,10,10);
    snakeboard_ctx.strokeRect(snakePart.x,snakePart.y,10,10);
};

// Make Random Food
function random_food(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
  }

  function gen_food() {
    // Generate a random number the food x-coordinate
    food_x = random_food(0, snakeboard.width - 10);
    // Generate a random number for the food y-coordinate
    food_y = random_food(0, snakeboard.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x == food_x && part.y == food_y;
      if (has_eaten) gen_food();
    });
  }

  function change_direction(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
  // Prevent the snake from reversing
  
    if (changing_direction) return;
    changing_direction = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
      dx = -10;
      dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
      dx = 0;
      dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
      dx = 10;
      dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
      dx = 0;
      dy = 10;
    }
  }

  function move_snake() {
    // Create the new Snake's head
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
    if (has_eaten_food) {
      // Increase score
      score += 10;
      // Display score on screen
      document.getElementById('score').innerHTML = score;
      // Generate new food location
      gen_food();
    } else {
      // Remove the last part of snake body
      snake.pop();
    }
  }