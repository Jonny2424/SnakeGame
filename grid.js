const grid_size = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * grid_size) + 1,
        y: Math.floor(Math.random() * grid_size) + 1
    }
}

export function outsideGrid(position) {
// checks positon to see if its inside the bounds of the gameboard
return (
    position.x < 1 || position.x > grid_size || 
    position.y < 1 || position.y > grid_size
)
}