// Datatypes Refresher
/*
1. A light switch that can be either on or off.
Datatype: boolean
Data structure example: const light = true;

2. A user's email address.
Datatype: string
Data structure example: const email = user@email.com;

3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
Datatype: array
Data structure example: const spaceship = ["hull", "laserBlasters", "tractorBeam", "warpDrive"];

4. A list of student names from our class.
Datatype: array
Data structure example: const phoenixRising = ["Marco", "Ira"];

5. A list of student names from our class, each with a location.
Datatype: object array
Data structure example: const PhoenixRising = [
    {
        name: "name",
        location: "location"
    }
];

6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
Datatype: object array with an inner array
Data structure example: const PhoenixRising = [
    {
        name: "name",
        location: "location",
        favoriteShows: ["show name", "show name"]
    }
];
*/

// Take it Easy
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(rainbow[4]);

const marcoRiesgo = {
    favoriteFood: "sushi",
    hobby: "reading",
    location: "Los Angeles",
    favoriteDatatype: "string" 
}
console.log(marcoRiesgo.hobby);

// Crazy Object!
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
// 1.
console.log(crazyObject.taco[1].salsa[5]);

// 2.
console.log(crazyObject.larry.quotes[0]);

// 3. 
console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4.
console.log(crazyObject.larry.nicknames[1]);

// 5. 
console.log(crazyObject.larry.characters[1]);

// 6.
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes);


