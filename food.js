import {onSnake, expandSnake} from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition()
const expanseRate = 1;
//  grow by this much when eating a piece of food

export function update() {
  if (onSnake(food)) {
    expandSnake(expanseRate);
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}


function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        // if the position is empty or when the food is on the snake already, get
        // a new position. If the food location is already on the snake, this runs
        //  over and over until a position is found
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}