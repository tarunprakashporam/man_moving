// script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let personX = 50; // Initial X position of the person
const personY = canvas.height / 2; // Y position of the person

function drawPerson() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = 'blue'; // Color of the person
    ctx.fillRect(personX, personY, 50, 50); // Draw the person
}

function movePerson(direction) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (direction === 'left' && personX > 0) {
                personX -= 5; // Move the person left
            } else if (direction === 'right' && personX < canvas.width - 50) {
                personX += 5; // Move the person right
            }
            resolve(); // Resolve the promise after moving the person
        }, 200); // Simulate asynchronous behavior with a delay of 1000 milliseconds
    });
}

async function handleMovement(event) {
    if (event.key === 'ArrowLeft') {
        await movePerson('left');
    } else if (event.key === 'ArrowRight') {
        await movePerson('right');
    }
    drawPerson(); // Redraw the person at the new position
}

document.addEventListener('keydown', handleMovement);

drawPerson(); // Initial drawing of the person
