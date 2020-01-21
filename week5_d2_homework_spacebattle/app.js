class PlayerShip {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
    // Did ship hit alien?:
    hitNoHit() { 
        return this.accuracy >= Math.random(); 
    }
    // Is the ship dead?:
    isDead() { 
        return this.hull <= 0; 
    }
    // Attack alienship:
    attackShip(enemy){
      if(this.hitNoHit()){
        enemy.hull -= this.firepower;
        let attackText = this.name + " hit " + enemy.name + " and did " + this.firepower + " damage!";
        attackText += "\n";
        attackText += enemy.name + " has " + enemy.hull + " hull left.";
        return attackText;
      } else {
        return this.name + " missed!";
      }
    }
  };
  
  // Declare ships:
  // USS Riesgo:
  const myShip = new PlayerShip("USS Riesgo", 20, 5, .7);
  // Alien Array:
  const alienShips = [];
  
  // Create ships:
  const reset = (shipArray, playerShip) =>{
    playerShip.hull = 20;
    for(let x = 0; x < 6; x++){
      shipArray.pop();
    }
    for(let i = 0; i < 6; i++){
      let hull = Math.floor(Math.random() * 4) + 3;
      let firepower = Math.floor(Math.random() * 3) + 2;
      let accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
      shipArray.push(new PlayerShip("Alien " + (i+1), hull, firepower, accuracy));
    }
  };
  reset(alienShips, myShip);
  
  // Gameplay:
  const mainTurn = () => {
    let cmd = "";
    let retreat = false;
    alert("Aliens are attacking!");

    // Loops if: player is not dead, player has not retreated, more than 0 aliens
    while(!myShip.isDead() && !retreat && alienShips.length > 0)
    {
      cmd = prompt("Will you attack or retreat?", "Attack/Retreat").toLowerCase();
      if(cmd === "retreat"){
        retreat = true;
      } else if(cmd === "attack"){
        // While both players are alive, loop gameplay:
        while(!myShip.isDead() && !alienShips[0].isDead()){
          alert(myShip.attackShip(alienShips[0]));
          if(!alienShips[0].isDead()){
            alert(alienShips[0].attackShip(myShip));
          } else {
            alert("You destroyed " + alienShips[0].name + "!");
          }
        }
        alienShips.shift();
      } else if(cmd === "reset"){
          reset(alienShips, myShip);
      }
    }
    if(myShip.hull <= 0){
      alert("Game over. You died!");
    }
    if(alienShips.length == 0){
    alert("Congratulations. You won the game!");
    }
    if(retreat){
      alert("Game over. You retreated!");
    }
  }
  mainTurn();