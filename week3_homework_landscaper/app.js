// Instructions in Pseudocode:
/*
Landscaper Game Structure:
1. You are starting a landscaping business, but all you have are your teeth. Using just your teeth, 
you can spend the day cutting lawns and make $1. You can do this as much as you want.

2. At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money. 
Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.

3. At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have 
enough money. Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.

4. At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough 
money. Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.

5. At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have 
enough money. Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.

6. You win the game when you have a team of starving students and $1000.
*/

//Variables for the game:
let tool;
let cost;
let choice;
let money;

document.addEventListener('DOMContentLoaded', () => {
    start();
  });

//When the browser begins
const start = () => {
    tool = 'your teeth';
    money = 1;
    askForAction();
  };

//New Prompt:
const askForAction = () => {
    showStatus();
    promptQuestions();
};

// Browser Prompts:

const promptQuestions = () => {
    choice = prompt('What do you want to do?', 'landscape/buy tools');
      if (choice === 'landscape') {
        landscape();
      } else if (choice === 'buy tools') {
        checkUserTool();
      } else if (choice === 'exit') {
      } else if (choice === 'restart') {
        start();
      } else {
        alert('Did you mean landscape?')
        askForAction();
      }
  };

  const showStatus = () => {
    alert("You have $" + money + ". You are using a " + tool + ".")
};

// Tell User To Buy a New Tool

const checkUserTool = function () {
    if (money < 5) {
      alert("You don\'t have enough money to buy tools.  Keep working.");
      askForAction();
    } else {
      buyTool();
    }
  };

  //Landscaping and making money:
  
  const landscape = () => {
    if (tool === "your teeth") {
      alert("Using " + tool + " will earn you $1 each day!")
      money = money + 1;
      askForAction();
    } else if (tool === "a pair of rusty scissors") {
      money = money + 5;
      askForAction();
    } else if (tool === "an old-timey push lawnmower") {
      money = money + 50;
      askForAction();
    } else if (tool === "a fancy battery-powered lawnmower") {
      money = money + 100;
      askForAction();
    } else if (tool === "a team of starving students") {
      money = money + 250;
      if (money < 1000) {
        askForAction();
      } else {
        alert("Congratulations! You have made $" + money + "You have won the game and are now a professional landscaper!")
      }
    }
  };
  
  // User Alert to buy a new tool
  const alertText = () => {
    alert("You can buy " + tool + " for $" + cost + ".");
    alert("You have purchased " + tool + "!  Using this tool will earn you $" + makeAmount + " each day!");
    askForAction();
  };
 
  // Tool Options

  const buyScissors = () => {
    cost = 5;
    money = money - 5;
    makeAmount = 5;
    tool = "a pair of rusty scissors";
    alertText();
  };
  
  const buyOldTimey = () => {
    cost = 25;
    money = money - 25;
    makeAmount = 50;
    tool = "an old-timey push lawnmower";
    alertText();
  };
  
  const buyFancyBattery = () => {
    cost = 250;
    money = money - 250;
    makeAmount = 100;
    tool = "a fancy battery-powered lawnmower";
    alertText();
  };
  
  const buyTeamOfStudents = () => {
    cost = 500;
    money = money - 500;
    makeAmount = 250;
    tool = "a team of starving students";
    alertText();
  };
  

  // Tool Purchases:

  const buyTool = () => {
    if ((money >= 5) && (tool === 'your teeth')) {
      alert("You have money for a new tool.")
      buyScissors();
    } else if ((money >= 25) && (tool === "a pair of rusty scissors")) {
      alert("You have money for a new tool.")
      buyOldTimey();
    } else if ((money >= 250) && (tool === "an old-timey push lawnmower")) {
      alert("You have money for a new tool.")
      buyFancyBattery();
    } else if ((money >= 500) && (tool === 'a fancy battery-powered lawnmower')) {
      alert("You have money for a new tool.")
      buyTeamOfStudents();
    } else {
      alert("You don\'t have enough money to buy tools. Keep working.");
      askForAction();
    }
  };


  
