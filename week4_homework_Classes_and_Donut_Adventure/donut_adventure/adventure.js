// Check document connection:
console.log("adventure.js is linked");

// Create the Hero Class:
class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories'];
    }
    talkSass() {
        console.log(this.name + " says " + this.catchPhrases[Math.floor(Math.random() * arr.length)(this.catchPhrases)]);
    }
    announceHealth() {
        console.log(this.name + "'s current health is " + this.health);
    }
    fight() {
        console.log("I am ready to rumble");
    }
};

const dougie = new Hero("Dougie the Donut");