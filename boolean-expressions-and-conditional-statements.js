/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = false;
const hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
console.log("You also notice some items nearby: a torch, a map, a sword and a compass.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const secondChoice = readline.question("You come across a wild animal. Do you use your 'sword' or 'run'?");
  if (secondChoice === "sword" && hasSword) {
    console.log("You fight the animal and win!");
  } else if (secondChoice === "run") {
    console.log("You manage to run away, but you are exhausted.");
  } else {
    console.log("You don't have a sword, so you can't fight. You run away.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const villageChoice = readline.question("In the village, you meet a merchant. Do you buy a potion or leave?");
  if (villageChoice === "potion") {
    console.log("You buy a potion. You might need it later.");
  } else {
    console.log("You leave the village empty handed.");
  }
} else if (choice === "village" && !hasMap) {
  console.log("Without a map, you get lost on your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
