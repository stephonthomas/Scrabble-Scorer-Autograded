// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
   'D': 2, 'G': 2,
   'B': 3, 'C': 3, 'M': 3, 'P': 3,
   'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
   'K': 5,
   'J': 8, 'X': 8,
   'Q': 10, 'Z': 10
};// each letter has to have a value, I tried to put them in an array but that doesnt work //

function oldScrabbleScorer(word) {
   word = word.toUpperCase(); // make the word uppercase //
	let letterPoints = "";

	for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const pointValue = oldPointStructure[letter];
      if (pointValue !== undefined) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
		 }// checks each letter for pt value //
 
	  }
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word:");
   word = word.toLowerCase(); // case sensitive //
   let result = oldScrabbleScorer(word);
   console.log(result);
};

function simpleScorer(word) {
   let letterPoints = 0;
    
   for (let i = 0; i < word.length; i++) {
      letterPoints++;
   }
   return letterPoints;
};

function vowelBonusScorer(word) {
   let score = 0;
 
   const vowels = "aeiouAEIOU";
 
   for (let i = 0; i < word.length; i++) {
     if (vowels.includes(word[i])) {
       score += 3;
     } else {
      score += 1;
     }
   }
 
   return score;
 };

let scrabbleScorer=(word) =>{
   let score = 0;
   word = word.toLowerCase();

   for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const pointValue = newPointStructure[letter];
      
      if (pointValue !== undefined) {
        score += pointValue;
      }
   }
   return score;
};

const scoringAlgorithms = [
   {
     name: "Simple Score",
     description: "Each letter is worth 1 point.",
     scorerFunction: simpleScorer
   },
   {
     name: "Bonus Vowels",
     description: "Vowels are worth 3 points. Consonants are worth 1 point.",
     scorerFunction: vowelBonusScorer
   },
   {
     name: "Scrabble",
     description: "The traditional scoring algorithm for Scrabble.",
     scorerFunction: scrabbleScorer
   }
 ];

function scorerPrompt() {
   let userChoice = input.question("Choose a scoring algorithm:\n1. Simple Score\n2. Bonus Vowel\n3. Scrabble\n");
   let score = 0;
   let selectedAlgorithm = "";

   if (userChoice === "1") {
      selectedAlgorithm = scoringAlgorithms[0];
   } else if (userChoice === "2") {
      selectedAlgorithm = scoringAlgorithms[1];
    } else if (userChoice === "3") {
      selectedAlgorithm = scoringAlgorithms[2];
    } else {
      console.log("Invalid choice. Please choose a valid scoring algorithm.");
      return;
    }

   for (let i = 0; i < scoringAlgorithms.length; i++) {
      let algorithm = scoringAlgorithms[i];
      console.log(`${i + 1} ${algorithm.name}: ${algorithm.description}`);
   }
  
   console.log(`Scoring algorithm: ${selectedAlgorithm.name}`);

}
   //  Simple scoring //
   //console.log("algorithm name: ", scoringAlgorithms[0].name); //
   //console.log("scoringFunction result: ", scoringAlgorithms[0].scoringFunction("JavaScript")); //
   function transform(oldPointStructure) {
   const newPointStructure = {};

   for (const key in oldPointStructure) {
      const letters = key.toLowerCase();
      const pointValue = oldPointStructure[key];// gets pt value from oldptstrct //

      newPointStructure[letters] = pointValue;// assigns pt value to letter //
   }

   return newPointStructure;

}

let newPointStructure = transform(oldPointStructure);

/*    console.log("Scrabble scoring values for");
console.log("letter a: ", newPointStructure.a);
console.log("letter j: ", newPointStructure.j);
console.log("letter z: ", newPointStructure["z"]);*/
function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
