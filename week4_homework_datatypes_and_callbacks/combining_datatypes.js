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
