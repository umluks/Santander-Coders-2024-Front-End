// Operadores Booleanos, condicionais

// IF/ELSE
const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual a sua idade?"))

if (idade >= 18) {
    console.log ("Voce e maior")
} else {
    console.log ("Voce e menor")
};

//swintch
const prompt = require("readline-sync");

const idade2 = Number(prompt.question("Qual a sua idade? "));

switch(true) {
    case idade2 < 10:
        console.log("Você é menor");
        break;
    case idade2 < 20:
        console.log("Você é maior");
        break;
    case idade2 < 30:
        console.log("Você é velho");
        break;
    default:
        console.log("Você é muito velho");
}


