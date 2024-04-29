#! /usr/bin/env node
import inquirer from "inquirer";
let answers: {
    sentence:string
} =await inquirer.prompt([
    {
        name: "sentence",
        type:"input",
        message:"Enter your sentence to count the word:"
    }
]);
    let words = answers.sentence.trim().split(" ")
    console.log(`Your sentence word count is ${words.length}`);

    