//Section 2 Combining Datatypes:

//Combine objects, arrays, and functions:
// 1.
const crayonBox = {
    crayolaColors: ["black", "brick", "brown", "chestnut", "cerulean", "indigo"]
}
console.log(crayonBox.crayolaColors[3]);

// 2.
const bottle = {
    cap: {
        material: "metal",
        color: "grey",
        brand: "Nestle"
    }
};
console.log(bottle.cap.color);

// 3.
const receipt = [
    {
      name: "Doritos",
      price: 1.99
    },
    {
      name: "Evian",
      price: 2.99  
    },
    {
        name: "Kellogs",
        price: 1.49
    }
];
console.log(receipt[1].name);

//4.
const aparttmentBuilding = [
    ["Michael Bauer", "Dohee Evans"],
    ["Mackenzie Ricci", "Rose Jacobs"],
    ["Ignacio Hernandez", "Isa Buenaventura"]
];
console.log(aparttmentBuilding[1][1]);

// Combine objects, arrays, and functions more than one level deep:
// 1.
const knit = () => {
    return {
        item: "scarf",
        size: "6ft",
        color: "red"
    };
};
console.log(knit().size);

// 2.
const crayonSelector = () => {
    return {
        crayolaColors: ["black", "brick", "brown", "chestnut", "cerulean", "indigo"],
        numberOfCrayons: 6
    };
};
console.log(crayonSelector().crayolaColors[2]);

// 3.
const powerButton = () => {
    return options();
}
const options = () => {
    console.log("Select a song.");
}
powerButton();

// Model a vending machine: 
const vendingMachine = {
    snacks: [
        {
            name: "Doritos",
            price: 1.99
        },
        {
            name: "Munchies",
            price: 1.25
        },
        {
            name: "Snickers",
            price: 1.50
        }
    ],
    vend (inputs) {
        console.log("Vending " + vendingMachine.snacks[inputs].name);
    }
};
vendingMachine.vend(2);

// Callbacks:
// 1.
function add (x, y) {
    return x + y;
};

// 2.
function subtract (x, y) {
    return x - y;
};

// 3.
function multiply (x, y) {
    return x * y;
};

// 4.
function divide (x, y) {
    return x/y;
};

// 5.
const calculate = (num, operation) => {
    return operation(num);
};
// 6.
let divideByTwo = num => num/2;
let multiplyNumbersByFour = num => num * 4;
let cubedNumber = num => num * num * num;
let subtractNumberByTwo = num => num - 2;
// 7.
calculate(20, divideByTwo);
calculate(14, multiplyNumbersByFour);
calculate(46, cubedNumber);
calculate(23, subtractNumberByTwo);

// Function Definition Placement - Corrected Code:
const bar = () => {
    console.log('bar here');
};
const foo = () => {
    console.log('foo here');
};
bar();
foo();

// Error Reading:
// The error of "" the incorrect code produces simply means that there is a missing equal sign when declaring the function - between the "foo" and the parentheses "()".
// Correction of the line:
// const foo = () => {