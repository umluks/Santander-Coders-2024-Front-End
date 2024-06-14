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