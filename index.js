#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter Your Sentence To Count The Words:",
        type: "input"
    }
]);
//to print words count
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is: ${words.length}`);
//to print characters count
let characters = answers.sentence.split(" ").join("");
console.log(characters);
console.log(`Your sentence character count is: ${characters.length}`);
