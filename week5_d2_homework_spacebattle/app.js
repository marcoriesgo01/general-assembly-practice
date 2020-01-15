// Create the Player Ship:
let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // Methods for battle:
    attack(enemyShip) {
        console.log("Player attacking Alien ship");
        // Check for hit success based on Player Ship accuracy:
        if (Math.random() < playerShip.accuracy){
            console.log("Attack hit!");
            enemyShip.hull -= playerShip.firepower;
        } else {
            console.log("Attack missed!");
        }
        console.log(enemyShip);
    }
};

// Define an AlienShip class:
class AlienShip {
    constructor(){
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; 
        console.log(`==========> Hull power: ${this.hull}`)
    }
    attack() {
        console.log("Alien Ship attacking");
        // Check for hit or miss: 
        if(Math.random() < this.accuracy) {
            console.log("Alien ship hit player!")
            playerShip.hull -= this.firepower;
            console.log("Player Ship hull remaining: " + playerShip.hull);
        } else {
            console.log("Alien ship missed.");
        }
    }
};
 
// Define a game object:
let gameState = {
    playerIsAlive: () => {
       return playerShip.hull > 0;
    },
    checkWin: () => {
        return enemies.length == 0; 
    }
};

//Start the game
console.log("Generating enemy ships.");
enemies = [];
for(let i = 0; i < 6; i++) {
    enemies.push(new AlienShip());
}
console.log(enemies);

while (gameState.playerIsAlive()) {   
    playerShip.attack(enemies[0]);
    //check if enemy ship is destroyed
    if (enemies[0].hull <= 0) {
        console.log("Enemy ship destroyed!");
        let response = prompt("Enemy ship destroyed, type attack or retreat")
        if (response === "retreat") {
            alert("You have retreated. Game over.");
            break;
            } else if (response === "attack") {
                console.log("Continuing gameplay");    
            }
        } else {
        //enemy attacks us
        enemies[0].attack();
    }
}

//End Game Logic

if(gameState.checkWin()) {
    alert("You won the game!")
} else {
    console.log("Game over")
};

// Todo:
// 1. Make the loop go on to the next enemy array object after each one is detsroyed.
// 2. Correct the end game logic so that the player only wins after 6 enemy ships have been detroyed.
