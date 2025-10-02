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
const hasSword = true;
const hasCompass = false;

console.log("You see four paths: one leads to the mountains, the other to the village, to the forest and one into the cave.");
const choice = readline.question("Do you go to the 'mountains', the 'village', the 'forest' or the 'cave'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  // Nested conditional
  console.log("Suddenly, a wild beast blocks your path!");
  if (hasSword) {
    console.log("You fight bravely with your sword and defeat the beast.");
  } else {
    console.log("You have no weapon. the beast chases you away!");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");

} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  
  // Nested conditional - another scenario
  if (hasCompass) {
    console.log("With the compass, you discover a hidden shortcut and arrive faster.");
  } else {
    console.log("It takes longer, but you eventually reach the village.");
  }

} else if (choice === "forest") {
  console.log("The forest is dense and full of strange sounds.");

  if (hasTorch && hasSword) {
    console.log("With light and protection, you make it through safely.");
  } else if (hasTorch && !hasSword) {
    console.log("You can see the way, but without a weapon, you are forced to flee from predators.");
  } else if (!hasTorch && hasCompass) {
    console.log("You know the direction with your compass, but it's too dark to continue.");
  } else {
    console.log("You are swallowed by the darkness of the forest.");
  }

} else if (choice === "cave") {
  console.log("You discover a mysterious cave.");

  if (hasTorch && (hasSword || hasCompass)) {
    console.log("You explore the cave, fighting off dangers and navigating with ease.");
  } else if (!hasTorch && hasCompass) {
    console.log("You know the way, but without light, you cannot proceed.");
  } else {
    console.log("You stumble in the dark and retreat.");
  }

} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/