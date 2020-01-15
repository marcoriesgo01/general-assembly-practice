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

// Create Our Enemy Class:
class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        console.log(this.name + " says " + this.catchPhrases[Math.floor(Math.random() * arr.length)(this.catchPhrases)]);
    }
    announceHealth() {
        console.log(this.name + "'s current health is " + this.health);
    }
    fight() {
        console.log("I am gonna flatten you like a slice of pepperoni!");
    }
};

const pizzaRat = new Enemy("Enemy Pizza Rat");