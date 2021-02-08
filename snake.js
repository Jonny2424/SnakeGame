import { getInputDirection } from "./input.js";

export const snakeSpeed = 8;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
// snake is not growing from the start

export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, {ignoreHead = false } = {})  {
  return snakeBody.some((segment, index) => {
      if (ignoreHead && index ===0) return false
    // loops through all segments to see if they the food and the segment are equal
    // if true,
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
    // determines if the head is on the same position as the snake is. If true, then game over
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    // takes last element on snake and duplicates it, then adds it to the snake
    // allows for snake to "grow"
  }

  newSegments = 0;
}
