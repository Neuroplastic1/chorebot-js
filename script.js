// Global variables - ID Selectors

let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

// Global variables - Images

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

// Global variables - Initiate game

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Generate doors

let randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        (choreDoor === 2)
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
}

// On-click actions

doorImage1.onclick = () => {
    if (currentlyPlaying === true && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (currentlyPlaying === true && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (currentlyPlaying === true && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
};

// Start Round Function to restart the game

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

// Functions

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door) === true) {
        gameOver();
    }
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    };
    currentlyPlaying = false;
};

// Initiate the game

startRound();
