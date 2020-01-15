// Create the Player Ship:
let playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    // Methods for battle:
    attack: enemyShip => {
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
            console.log(`Player Ship hull remaining: ${playerShip.hull}`);
        } else {
            console.log("Alien ship missed.");
        }
    }
};
 
// Define a game object:
let gameState = {
    playerIsAlive: () => {
        // Return true if player is alive:
       return playerShip.hull > 0;
    },
    checkWin: () => {
        //return true if player has won the game
    }
};

//Start the game
console.log("Generating enemy ships.");
// enemy = new AlienShip();
// console.log(enemy);
enemies = [];
for(let i = 0; i < 1; i++) {
    enemies.push(new AlienShip());
}
console.log(enemies);

while (gameState.playerIsAlive()) {
    //Turn by turn logic
    //Player ship attacks:    
    playerShip.attack(enemies[0]);
    
    //check if enemy ship is destroyed
    if (enemies[0].hull <= 0) {
        console.log("Enemy ship destroyed!");
        let response = prompt("Enemy ship destroyed, type attack or retreat")
        if (response === "retreat") {
            alert("You retreated, game over.");
            break;
        } else if (response === "attack")  {
            //keep looping, gameplay
            console.log("continuing gameplay");
        }
    } else {
        //enemy attacks us
        enemies[0].attack();
    }
}

//End Game Logic
//player either lost retreated
console.log("Game over")

//TODO:
//1. write the loop to check if when the one ship dies, there is an alert saying you won the game
//2. expand the loop to 6
//3. continue and check if th player won