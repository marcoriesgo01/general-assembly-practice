// Created Hamster Class:
class Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
};

// Created Person Class:
class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        console.log("name: ", this.name);
    }
    getAge() {
        console.log("age: ", this.age);
    }
    getWeight() {
        console.log("weight: ", this.weight);
    }
    greet() {
        console.log("Hello, " + this.name);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
};

// Create a Story with your Person Class:
// Timmy = new person
const timmy = new Person("Timmy");

// Timmy ages 5 years
for (i = 0; i < 5; i++) {
    timmy.ageUp();
};
timmy.getAge();

// Timmy eats 5 times
for (i = 0; i < 5; i++) {
    timmy.eat();
};
timmy.getWeight();

// Timmy exercises 5 times
for (i = 0; i < 5; i++) {
    timmy.exercise();
};
timmy.getWeight();

// Timmy ages 9 years... now he is 14
for (i = 0; i < 9; i++) {
    timmy.ageUp();
};

// New hamster gus is created
const gus = new Hamster("Gus");

// Timmy becomes gus' owner
gus.owner = "Timmy";

// Timmy buys gus
timmy.buyHamster(gus);

// Timmy ages 15 years... he is now 29
for (i = 0; i < 15; i++) {
    timmy.ageUp();
};
timmy.getAge();

// Timmy eats twice
for (i = 0; i < 2; i++) {
    timmy.eat();
};

// Timmy exercises twice
for (i = 0; i < 2; i++) {
    timmy.exercise();
};
