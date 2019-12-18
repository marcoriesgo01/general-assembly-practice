// Easy Does It
let quotes = ["Be yourself; everyone else is already taken.", "So many books, so little time.", "A room without books is like a body without a soul."];

// Random
const randomThings = [1, 10, "Hello", true];
randomThings[0];
randomThings[2] = "World";
console.log(randomThings);

// We've Got Class
const ourClass = ["Outrun", "Zoom", "Github", "Slack"];
ourClass[2] = "Octocat";
ourClass.push("Cloud City");

// Mix It Up
const myArray = [5 ,10 ,500, 20];
myArray.push("Egon");
myArray.pop();
console.log(myArray);
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();

// Biggie Smalls
for (i = 0; i < myArray.length; i++) {
    if (myArray[i] < 100) {
        console.log("little number");
    } else {
        console.log("big number");
    }
};

//Monkey In The Middle
for (i = 0; i < myArray.length; i++) {
    if (myArray[i] < 5) {
        console.log("little number");
    } else if (myArray[i] > 10){
        console.log("big number");
    } else {
        console.log("monkey")
    }
};

// What's in your closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today.");
  kristynsCloset.shift();
  let kristynShoe = "left shoe";
  kristynsCloset.splice(6, 0, "raybans");
  kristynsCloset[6] = "stained knit hat";

  let thomOutfit = [thomsCloset[0][1], thomsCloset[1][2], thomsCloset[2][0]];
  console.log("Thom is looking fierce in a " + thomOutfit[0] + ", " + thomOutfit[1] + ", and " + thomOutfit[2] + "!")
  thomsCloset[1][2] = "Footie Pajamas";


