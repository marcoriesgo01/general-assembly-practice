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
