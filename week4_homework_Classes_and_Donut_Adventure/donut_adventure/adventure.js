// Check document connection:
console.log("adventure.js is linked");

// Create the Hero Class:
class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = [
            {
                name: "sprinkleSpray", 
                hitpower: 5
            },
            {
                name: "sugarShock", 
                hitpower: 10
            }
        ];
        this.catchPhrases = [
            'i\'m fresher than day old pizza', 
            'you can\'t count my calories'
        ];
    }
    randomNumberGenerator(arr) {
        return Math.floor(Math.random() * arr.length);
    }
    talkSass() {
        console.log(this.name + " says " + this.catchPhrases[this.randomNumberGenerator(this.catchPhrases)]);
    }
    announceHealth() {
        console.log(this.name + "'s current health is " + this.health);
    }
    randomWeapon() {
        return this.weapons[this.randomNumberGenerator(this.weapons)];
    }
    fight(enemy) {
        let weaponUse = this.randomWeapon();
        enemy.health -= weaponUse.hitpower;
        console.log(this.name + " used " + weaponUse.name + ", hurting the the Pizza Rat by " + weaponUse.hitpower + " health points.");
    }
};

// Create Dougie based on hero class:
const dougie = new Hero("Dougie the Donut");

// Create Our Enemy Class:
class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = [
            {
                name: "pepperoniStars", 
                hitpower: 5
            },
            {
                name: "cheeseGrease",
                hitpower: 10    
            }
        ];
        this.catchPhrases = [
            'i\'m youtube famous',
            'i\'m more dangerous than an uncovered sewer'
        ];
    }
    randomNumberGenerator(arr) {
        return Math.floor(Math.random() * arr.length);
    }
    talkSmack() {
        console.log(this.name + " says " + this.catchPhrases[this.randomNumberGenerator(this.catchPhrases)]);
    }
    announceHealth() {
        console.log(this.name + "'s current health is " + this.health);
    }
    randomWeapon() {
        return this.weapons[this.randomNumberGenerator(this.weapons)];
    }
    fight(enemy) {
        let weaponUse = this.randomWeapon();
        enemy.health -= weaponUse.hitpower;
        console.log(this.name + " used " + weaponUse.name + ", hurting Dougie by " + weaponUse.hitpower + " health points.");
    }
};

// Create pizza rat based on enemy class:
const pizzaRat = new Enemy("Enemy Pizza Rat");

// Walking down the street encounter - insulting each other:
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

// Dougie and pizza rat fight:
dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
dougie.announceHealth();
pizzaRat.announceHealth();